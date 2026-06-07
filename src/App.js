import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import AchievementDetail from "./components/Achievements/AchievementDetail";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminRoute from "./components/Admin/AdminRoute";
import { useClickTracking } from "./hooks/useClickTracking";
import BreadcrumbSchema from "./components/SEO/BreadcrumbSchema";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { trackVisit, trackPageView, updateSessionDuration } from "./services/analyticsService";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppContent() {
  const [load, upadateLoad] = useState(true);
  const location = useLocation();

  // Activer le tracking global des clics
  useClickTracking();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const isAdmin = location.pathname === "/admin";

  // Tracker la visite au chargement (jamais sur /admin)
  useEffect(() => {
    if (!isAdmin) trackVisit();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Tracker les changements de page (jamais sur /admin)
  useEffect(() => {
    if (isAdmin) return;
    const pageName = location.pathname === "/" ? "Home" : location.pathname.replace("/", "");
    trackPageView(pageName);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Mettre à jour la durée de session avant de quitter
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (!isAdmin) updateSessionDuration();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Preloader load={load} />
      <BreadcrumbSchema />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {location.pathname !== "/admin" && <Navbar />}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievement/:id" element={<AchievementDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {location.pathname !== "/admin" && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
