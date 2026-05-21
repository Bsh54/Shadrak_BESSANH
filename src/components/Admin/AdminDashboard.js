import React, { useState, useEffect } from "react";
import { database } from "../../services/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { resetAllAnalytics } from "../../services/analyticsService";
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
  const [dateFilter, setDateFilter] = useState("all");
  const [selectedVisit, setSelectedVisit] = useState(null);

  useEffect(() => {
    try {
      const visitsRef = ref(database, "analytics/visits");

      const unsubscribe = onValue(
        visitsRef,
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const visitsArray = Object.entries(data).map(([key, value]) => ({
              id: key,
              ...value,
            }));
            setVisits(visitsArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)));
            setError(null);
          } else {
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

  // Filtrer les visites par date
  const getFilteredVisits = () => {
    const now = new Date();
    return visits.filter((visit) => {
      const visitDate = new Date(visit.timestamp);
      switch (dateFilter) {
        case "today":
          return visitDate.toDateString() === now.toDateString();
        case "week":
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return visitDate >= weekAgo;
        case "month":
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          return visitDate >= monthAgo;
        default:
          return true;
      }
    });
  };

  const filteredVisits = getFilteredVisits();

  // Calculs détaillés des statistiques
  const calculateStats = () => {
    const stats = {
      totalVisits: filteredVisits.length,
      totalPageViews: 0,
      totalClicks: 0,
      totalConversions: 0,
      avgSessionDuration: 0,
      avgScrollDepth: 0,
      avgPageDuration: 0,
      bounceRate: 0,
      uniqueCountries: new Set(),
      uniqueBrowsers: new Set(),
      uniqueDevices: new Set(),
      uniqueIPs: new Set(),
      pageStats: {},
      clickStats: {},
      conversionStats: {},
      deviceStats: {},
      browserStats: {},
      osStats: {},
      countryStats: {},
      timeOnPageByPage: {},
    };

    filteredVisits.forEach((visit) => {
      stats.uniqueCountries.add(visit.country);
      stats.uniqueBrowsers.add(visit.browser);
      stats.uniqueDevices.add(visit.device);
      stats.uniqueIPs.add(visit.ip);

      stats.avgSessionDuration += visit.sessionDuration || 0;
      stats.avgScrollDepth += visit.scrollDepth || 0;

      // Pages
      if (visit.pages) {
        Object.values(visit.pages).forEach((page) => {
          stats.totalPageViews++;
          stats.pageStats[page.page] = (stats.pageStats[page.page] || 0) + 1;
          stats.avgPageDuration += page.duration || 0;
          stats.timeOnPageByPage[page.page] = (stats.timeOnPageByPage[page.page] || 0) + (page.duration || 0);
        });
      }

      // Clics
      if (visit.clicks) {
        Object.values(visit.clicks).forEach((click) => {
          stats.totalClicks++;
          stats.clickStats[click.element] = (stats.clickStats[click.element] || 0) + 1;
        });
      }

      // Conversions
      if (visit.conversions) {
        Object.values(visit.conversions).forEach((conversion) => {
          stats.totalConversions++;
          stats.conversionStats[conversion.type] = (stats.conversionStats[conversion.type] || 0) + 1;
        });
      }

      // Device, Browser, OS, Country
      stats.deviceStats[visit.device] = (stats.deviceStats[visit.device] || 0) + 1;
      stats.browserStats[visit.browser] = (stats.browserStats[visit.browser] || 0) + 1;
      stats.osStats[visit.os] = (stats.osStats[visit.os] || 0) + 1;
      stats.countryStats[visit.country] = (stats.countryStats[visit.country] || 0) + 1;

      // Bounce rate (sessions avec 1 seule page)
      if (visit.pages && Object.keys(visit.pages).length === 1) {
        stats.bounceRate++;
      }
    });

    stats.avgSessionDuration = filteredVisits.length > 0 ? Math.round(stats.avgSessionDuration / filteredVisits.length) : 0;
    stats.avgScrollDepth = filteredVisits.length > 0 ? Math.round(stats.avgScrollDepth / filteredVisits.length) : 0;
    stats.avgPageDuration = stats.totalPageViews > 0 ? Math.round(stats.avgPageDuration / stats.totalPageViews) : 0;
    stats.bounceRate = filteredVisits.length > 0 ? Math.round((stats.bounceRate / filteredVisits.length) * 100) : 0;
    stats.conversionRate = filteredVisits.length > 0 ? Math.round((stats.totalConversions / filteredVisits.length) * 100) : 0;

    return stats;
  };

  const stats = calculateStats();

  const handleResetAnalytics = async () => {
    if (window.confirm("⚠️ Êtes-vous sûr ? Cela supprimera TOUTES les données analytics !")) {
      await resetAllAnalytics();
      setVisits([]);
      alert("✅ Toutes les données ont été réinitialisées !");
    }
  };

  // Préparer les données pour les graphiques
  const visitsByDay = {};
  filteredVisits.forEach((visit) => {
    const date = new Date(visit.timestamp).toLocaleDateString();
    visitsByDay[date] = (visitsByDay[date] || 0) + 1;
  });

  const visitsByDayData = Object.entries(visitsByDay)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, count]) => ({ date, visits: count }));

  const pageData = Object.entries(stats.pageStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }));

  const clickData = Object.entries(stats.clickStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }));

  const conversionData = Object.entries(stats.conversionStats).map(([name, value]) => ({ name, value }));

  const deviceData = Object.entries(stats.deviceStats).map(([name, value]) => ({ name, value }));

  const browserData = Object.entries(stats.browserStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([name, value]) => ({ name, value }));

  const countryData = Object.entries(stats.countryStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }));

  const COLORS = ["#2563EB", "#7C3AED", "#EC4899", "#F59E0B", "#10B981", "#06B6D4", "#EF4444", "#8B5CF6"];

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
      <Container fluid style={{ maxWidth: "1400px" }}>
        <Row style={{ marginBottom: "30px", alignItems: "center" }}>
          <Col md={8}>
            <h1 style={{ color: "#18181B", fontSize: "2.5em", margin: 0 }}>📊 Analytics Dashboard</h1>
          </Col>
          <Col md={4} style={{ textAlign: "right" }}>
            <Form.Select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              style={{ maxWidth: "200px", marginLeft: "auto" }}
            >
              <option value="all">Toutes les données</option>
              <option value="today">Aujourd'hui</option>
              <option value="week">Cette semaine</option>
              <option value="month">Ce mois</option>
            </Form.Select>
          </Col>
        </Row>

        {/* KPIs Principaux */}
        <Row style={{ marginBottom: "30px" }}>
          <Col md={3} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <div style={{ color: "#2563EB", fontSize: "2.5em", fontWeight: "bold" }}>{stats.totalVisits}</div>
              <div style={{ color: "#666", fontSize: "0.9em", marginTop: "5px" }}>Visites Totales</div>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <div style={{ color: "#7C3AED", fontSize: "2.5em", fontWeight: "bold" }}>{stats.totalPageViews}</div>
              <div style={{ color: "#666", fontSize: "0.9em", marginTop: "5px" }}>Pages Vues</div>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <div style={{ color: "#EC4899", fontSize: "2.5em", fontWeight: "bold" }}>{stats.totalClicks}</div>
              <div style={{ color: "#666", fontSize: "0.9em", marginTop: "5px" }}>Clics Totaux</div>
            </Card>
          </Col>
          <Col md={3} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <div style={{ color: "#F59E0B", fontSize: "2.5em", fontWeight: "bold" }}>{stats.totalConversions}</div>
              <div style={{ color: "#666", fontSize: "0.9em", marginTop: "5px" }}>Conversions</div>
            </Card>
          </Col>
        </Row>

        {/* Métriques Secondaires */}
        <Row style={{ marginBottom: "30px" }}>
          <Col md={2} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "15px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none", textAlign: "center" }}>
              <div style={{ color: "#10B981", fontSize: "1.8em", fontWeight: "bold" }}>{stats.avgSessionDuration}s</div>
              <div style={{ color: "#666", fontSize: "0.85em", marginTop: "5px" }}>Durée Moyenne</div>
            </Card>
          </Col>
          <Col md={2} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "15px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none", textAlign: "center" }}>
              <div style={{ color: "#06B6D4", fontSize: "1.8em", fontWeight: "bold" }}>{stats.avgPageDuration}s</div>
              <div style={{ color: "#666", fontSize: "0.85em", marginTop: "5px" }}>Temps/Page</div>
            </Card>
          </Col>
          <Col md={2} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "15px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none", textAlign: "center" }}>
              <div style={{ color: "#EF4444", fontSize: "1.8em", fontWeight: "bold" }}>{stats.bounceRate}%</div>
              <div style={{ color: "#666", fontSize: "0.85em", marginTop: "5px" }}>Taux Rebond</div>
            </Card>
          </Col>
          <Col md={2} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "15px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none", textAlign: "center" }}>
              <div style={{ color: "#8B5CF6", fontSize: "1.8em", fontWeight: "bold" }}>{stats.conversionRate}%</div>
              <div style={{ color: "#666", fontSize: "0.85em", marginTop: "5px" }}>Taux Conv.</div>
            </Card>
          </Col>
          <Col md={2} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "15px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none", textAlign: "center" }}>
              <div style={{ color: "#2563EB", fontSize: "1.8em", fontWeight: "bold" }}>{stats.avgScrollDepth}%</div>
              <div style={{ color: "#666", fontSize: "0.85em", marginTop: "5px" }}>Scroll Depth</div>
            </Card>
          </Col>
          <Col md={2} style={{ marginBottom: "20px" }}>
            <Card style={{ padding: "15px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none", textAlign: "center" }}>
              <div style={{ color: "#7C3AED", fontSize: "1.8em", fontWeight: "bold" }}>{stats.uniqueCountries.size}</div>
              <div style={{ color: "#666", fontSize: "0.85em", marginTop: "5px" }}>Pays</div>
            </Card>
          </Col>
        </Row>

        {/* Graphiques Principaux */}
        <Row style={{ marginBottom: "30px" }}>
          <Col lg={12} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <h5 style={{ color: "#18181B", marginBottom: "20px" }}>📈 Visites par Jour</h5>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={visitsByDayData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="visits" stroke="#2563EB" strokeWidth={2} dot={{ fill: "#2563EB" }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Pages et Clics */}
        <Row style={{ marginBottom: "30px" }}>
          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <h5 style={{ color: "#18181B", marginBottom: "20px" }}>📄 Top Pages</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={pageData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#7C3AED" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <h5 style={{ color: "#18181B", marginBottom: "20px" }}>🖱️ Top Clics</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={clickData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#EC4899" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Appareils et Navigateurs */}
        <Row style={{ marginBottom: "30px" }}>
          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <h5 style={{ color: "#18181B", marginBottom: "20px" }}>📱 Appareils</h5>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={deviceData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <h5 style={{ color: "#18181B", marginBottom: "20px" }}>🌐 Navigateurs</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={browserData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10B981" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Pays et Conversions */}
        <Row style={{ marginBottom: "30px" }}>
          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <h5 style={{ color: "#18181B", marginBottom: "20px" }}>🌍 Top Pays</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={countryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#F59E0B" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col lg={6} style={{ marginBottom: "30px" }}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <h5 style={{ color: "#18181B", marginBottom: "20px" }}>✅ Conversions</h5>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={conversionData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
                    {conversionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Tableau détaillé */}
        <Row style={{ marginBottom: "30px" }}>
          <Col lg={12}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none" }}>
              <h5 style={{ color: "#18181B", marginBottom: "20px" }}>📋 Détail des Visites</h5>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9em" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Date</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Navigateur</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Appareil</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Pays</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Pages</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Clics</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Durée</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Scroll</th>
                      <th style={{ padding: "12px", textAlign: "left", color: "#18181B" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredVisits.slice(0, 50).map((visit, index) => (
                      <tr key={index} style={{ borderBottom: "1px solid #eee", backgroundColor: selectedVisit === index ? "#f0f0f0" : "white" }}>
                        <td style={{ padding: "12px", color: "#666" }}>{new Date(visit.timestamp).toLocaleString()}</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.browser}</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.device === "mobile" ? "📱" : visit.device === "tablet" ? "📱" : "💻"}</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.country}</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.pages ? Object.keys(visit.pages).length : 0}</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.clicks ? Object.keys(visit.clicks).length : 0}</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.sessionDuration || 0}s</td>
                        <td style={{ padding: "12px", color: "#666" }}>{visit.scrollDepth || 0}%</td>
                        <td style={{ padding: "12px" }}>
                          <Button
                            variant="link"
                            size="sm"
                            onClick={() => setSelectedVisit(selectedVisit === index ? null : index)}
                            style={{ padding: 0, color: "#2563EB" }}
                          >
                            {selectedVisit === index ? "▼ Masquer" : "▶ Détails"}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Actions */}
        <Row style={{ marginBottom: "30px" }}>
          <Col lg={12}>
            <Card style={{ padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", border: "none", backgroundColor: "#fff3cd" }}>
              <h5 style={{ color: "#856404", marginBottom: "15px" }}>⚠️ Actions Dangereuses</h5>
              <Button variant="danger" onClick={handleResetAnalytics}>
                🗑️ Réinitialiser toutes les données
              </Button>
              <p style={{ color: "#856404", marginTop: "15px", fontSize: "0.9em" }}>
                ⚠️ Cette action supprimera TOUTES les données analytics et ne peut pas être annulée !
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
