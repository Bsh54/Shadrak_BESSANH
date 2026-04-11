import React from "react";
import { useSearchParams, Navigate } from "react-router-dom";

const ADMIN_TOKEN = process.env.REACT_APP_ADMIN_TOKEN;

function AdminRoute({ children }) {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  if (!token || token !== ADMIN_TOKEN) {
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5"
      }}>
        <div style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}>
          <h1 style={{ color: "#d32f2f", marginBottom: "20px" }}>Accès Refusé</h1>
          <p style={{ color: "#666", marginBottom: "20px" }}>Token invalide ou manquant</p>
          <p style={{ color: "#999", fontSize: "0.9em" }}>Utilisez : /admin?token=YOUR_TOKEN</p>
        </div>
      </div>
    );
  }

  return children;
}

export default AdminRoute;
