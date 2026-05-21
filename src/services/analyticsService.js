import { database } from "./firebaseConfig";
import { ref, push, update, get, query, orderByChild, limitToLast, remove } from "firebase/database";
import { UAParser } from "ua-parser-js";

const parser = new UAParser();

// Vérifier si on est en développement
const isDevelopment = process.env.NODE_ENV === "development" || window.location.hostname === "localhost";

console.log(`📊 Analytics Mode: ${isDevelopment ? "🔴 DÉVELOPPEMENT (désactivé)" : "🟢 PRODUCTION (activé)"}`);

// Fonction pour obtenir la géolocalisation via API gratuite
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
  } catch (error) {
    console.error("Geolocation error:", error);
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

// Parser le User-Agent
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

// Créer une session unique
let sessionId = null;
let sessionStartTime = null;
let currentVisitRef = null;
let pageStartTime = null;
let currentPage = null;

const initSession = () => {
  sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  sessionStartTime = Date.now();
};

// Tracker une visite
export const trackVisit = async () => {
  if (isDevelopment) {
    console.log("⏭️ Tracking désactivé en développement");
    return;
  }

  try {
    initSession();

    const userAgentData = parseUserAgent();
    const geoData = await getGeolocation();

    const visitData = {
      timestamp: new Date().toISOString(),
      timestampMs: Date.now(),
      sessionId: sessionId,
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

    // Tracker le scroll depth
    trackScrollDepth();

    console.log("✅ Visit tracked:", sessionId);
  } catch (error) {
    console.error("❌ Error tracking visit:", error);
  }
};

// Tracker une page visitée avec durée précise
export const trackPageView = (pageName) => {
  if (isDevelopment) return;

  try {
    if (!currentVisitRef) return;

    // Si on quitte une page, enregistrer sa durée
    if (currentPage && pageStartTime) {
      const pageDuration = Math.round((Date.now() - pageStartTime) / 1000);
      updatePageDuration(currentPage, pageDuration);
    }

    // Commencer à tracker la nouvelle page
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

    console.log("✅ Page view tracked:", pageName);
  } catch (error) {
    console.error("❌ Error tracking page view:", error);
  }
};

// Mettre à jour la durée d'une page
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
              duration: duration,
            });
          }
        });
      }
    });
  } catch (error) {
    console.error("❌ Error updating page duration:", error);
  }
};

// Tracker un clic avec contexte détaillé
export const trackClick = (elementName, elementType = "button", elementClass = "", elementId = "") => {
  if (isDevelopment) return;

  try {
    if (!currentVisitRef) return;

    const clickData = {
      element: elementName,
      type: elementType,
      class: elementClass,
      id: elementId,
      page: currentPage,
      timestamp: new Date().toISOString(),
      timestampMs: Date.now(),
    };

    const clicksRef = ref(database, `analytics/visits/${currentVisitRef.key}/clicks`);
    push(clicksRef, clickData);

    console.log("✅ Click tracked:", elementName);
  } catch (error) {
    console.error("❌ Error tracking click:", error);
  }
};

// Tracker le scroll depth
const trackScrollDepth = () => {
  if (isDevelopment) return;

  let maxScroll = 0;

  window.addEventListener("scroll", () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
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

// Tracker une conversion (téléchargement CV, contact, etc.)
export const trackConversion = (conversionType, conversionValue = null) => {
  if (isDevelopment) return;

  try {
    if (!currentVisitRef) return;

    const conversionData = {
      type: conversionType,
      value: conversionValue,
      page: currentPage,
      timestamp: new Date().toISOString(),
      timestampMs: Date.now(),
    };

    const conversionsRef = ref(database, `analytics/visits/${currentVisitRef.key}/conversions`);
    push(conversionsRef, conversionData);

    console.log("✅ Conversion tracked:", conversionType);
  } catch (error) {
    console.error("❌ Error tracking conversion:", error);
  }
};

// Mettre à jour la durée de session
export const updateSessionDuration = () => {
  if (isDevelopment) return;

  try {
    if (!currentVisitRef || !sessionStartTime) return;

    const duration = Math.round((Date.now() - sessionStartTime) / 1000);

    // Enregistrer la durée de la dernière page
    if (currentPage && pageStartTime) {
      const pageDuration = Math.round((Date.now() - pageStartTime) / 1000);
      updatePageDuration(currentPage, pageDuration);
    }

    const updates = {};
    updates[`analytics/visits/${currentVisitRef.key}/sessionDuration`] = duration;

    update(ref(database), updates);
    console.log("✅ Session duration updated:", duration);
  } catch (error) {
    console.error("❌ Error updating session duration:", error);
  }
};

// Obtenir les statistiques globales
export const getAnalyticsStats = async () => {
  try {
    const visitsRef = ref(database, "analytics/visits");
    const snapshot = await get(visitsRef);

    if (!snapshot.exists()) {
      return null;
    }

    const visits = snapshot.val();
    const visitsArray = Object.values(visits);

    const stats = {
      totalVisits: visitsArray.length,
      totalPageViews: visitsArray.reduce((sum, v) => sum + (v.pages ? Object.keys(v.pages).length : 0), 0),
      totalClicks: visitsArray.reduce((sum, v) => sum + (v.clicks ? Object.keys(v.clicks).length : 0), 0),
      totalConversions: visitsArray.reduce((sum, v) => sum + (v.conversions ? Object.keys(v.conversions).length : 0), 0),
      avgSessionDuration: Math.round(
        visitsArray.reduce((sum, v) => sum + (v.sessionDuration || 0), 0) / visitsArray.length
      ),
      avgScrollDepth: Math.round(
        visitsArray.reduce((sum, v) => sum + (v.scrollDepth || 0), 0) / visitsArray.length
      ),
      uniqueCountries: [...new Set(visitsArray.map((v) => v.country))].length,
      uniqueBrowsers: [...new Set(visitsArray.map((v) => v.browser))].length,
      uniqueDevices: [...new Set(visitsArray.map((v) => v.device))].length,
    };

    return stats;
  } catch (error) {
    console.error("❌ Error getting analytics stats:", error);
    return null;
  }
};

// Réinitialiser toutes les données
export const resetAllAnalytics = async () => {
  try {
    const visitsRef = ref(database, "analytics/visits");
    await remove(visitsRef);
    console.log("✅ Toutes les données ont été réinitialisées");
  } catch (error) {
    console.error("❌ Error resetting analytics:", error);
  }
};

export { sessionId };

