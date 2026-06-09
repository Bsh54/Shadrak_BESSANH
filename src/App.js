import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
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

const Projects = lazy(() => import("./components/Projects/Projects"));
const Achievements = lazy(() => import("./components/Achievements/Achievements"));
const AchievementDetail = lazy(() => import("./components/Achievements/AchievementDetail"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));
const AdminDashboard = lazy(() => import("./components/Admin/AdminDashboard"));

function PageLoader() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{ width: 40, height: 40, border: "3px solid #e2e8f0", borderTopColor: "#2563EB", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
    </div>
  );
}

function AppContent() {
  const [load, upadateLoad] = useState(true);
  const location = useLocation();

  useClickTracking();

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const isAdmin = location.pathname === "/admin";

  useEffect(() => {
    if (!isAdmin) trackVisit();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isAdmin) return;
    const pageName = location.pathname === "/" ? "Home" : location.pathname.replace("/", "");
    trackPageView(pageName);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

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
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
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
