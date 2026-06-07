import { database } from "./firebaseConfig";
import { ref, push, update, get, remove } from "firebase/database";
import { UAParser } from "ua-parser-js";

const parser = new UAParser();

const isDevelopment = process.env.NODE_ENV === "development" || window.location.hostname === "localhost";

// Bot detection — block before any Firebase write
const BOT_PATTERNS = [
  "headlesschrome", "headless", "phantomjs", "selenium",
  "webdriver", "puppeteer", "scrapy", "python-requests",
  "curl/", "wget/", "go-http-client", "okhttp", "axios/",
  "bot", "crawler", "spider", "slurp", "baiduspider",
  "googlebot", "bingbot", "yandexbot", "facebookexternalhit",
];

const isBot = () => {
  const ua = (navigator.userAgent || "").toLowerCase();
  return BOT_PATTERNS.some((p) => ua.includes(p));
};

const getGeolocation = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return {
      country: data.country_name || "Unknown",
      city: data.city || "Unknown",
      latitude: data.latitude || null,
      longitude: data.longitude || null,
      ip: data.ip || "Unknown",
      timezone: data.timezone || "Unknown",
      isp: data.org || "Unknown",
    };
  } catch {
    return {
      country: "Unknown",
      city: "Unknown",
      latitude: null,
      longitude: null,
      ip: "Unknown",
      timezone: "Unknown",
      isp: "Unknown",
    };
  }
};

const parseUserAgent = () => {
  const result = parser.getResult();
  return {
    browser: result.browser.name || "Unknown",
    browserVersion: result.browser.version || "Unknown",
    os: result.os.name || "Unknown",
    osVersion: result.os.version || "Unknown",
    device: result.device.type || "desktop",
    userAgent: navigator.userAgent,
  };
};

let sessionId = null;
let sessionStartTime = null;
let currentVisitRef = null;
let pageStartTime = null;
let currentPage = null;
// Queue the first page view — it fires before trackVisit async finishes
let pendingPageView = null;

const initSession = () => {
  sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  sessionStartTime = Date.now();
};

export const trackVisit = async () => {
  if (isDevelopment) return;
  if (isBot()) {
    console.log("🤖 Bot détecté — tracking ignoré");
    return;
  }

  try {
    initSession();

    const userAgentData = parseUserAgent();
    const geoData = await getGeolocation();

    const visitData = {
      timestamp: new Date().toISOString(),
      timestampMs: Date.now(),
      sessionId,
      ...userAgentData,
      ...geoData,
      pages: [],
      clicks: [],
      scrollDepth: 0,
      referrer: document.referrer || "direct",
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      sessionDuration: 0,
      totalPageViews: 0,
      totalClicks: 0,
      conversions: [],
    };

    const visitsRef = ref(database, "analytics/visits");
    const newVisitRef = await push(visitsRef, visitData);
    currentVisitRef = newVisitRef;

    // Flush queued page view that fired before this async completed
    if (pendingPageView) {
      const queued = pendingPageView;
      pendingPageView = null;
      trackPageView(queued);
    }

    trackScrollDepth();
  } catch (error) {
    console.error("❌ Error tracking visit:", error);
  }
};

export const trackPageView = (pageName) => {
  if (isDevelopment) return;

  // Visit not ready yet — queue the page and wait for trackVisit to flush it
  if (!currentVisitRef) {
    pendingPageView = pageName;
    return;
  }

  try {
    if (currentPage && pageStartTime) {
      const pageDuration = Math.round((Date.now() - pageStartTime) / 1000);
      updatePageDuration(currentPage, pageDuration);
    }

    currentPage = pageName;
    pageStartTime = Date.now();

    const pageData = {
      page: pageName,
      timestamp: new Date().toISOString(),
      timestampMs: Date.now(),
      duration: 0,
      scrollDepth: 0,
      interactions: 0,
    };

    const pagesRef = ref(database, `analytics/visits/${currentVisitRef.key}/pages`);
    push(pagesRef, pageData);
  } catch (error) {
    console.error("❌ Error tracking page view:", error);
  }
};

