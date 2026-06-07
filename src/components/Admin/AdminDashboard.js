import React, { useState, useEffect } from "react";
import { database } from "../../services/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Container, Row, Col, Card, Button, Form, Badge, Table } from "react-bootstrap";
import { resetAllAnalytics } from "../../services/analyticsService";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import "./AdminDashboard.css";

const COLORS = ["#2563EB", "#7C3AED", "#EC4899", "#F59E0B", "#10B981", "#06B6D4", "#EF4444", "#8B5CF6"];

const BOT_BROWSERS = ["Chrome Headless", "HeadlessChrome", "PhantomJS"];

// Heuristic: 0 duration + 0 pages + 0 clicks + not Benin = likely bot
const isLikelyBot = (visit) => {
  if (!visit.browser || visit.browser === "Unknown") return true;
  if (BOT_BROWSERS.includes(visit.browser)) return true;
  const pages = visit.pages ? Object.keys(visit.pages).length : 0;
  const clicks = visit.clicks ? Object.keys(visit.clicks).length : 0;
  const duration = visit.sessionDuration || 0;
  if (duration === 0 && pages === 0 && clicks === 0 && visit.country !== "Benin") return true;
  return false;
};

const formatDate = (ts) => {
  if (!ts) return "—";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleString("fr-FR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
};

const formatDuration = (seconds) => {
  if (!seconds || seconds === 0) return "0s";
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
};

const KpiCard = ({ value, label, color }) => (
  <Card className="kpi-card">
    <div className="kpi-value" style={{ color }}>{value}</div>
    <div className="kpi-label">{label}</div>
  </Card>
);

function AdminDashboard() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dateFilter, setDateFilter] = useState("all");
  const [hideBots, setHideBots] = useState(true);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    try {
      const unsubscribe = onValue(
        ref(database, "analytics/visits"),
        (snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            const arr = Object.entries(data)
              .map(([key, value]) => ({ id: key, ...value }))
              .filter((v) => v.timestamp && !isNaN(new Date(v.timestamp).getTime()))
              .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setVisits(arr);
          } else {
            setVisits([]);
          }
          setLoading(false);
          setError(null);
        },
        (err) => {
          setError(err.message);
          setLoading(false);
        }
      );
      return () => unsubscribe();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const filtered = visits.filter((v) => {
    if (hideBots && isLikelyBot(v)) return false;
    const now = new Date();
    const d = new Date(v.timestamp);
    if (dateFilter === "today") return d.toDateString() === now.toDateString();
    if (dateFilter === "week") return d >= new Date(now - 7 * 86400000);
    if (dateFilter === "month") return d >= new Date(now - 30 * 86400000);
    return true;
  });

  const bots = visits.filter(isLikelyBot);

  // ---- Stats ----
  const stats = (() => {
    const uniqueCountries = new Set();
    let totalPageViews = 0, totalClicks = 0, totalConversions = 0;
    let sumDuration = 0, sumScroll = 0, bounces = 0;
    const pageStats = {}, clickStats = {}, deviceStats = {}, browserStats = {}, countryStats = {};

    filtered.forEach((v) => {
      uniqueCountries.add(v.country);
      sumDuration += v.sessionDuration || 0;
      sumScroll += Math.min(v.scrollDepth || 0, 100);

      const pageCount = v.pages ? Object.keys(v.pages).length : 0;
      totalPageViews += pageCount;
      if (pageCount <= 1) bounces++;

      if (v.pages) {
        Object.values(v.pages).forEach((p) => {
          pageStats[p.page] = (pageStats[p.page] || 0) + 1;
        });
      }
      if (v.clicks) {
        Object.values(v.clicks).forEach((c) => {
          totalClicks++;
          const key = c.metadata?.text || c.element || "unknown";
          clickStats[key] = (clickStats[key] || 0) + 1;
        });
      }
      if (v.conversions) {
        Object.values(v.conversions).forEach(() => totalConversions++);
      }

      const browser = v.browser || "Unknown";
      const device = v.device || "desktop";
      const country = v.country || "Unknown";
      deviceStats[device] = (deviceStats[device] || 0) + 1;
      browserStats[browser] = (browserStats[browser] || 0) + 1;
      countryStats[country] = (countryStats[country] || 0) + 1;
    });

    const n = filtered.length || 1;
    return {
      totalVisits: filtered.length,
      totalPageViews,
      totalClicks,
      totalConversions,
      uniqueCountries: uniqueCountries.size,
      avgDuration: Math.round(sumDuration / n),
      avgScroll: Math.round(sumScroll / n),
      bounceRate: Math.round((bounces / n) * 100),
      pageStats, clickStats, deviceStats, browserStats, countryStats,
    };
  })();

  // ---- Chart data ----
  const visitsByDay = {};
  filtered.forEach((v) => {
    const d = new Date(v.timestamp).toLocaleDateString("fr-FR");
    visitsByDay[d] = (visitsByDay[d] || 0) + 1;
  });
  const visitsByDayData = Object.entries(visitsByDay)
    .sort(([a], [b]) => new Date(a.split("/").reverse().join("-")) - new Date(b.split("/").reverse().join("-")))
    .map(([date, visits]) => ({ date, visits }));

  const topPages = Object.entries(stats.pageStats).sort(([, a], [, b]) => b - a).slice(0, 8)
    .map(([name, value]) => ({ name, value }));
  const topClicks = Object.entries(stats.clickStats).sort(([, a], [, b]) => b - a).slice(0, 8)
    .map(([name, value]) => ({ name: name.substring(0, 30), value }));
  const deviceData = Object.entries(stats.deviceStats).map(([name, value]) => ({ name, value }));
  const browserData = Object.entries(stats.browserStats).sort(([, a], [, b]) => b - a).slice(0, 6)
    .map(([name, value]) => ({ name, value }));
  const countryData = Object.entries(stats.countryStats).sort(([, a], [, b]) => b - a).slice(0, 8)
    .map(([name, value]) => ({ name, value }));

  const handleReset = async () => {
    if (window.confirm("Supprimer TOUTES les données analytics ? Cette action est irréversible.")) {
      await resetAllAnalytics();
      setVisits([]);
    }
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner" />
        <p>Chargement des données…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-loading">
        <h2 style={{ color: "#EF4444" }}>Erreur Firebase</h2>
        <p style={{ color: "#6B7280" }}>{error}</p>
      </div>
    );
  }

  return (
    <div className="admin-wrapper">
      <Container fluid className="admin-container">

        {/* Header */}
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Analytics Dashboard</h1>
            <p className="admin-subtitle">
              {stats.totalVisits} visites affichées
              {hideBots && bots.length > 0 && (
                <span className="bot-badge">{bots.length} bots filtrés</span>
              )}
            </p>
          </div>
          <div className="admin-controls">
            <Form.Select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="admin-select"
            >
              <option value="all">Toutes les données</option>
              <option value="today">Aujourd'hui</option>
              <option value="week">7 derniers jours</option>
              <option value="month">30 derniers jours</option>
            </Form.Select>
            <div className="bot-toggle">
              <Form.Check
                type="switch"
                id="hide-bots"
                label="Masquer bots"
                checked={hideBots}
                onChange={(e) => setHideBots(e.target.checked)}
              />
            </div>
          </div>
        </div>

        {/* KPIs */}
        <Row className="kpi-row">
          <Col xs={6} md={3}><KpiCard value={stats.totalVisits} label="Visites" color="#2563EB" /></Col>
          <Col xs={6} md={3}><KpiCard value={stats.totalPageViews} label="Pages vues" color="#7C3AED" /></Col>
          <Col xs={6} md={3}><KpiCard value={stats.totalClicks} label="Clics" color="#EC4899" /></Col>
          <Col xs={6} md={3}><KpiCard value={stats.uniqueCountries} label="Pays" color="#10B981" /></Col>
        </Row>
        <Row className="kpi-row kpi-row--secondary">
          <Col xs={6} md={3}><KpiCard value={formatDuration(stats.avgDuration)} label="Durée moyenne" color="#F59E0B" /></Col>
          <Col xs={6} md={3}><KpiCard value={`${stats.avgScroll}%`} label="Scroll moyen" color="#06B6D4" /></Col>
          <Col xs={6} md={3}><KpiCard value={`${stats.bounceRate}%`} label="Taux de rebond" color="#EF4444" /></Col>
          <Col xs={6} md={3}><KpiCard value={stats.totalConversions} label="Conversions" color="#8B5CF6" /></Col>
        </Row>

        {/* Visites par jour */}
        <Row className="chart-row">
          <Col lg={12}>
            <Card className="chart-card">
              <h5 className="chart-title">Visites par jour</h5>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={visitsByDayData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6B7280" }} />
                  <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} allowDecimals={false} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
                  <Line type="monotone" dataKey="visits" stroke="#2563EB" strokeWidth={2} dot={{ fill: "#2563EB", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Pages + Clics */}
        <Row className="chart-row">
          <Col lg={6}>
            <Card className="chart-card">
              <h5 className="chart-title">Top Pages</h5>
              {topPages.length === 0 ? (
                <p className="chart-empty">Pas encore de données de navigation</p>
              ) : (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={topPages} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis type="number" tick={{ fontSize: 12 }} allowDecimals={false} />
                    <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#7C3AED" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </Card>
          </Col>
          <Col lg={6}>
            <Card className="chart-card">
              <h5 className="chart-title">Top Clics</h5>
              {topClicks.length === 0 ? (
                <p className="chart-empty">Pas encore de données de clics</p>
              ) : (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={topClicks} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis type="number" tick={{ fontSize: 12 }} allowDecimals={false} />
                    <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#EC4899" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </Card>
          </Col>
        </Row>

        {/* Appareils + Navigateurs + Pays */}
        <Row className="chart-row">
          <Col lg={4}>
            <Card className="chart-card">
              <h5 className="chart-title">Appareils</h5>
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={deviceData} cx="50%" cy="50%" outerRadius={75}
                    label={({ name, value }) => `${name}: ${value}`}
                    labelLine={false} dataKey="value">
                    {deviceData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="chart-card">
              <h5 className="chart-title">Navigateurs</h5>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={browserData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-30} textAnchor="end" height={50} />
                  <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="chart-card">
              <h5 className="chart-title">Top Pays</h5>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={countryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis type="number" tick={{ fontSize: 12 }} allowDecimals={false} />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#F59E0B" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>
        </Row>

        {/* Tableau des visites */}
        <Row className="chart-row">
          <Col lg={12}>
            <Card className="chart-card">
              <h5 className="chart-title">
                Détail des visites
                <span className="table-count">{filtered.length} entrées</span>
              </h5>
              <div className="table-responsive">
                <Table hover className="visits-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Navigateur</th>
                      <th>Appareil</th>
                      <th>Pays</th>
                      <th>Pages</th>
                      <th>Clics</th>
                      <th>Durée</th>
                      <th>Scroll</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.slice(0, 50).map((visit, idx) => {
                      const pageCount = visit.pages ? Object.keys(visit.pages).length : 0;
                      const clickCount = visit.clicks ? Object.keys(visit.clicks).length : 0;
                      const isExpanded = expandedRow === idx;
                      return (
                        <React.Fragment key={visit.id}>
                          <tr className={isExpanded ? "row-expanded" : ""}>
                            <td>{formatDate(visit.timestamp)}</td>
                            <td>{visit.browser || "—"}</td>
                            <td>{visit.device === "mobile" ? "📱" : visit.device === "tablet" ? "🖥️" : "💻"}</td>
                            <td>{visit.country || "—"}</td>
                            <td><Badge bg={pageCount > 0 ? "primary" : "secondary"}>{pageCount}</Badge></td>
                            <td><Badge bg={clickCount > 0 ? "info" : "secondary"}>{clickCount}</Badge></td>
                            <td>{formatDuration(visit.sessionDuration)}</td>
                            <td>
                              <div className="scroll-bar">
                                <div className="scroll-fill" style={{ width: `${Math.min(visit.scrollDepth || 0, 100)}%` }} />
                              </div>
                              <span className="scroll-pct">{Math.min(visit.scrollDepth || 0, 100)}%</span>
                            </td>
                            <td>
                              <Button variant="link" size="sm" className="expand-btn"
                                onClick={() => setExpandedRow(isExpanded ? null : idx)}>
                                {isExpanded ? "▲" : "▼"}
                              </Button>
                            </td>
                          </tr>
                          {isExpanded && (
                            <tr className="detail-row">
                              <td colSpan={9}>
                                <div className="detail-grid">
                                  <div><strong>OS :</strong> {visit.os || "—"}</div>
                                  <div><strong>Ville :</strong> {visit.city || "—"}</div>
                                  <div><strong>Langue :</strong> {visit.language || "—"}</div>
                                  <div><strong>Résolution :</strong> {visit.screenResolution || "—"}</div>
                                  <div><strong>Référent :</strong> {visit.referrer || "direct"}</div>
                                  <div><strong>IP :</strong> {visit.ip || "—"}</div>
                                </div>
                                {visit.pages && Object.keys(visit.pages).length > 0 && (
                                  <div className="detail-pages">
                                    <strong>Pages visitées :</strong>{" "}
                                    {Object.values(visit.pages).map((p, i) => (
                                      <Badge key={i} bg="light" text="dark" className="me-1">{p.page}</Badge>
                                    ))}
                                  </div>
                                )}
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Zone dangereuse */}
        <Row className="chart-row">
          <Col lg={12}>
            <Card className="danger-card">
              <h5>Zone dangereuse</h5>
              <p>Cette action supprime <strong>toutes</strong> les données analytics de Firebase. Irréversible.</p>
              <Button variant="danger" onClick={handleReset}>
                Réinitialiser toutes les données
              </Button>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default AdminDashboard;
