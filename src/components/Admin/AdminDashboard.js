import React, { useState, useEffect } from "react";
import { database } from "../../services/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Particle from "../Particle";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      console.log("🔍 Tentative de connexion à Firebase...");
      const visitsRef = ref(database, "analytics/visits");
      console.log("📍 Référence créée:", visitsRef.path);

      const unsubscribe = onValue(
        visitsRef,
        (snapshot) => {
          console.log("✅ Snapshot reçu");
          if (snapshot.exists()) {
            const data = snapshot.val();
            console.log("📊 Données reçues:", data);
            const visitsArray = Object.entries(data).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            console.log("📈 Visites parsées:", visitsArray.length);
            setVisits(visitsArray);
            setError(null);
          } else {
            console.log("⚠️ Aucune donnée trouvée");
            setVisits([]);
          }
          setLoading(false);
        },
        (error) => {
          console.error("❌ Erreur Firebase:", error);
          setError(error.message);
          setLoading(false);
        }
      );

      return () => unsubscribe();
    } catch (err) {
      console.error("❌ Erreur setup:", err);
      setError(err.message);
      setLoading(false);
    }
  }, []);

  // Calculs des statistiques
  const totalVisits = visits.length;

  const browserStats = visits.reduce((acc, visit) => {
    const browser = visit.browser || "Unknown";
    acc[browser] = (acc[browser] || 0) + 1;
    return acc;
  }, {});

  const osStats = visits.reduce((acc, visit) => {
    const os = visit.os || "Unknown";
    acc[os] = (acc[os] || 0) + 1;
    return acc;
  }, {});

  const deviceStats = visits.reduce((acc, visit) => {
    const device = visit.device || "desktop";
    acc[device] = (acc[device] || 0) + 1;
    return acc;
  }, {});

  const countryStats = visits.reduce((acc, visit) => {
    const country = visit.country || "Unknown";
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});

  // Visites par jour
  const visitsByDay = visits.reduce((acc, visit) => {
    const date = new Date(visit.timestamp).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const visitsByDayData = Object.entries(visitsByDay)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, count]) => ({ date, visits: count }));

  const browserData = Object.entries(browserStats).map(([name, value]) => ({
    name,
    value,
  }));

  const osData = Object.entries(osStats).map(([name, value]) => ({
    name,
    value,
  }));

  const deviceData = Object.entries(deviceStats).map(([name, value]) => ({
    name,
    value,
  }));

  const countryData = Object.entries(countryStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }));

  const avgSessionDuration =
    visits.length > 0
      ? Math.round(
          visits.reduce((sum, v) => sum + (v.sessionDuration || 0), 0) /
            visits.length
        )
      : 0;

  const COLORS = ["#2563EB", "#7C3AED", "#EC4899", "#F59E0B", "#10B981"];

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p>Chargement des données...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "red", textAlign: "center" }}>
          <h2>Erreur Firebase</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", paddingTop: "100px", paddingBottom: "50px" }}>
      <Particle />
      <Container>
        <h1 style={{ color: "#18181B", marginBottom: "40px", textAlign: "center", fontSize: "2.5em" }}>
          📊 Tableau de Bord Analytics
        </h1>

        {/* KPIs */}
        <Row style={{ marginBottom: "40px" }}>
          <Col md={3} style={{ marginBottom: "20px" }}>
            <Card style={{ textAlign: "center", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#2563EB", fontSize: "2.5em" }}>{totalVisits}</h3>
              <p style={{ color: "#666", marginBottom: 0 }}>Visites Totales</p>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "20px" }}>
            <Card style={{ textAlign: "center", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#7C3AED", fontSize: "2.5em" }}>{avgSessionDuration}s</h3>
              <p style={{ color: "#666", marginBottom: 0 }}>Durée Moyenne</p>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "20px" }}>
            <Card style={{ textAlign: "center", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#EC4899", fontSize: "2.5em" }}>{Object.keys(countryStats).length}</h3>
              <p style={{ color: "#666", marginBottom: 0 }}>Pays Uniques</p>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "20px" }}>
            <Card style={{ textAlign: "center", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h3 style={{ color: "#F59E0B", fontSize: "2.5em" }}>{Object.keys(browserStats).length}</h3>
              <p style={{ color: "#666", marginBottom: 0 }}>Navigateurs</p>
            </Card>
          </Col>
        </Row>

        {/* Graphiques */}
        {visitsByDayData.length > 0 && (
          <Row style={{ marginBottom: "40px" }}>
            <Col lg={12} style={{ marginBottom: "30px" }}>
              <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                <h4 style={{ color: "#18181B", marginBottom: "20px" }}>📈 Visites par Jour</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={visitsByDayData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="visits" stroke="#2563EB" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>
        )}

        <Row style={{ marginBottom: "40px" }}>
          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h4 style={{ color: "#18181B", marginBottom: "20px" }}>🌐 Navigateurs</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={browserData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {browserData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h4 style={{ color: "#18181B", marginBottom: "20px" }}>💻 Systèmes d'Exploitation</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={osData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {osData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        <Row style={{ marginBottom: "40px" }}>
          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h4 style={{ color: "#18181B", marginBottom: "20px" }}>📱 Types d'Appareils</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deviceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#2563EB" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h4 style={{ color: "#18181B", marginBottom: "20px" }}>🌍 Top 10 Pays</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={countryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#7C3AED" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Tableau détaillé */}
        <Row>
          <Col lg={12}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h4 style={{ color: "#18181B", marginBottom: "20px" }}>📋 Toutes les Visites</h4>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Date</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Navigateur</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>OS</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Appareil</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Pays</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Ville</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visits.map((visit, index) => (
                      <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "12px", color: "#666", fontSize: "0.9em" }}>
                          {new Date(visit.timestamp).toLocaleString()}
                        </td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.browser}</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.os}</td>
                        <td style={{ padding: "12px", color: "#666" }}>
                          {visit.device === "mobile" ? "📱" : visit.device === "tablet" ? "📱" : "💻"}
                        </td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.country}</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.city}</td>
                        <td style={{ padding: "12px", color: "#666", fontSize: "0.85em" }}>{visit.ip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