const updatePageDuration = (pageName, duration) => {
  if (isDevelopment || !currentVisitRef) return;

  try {
    const pagesRef = ref(database, `analytics/visits/${currentVisitRef.key}/pages`);
    get(pagesRef).then((snapshot) => {
      if (snapshot.exists()) {
        const pages = snapshot.val();
        Object.keys(pages).forEach((key) => {
          if (pages[key].page === pageName) {
            update(ref(database, `analytics/visits/${currentVisitRef.key}/pages/${key}`), {
              duration,
            });
          }
        });
      }
    });
  } catch (error) {
    console.error("❌ Error updating page duration:", error);
  }
};

export const trackClick = (elementName, elementType = "button", elementClass = "", elementId = "", metadata = {}) => {
  if (isDevelopment || !currentVisitRef) return;

  try {
    const clickData = {
      element: elementName,
      type: elementType,
      class: elementClass,
      id: elementId,
      page: currentPage,
      timestamp: new Date().toISOString(),
      timestampMs: Date.now(),
      metadata,
    };

    const clicksRef = ref(database, `analytics/visits/${currentVisitRef.key}/clicks`);
    push(clicksRef, clickData);
  } catch (error) {
    console.error("❌ Error tracking click:", error);
  }
};

const trackScrollDepth = () => {
  if (isDevelopment) return;

  let maxScroll = 0;

  window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;

    const scrollPercentage = Math.min(
      100,
      Math.round((window.scrollY / scrollHeight) * 100)
    );

    if (scrollPercentage > maxScroll) {
      maxScroll = scrollPercentage;
      if (currentVisitRef) {
        update(ref(database, `analytics/visits/${currentVisitRef.key}`), {
          scrollDepth: maxScroll,
        });
      }
    }
  });
};

export const trackConversion = (conversionType, conversionValue = null) => {
  if (isDevelopment || !currentVisitRef) return;

  try {
    const conversionData = {
      type: conversionType,
      value: conversionValue,
      page: currentPage,
      timestamp: new Date().toISOString(),
      timestampMs: Date.now(),
    };

    const conversionsRef = ref(database, `analytics/visits/${currentVisitRef.key}/conversions`);
    push(conversionsRef, conversionData);
  } catch (error) {
    console.error("❌ Error tracking conversion:", error);
  }
};

export const updateSessionDuration = () => {
  if (isDevelopment || !currentVisitRef || !sessionStartTime) return;

  try {
    const duration = Math.round((Date.now() - sessionStartTime) / 1000);

    if (currentPage && pageStartTime) {
      const pageDuration = Math.round((Date.now() - pageStartTime) / 1000);
      updatePageDuration(currentPage, pageDuration);
    }

    update(ref(database), {
      [`analytics/visits/${currentVisitRef.key}/sessionDuration`]: duration,
    });
  } catch (error) {
    console.error("❌ Error updating session duration:", error);
  }
};

export const getAnalyticsStats = async () => {
  try {
    const visitsRef = ref(database, "analytics/visits");
    const snapshot = await get(visitsRef);
    if (!snapshot.exists()) return null;

    const visits = snapshot.val();
    const visitsArray = Object.values(visits);

    return {
      totalVisits: visitsArray.length,
      totalPageViews: visitsArray.reduce((s, v) => s + (v.pages ? Object.keys(v.pages).length : 0), 0),
      totalClicks: visitsArray.reduce((s, v) => s + (v.clicks ? Object.keys(v.clicks).length : 0), 0),
      totalConversions: visitsArray.reduce((s, v) => s + (v.conversions ? Object.keys(v.conversions).length : 0), 0),
      avgSessionDuration: Math.round(
        visitsArray.reduce((s, v) => s + (v.sessionDuration || 0), 0) / visitsArray.length
      ),
      uniqueCountries: [...new Set(visitsArray.map((v) => v.country))].length,
    };
  } catch (error) {
    console.error("❌ Error getting analytics stats:", error);
    return null;
  }
};

export const resetAllAnalytics = async () => {
  try {
    await remove(ref(database, "analytics/visits"));
  } catch (error) {
    console.error("❌ Error resetting analytics:", error);
  }
};

export { sessionId };
