import React, { useState, useEffect } from "react";
import { database } from "../../services/firebaseConfig";
import { ref, onValue, get } from "firebase/database";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { blockIP, unblockIP, resetAllAnalytics } from "../../services/analyticsService";
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
  ResponsiveContainer,
} from "recharts";
import Particle from "../Particle";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blockedIPs, setBlockedIPs] = useState([]);
  const [newIPToBlock, setNewIPToBlock] = useState("");
  const [expandedVisit, setExpandedVisit] = useState(null);

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

  // Charger les IPs bloquées
  useEffect(() => {
    const loadBlockedIPs = async () => {
      try {
        const blockedIPsRef = ref(database, "analytics/blockedIPs");
        const snapshot = await get(blockedIPsRef);
        if (snapshot.exists()) {
          const ips = Object.keys(snapshot.val());
          setBlockedIPs(ips);
        }
      } catch (err) {
        console.error("Error loading blocked IPs:", err);
      }
    };
    loadBlockedIPs();
  }, []);

  const handleBlockIP = async () => {
    if (!newIPToBlock.trim()) return;
    await blockIP(newIPToBlock);
    setBlockedIPs([...blockedIPs, newIPToBlock]);
    setNewIPToBlock("");
  };

  const handleUnblockIP = async (ip) => {
    await unblockIP(ip);
    setBlockedIPs(blockedIPs.filter(blockedIP => blockedIP !== ip));
  };

  const handleResetAnalytics = async () => {
    if (window.confirm("⚠️ Êtes-vous sûr ? Cela supprimera TOUTES les données analytics !")) {
      await resetAllAnalytics();
      setVisits([]);
      alert("✅ Toutes les données ont été réinitialisées !");
    }
  };

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

        {/* Section Gestion */}
        <Row style={{ marginBottom: "40px" }}>
          <Col lg={6} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h4 style={{ color: "#18181B", marginBottom: "20px" }}>🚫 IPs Bloquées</h4>
              <div style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  placeholder="Ajouter une IP (ex: 137.255.46.158)"
                  value={newIPToBlock}
                  onChange={(e) => setNewIPToBlock(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                    marginBottom: "10px",
                  }}
                />
                <Button
                  variant="primary"
                  onClick={handleBlockIP}
                  style={{ width: "100%" }}
                >
                  ➕ Bloquer cette IP
                </Button>
              </div>
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {blockedIPs.length === 0 ? (
                  <p style={{ color: "#999" }}>Aucune IP bloquée</p>
                ) : (
                  blockedIPs.map((ip) => (
                    <div
                      key={ip}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px",
                        backgroundColor: "#f9f9f9",
                        borderRadius: "4px",
                        marginBottom: "8px",
                      }}
                    >
                      <span style={{ color: "#666", fontFamily: "monospace" }}>{ip}</span>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleUnblockIP(ip)}
                      >
                        ✕
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </Col>

          <Col lg={6} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", backgroundColor: "#fff3cd" }}>
              <h4 style={{ color: "#856404", marginBottom: "20px" }}>⚠️ Actions Dangereuses</h4>
              <Button
                variant="danger"
                onClick={handleResetAnalytics}
                style={{ width: "100%" }}
              >
                🗑️ Réinitialiser toutes les données
              </Button>
              <p style={{ color: "#856404", marginTop: "15px", fontSize: "0.9em" }}>
                ⚠️ Cette action supprimera TOUTES les données analytics et ne peut pas être annulée !
              </p>
            </Card>
          </Col>
        </Row>

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

        {/* Tableau détaillé avec workflow */}
        <Row>
          <Col lg={12}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
              <h4 style={{ color: "#18181B", marginBottom: "20px" }}>📋 Workflow des Visiteurs</h4>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B", width: "30px" }}></th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Date</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Navigateur</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>OS</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Appareil</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Pays</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Ville</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>IP</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Durée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visits.map((visit, index) => (
                      <React.Fragment key={index}>
                        <tr style={{ borderBottom: "1px solid #eee", cursor: "pointer", backgroundColor: expandedVisit === index ? "#f0f0f0" : "white" }}>
                          <td style={{ padding: "12px", textAlign: "center" }}>
                            <Button
                              variant="link"
                              size="sm"
                              onClick={() => setExpandedVisit(expandedVisit === index ? null : index)}
                              style={{ padding: 0, color: "#2563EB" }}
                            >
                              {expandedVisit === index ? "▼" : "▶"}
                            </Button>
                          </td>
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
                          <td style={{ padding: "12px", color: "#666" }}>{visit.sessionDuration || 0}s</td>
                        </tr>
                        {expandedVisit === index && (
                          <tr style={{ backgroundColor: "#fafafa", borderBottom: "1px solid #eee" }}>
                            <td colSpan="9" style={{ padding: "20px" }}>
                              <div style={{ marginBottom: "20px" }}>
                                <h5 style={{ color: "#18181B", marginBottom: "10px" }}>📄 Pages Visitées</h5>
                                {visit.pages && Object.keys(visit.pages).length > 0 ? (
                                  <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "4px", border: "1px solid #ddd" }}>
                                    {Object.entries(visit.pages).map(([pageKey, pageData]) => (
                                      <div key={pageKey} style={{ padding: "8px", borderBottom: "1px solid #eee", fontSize: "0.9em" }}>
                                        <span style={{ color: "#2563EB", fontWeight: "bold" }}>📍 {pageData.page}</span>
                                        <span style={{ color: "#999", marginLeft: "10px" }}>
                                          {new Date(pageData.timestamp).toLocaleTimeString()} ({pageData.duration}s)
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p style={{ color: "#999" }}>Aucune page visitée</p>
                                )}
                              </div>
                              <div>
                                <h5 style={{ color: "#18181B", marginBottom: "10px" }}>🖱️ Clics</h5>
                                {visit.clicks && Object.keys(visit.clicks).length > 0 ? (
                                  <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "4px", border: "1px solid #ddd" }}>
                                    {Object.entries(visit.clicks).map(([clickKey, clickData]) => (
                                      <div key={clickKey} style={{ padding: "8px", borderBottom: "1px solid #eee", fontSize: "0.9em" }}>
                                        <span style={{ color: "#EC4899", fontWeight: "bold" }}>🔗 {clickData.button}</span>
                                        <span style={{ color: "#999", marginLeft: "10px" }}>
                                          ({clickData.type}) - {new Date(clickData.timestamp).toLocaleTimeString()}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p style={{ color: "#999" }}>Aucun clic enregistré</p>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
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
