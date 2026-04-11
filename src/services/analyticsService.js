import { database } from "./firebaseConfig";
import { ref, push, update } from "firebase/database";
import { UAParser } from "ua-parser-js";

const parser = new UAParser();

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
    };
  } catch (error) {
    console.error("Geolocation error:", error);
    return {
      country: "Unknown",
      city: "Unknown",
      latitude: null,
      longitude: null,
      ip: "Unknown",
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

const initSession = () => {
  sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  sessionStartTime = Date.now();
};

// Tracker une visite
export const trackVisit = async () => {
  try {
    initSession();

    const userAgentData = parseUserAgent();
    const geoData = await getGeolocation();

    const visitData = {
      timestamp: new Date().toISOString(),
      sessionId: sessionId,
      ...userAgentData,
      ...geoData,
      pages: [],
      clicks: [],
      referrer: document.referrer || "direct",
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
    };

    const visitsRef = ref(database, "analytics/visits");
    const newVisitRef = await push(visitsRef, visitData);
    currentVisitRef = newVisitRef;

    console.log("✅ Visit tracked:", sessionId);
  } catch (error) {
    console.error("❌ Error tracking visit:", error);
  }
};

// Tracker une page visitée
export const trackPageView = (pageName, duration = 0) => {
  try {
    if (!currentVisitRef) return;

    const pageData = {
      page: pageName,
      timestamp: new Date().toISOString(),
      duration: duration,
    };

    const pagesRef = ref(database, `${currentVisitRef.path}/pages`);
    push(pagesRef, pageData);

    console.log("✅ Page view tracked:", pageName);
  } catch (error) {
    console.error("❌ Error tracking page view:", error);
  }
};

// Tracker un clic
export const trackClick = (buttonName, buttonType = "link") => {
  try {
    if (!currentVisitRef) return;

    const clickData = {
      button: buttonName,
      type: buttonType,
      timestamp: new Date().toISOString(),
    };

    const clicksRef = ref(database, `${currentVisitRef.path}/clicks`);
    push(clicksRef, clickData);

    console.log("✅ Click tracked:", buttonName);
  } catch (error) {
    console.error("❌ Error tracking click:", error);
  }
};

// Mettre à jour la durée de session
export const updateSessionDuration = () => {
  try {
    if (!currentVisitRef || !sessionStartTime) return;

    const duration = Math.round((Date.now() - sessionStartTime) / 1000);
    const updates = {};
    updates[`${currentVisitRef.path}/sessionDuration`] = duration;

    update(ref(database), updates);
    console.log("✅ Session duration updated:", duration);
  } catch (error) {
    console.error("❌ Error updating session duration:", error);
  }
};

export { sessionId };
