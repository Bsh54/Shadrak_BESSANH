import React, { useState, useEffect } from "react";
import { database } from "../../services/firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Container, Row, Col, Card, Button, Form, Table } from "react-bootstrap";
import { resetAllAnalytics } from "../../services/analyticsService";
import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import "./AdminDashboard.css";

const ACCENT = "#3B82F6";
const GRID = "rgba(255,255,255,0.06)";
const AXIS = "#71717A";

const BOT_BROWSERS = ["Chrome Headless", "HeadlessChrome", "PhantomJS", "Electron"];

// Aggressive bot heuristic — a real recruiter engages; bots don't.
const isLikelyBot = (v) => {
  if (!v.browser || v.browser === "Unknown") return true;
  if (BOT_BROWSERS.includes(v.browser)) return true;
  const pages = v.pages ? Object.keys(v.pages).length : 0;
  const clicks = v.clicks ? Object.keys(v.clicks).length : 0;
  const duration = v.sessionDuration || 0;
  const scroll = v.scrollDepth || 0;
  // No engagement at all = bot
  if (duration === 0 && pages <= 1 && clicks === 0 && scroll === 0) return true;
  return false;
};

const fmtDate = (ts) => {
  if (!ts) return "—";
  const d = new Date(ts);
  if (isNaN(d.getTime())) return "—";
  return d.toLocaleString("fr-FR", {
    day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit",
  });
};

const fmtDuration = (s) => {
  if (!s || s === 0) return "0s";
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const r = s % 60;
  return r > 0 ? `${m}m ${r}s` : `${m}m`;
};

const refLabel = (r) => {
  if (!r || r === "direct") return "Direct";
  try {
    const h = new URL(r).hostname.replace(/^www\./, "");
    return h || r;
  } catch {
    return r;
  }
};

const deviceLabel = (d) =>
  d === "mobile" ? "Mobile" : d === "tablet" ? "Tablet" : "Desktop";

const KpiCard = ({ value, label, hint, accent }) => (
  <Card className="kpi-card">
    <div className="kpi-value" style={accent ? { color: ACCENT } : undefined}>{value}</div>
    <div className="kpi-label">{label}</div>
    {hint && <div className="kpi-hint">{hint}</div>}
  </Card>
);

const ChartCard = ({ title, children, empty }) => (
  <Card className="chart-card">
    <h5 className="chart-title">{title}</h5>
    {empty ? <p className="chart-empty">Pas encore de données</p> : children}
  </Card>
);

function AdminDashboard() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dateFilter, setDateFilter] = useState("all");
  const [updatedAt, setUpdatedAt] = useState(null);

  useEffect(() => {
    try {
      const unsub = onValue(
        ref(database, "analytics/visits"),
        (snap) => {
          const data = snap.exists() ? snap.val() : {};
          const arr = Object.entries(data)
            .map(([id, v]) => ({ id, ...v }))
            .filter((v) => v.timestamp && !isNaN(new Date(v.timestamp).getTime()))
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
          setVisits(arr);
          setUpdatedAt(new Date());
          setLoading(false);
          setError(null);
        },
        (err) => { setError(err.message); setLoading(false); }
      );
      return () => unsub();
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  const inRange = (v) => {
    const now = new Date();
    const d = new Date(v.timestamp);
    if (dateFilter === "today") return d.toDateString() === now.toDateString();
    if (dateFilter === "week") return d >= new Date(now - 7 * 86400000);
    if (dateFilter === "month") return d >= new Date(now - 30 * 86400000);
    return true;
  };

  const bots = visits.filter(isLikelyBot);
  const real = visits.filter((v) => !isLikelyBot(v) && inRange(v));

  // ---- Aggregations ----
  const agg = (() => {
    const countries = {}, sources = {}, pages = {}, clicks = {};
    let sumDur = 0, sumScroll = 0, bounces = 0;
    let cv = 0, demo = 0, github = 0, contact = 0;

    real.forEach((v) => {
      sumDur += v.sessionDuration || 0;
      sumScroll += Math.min(v.scrollDepth || 0, 100);
      const pageCount = v.pages ? Object.keys(v.pages).length : 0;
      if (pageCount <= 1) bounces++;

      countries[v.country || "Unknown"] = (countries[v.country || "Unknown"] || 0) + 1;
      const src = refLabel(v.referrer);
      sources[src] = (sources[src] || 0) + 1;

      if (v.pages) Object.values(v.pages).forEach((p) => { pages[p.page] = (pages[p.page] || 0) + 1; });

      if (v.clicks) Object.values(v.clicks).forEach((c) => {
        const key = c.metadata?.text || c.element || "unknown";
        clicks[key] = (clicks[key] || 0) + 1;
        if (c.type === "contact") contact++;
      });

      if (v.conversions) Object.values(v.conversions).forEach((c) => {
        const t = c.type || "";
        if (t.includes("cv_download")) cv++;
        else if (t === "project_demo_click") demo++;
        else if (t === "project_github_click") github++;
      });
    });

    const n = real.length || 1;
    return {
      visitors: real.length,
      avgDuration: Math.round(sumDur / n),
      avgScroll: Math.round(sumScroll / n),
      bounceRate: Math.round((bounces / n) * 100),
      cv, demo, github, contact,
      countries, sources, pages, clicks,
    };
  })();

  const byDay = {};
  real.forEach((v) => {
    const d = new Date(v.timestamp).toLocaleDateString("fr-FR");
    byDay[d] = (byDay[d] || 0) + 1;
  });
  const dayData = Object.entries(byDay)
    .sort(([a], [b]) => new Date(a.split("/").reverse().join("-")) - new Date(b.split("/").reverse().join("-")))
    .map(([date, visits]) => ({ date, visits }));

  const top = (obj, n = 7, cut = 40) =>
    Object.entries(obj).sort(([, a], [, b]) => b - a).slice(0, n)
      .map(([name, value]) => ({ name: name.length > cut ? name.slice(0, cut) + "…" : name, value }));

  const sourceData = top(agg.sources);
  const countryData = top(agg.countries);
  const pageData = top(agg.pages);
  const clickData = top(agg.clicks);

  const handleReset = async () => {
    if (window.confirm("Supprimer TOUTES les données analytics ? Irréversible.")) {
      await resetAllAnalytics();
      setVisits([]);
    }
  };

  if (loading) return <div className="admin-loading"><div className="admin-spinner" /><p>Chargement…</p></div>;
  if (error) return <div className="admin-loading"><h2 style={{ color: "#EF4444" }}>Erreur Firebase</h2><p style={{ color: "#A1A1AA" }}>{error}</p></div>;

  const tooltipStyle = { background: "#16161F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "#E4E4E7" };

  return (
    <div className="admin-wrapper">
      <Container fluid className="admin-container">

        {/* Header */}
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Analytics</h1>
            <p className="admin-subtitle">
              {agg.visitors} visiteurs réels
              <span className="bot-badge">{bots.length} bots exclus</span>
              {updatedAt && <span className="updated-at">MàJ {updatedAt.toLocaleTimeString("fr-FR")}</span>}
            </p>
          </div>
          <Form.Select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} className="admin-select">
            <option value="all">Toutes les données</option>
            <option value="today">Aujourd'hui</option>
            <option value="week">7 derniers jours</option>
            <option value="month">30 derniers jours</option>
          </Form.Select>
        </div>

        {/* Intent KPIs — the actions that lead to being hired */}
        <p className="section-label">Intention recruteur</p>
        <Row className="kpi-row">
          <Col xs={6} md={3}><KpiCard value={agg.cv} label="Téléchargements CV" hint="Signal fort" accent /></Col>
          <Col xs={6} md={3}><KpiCard value={agg.demo} label="Clics démo projet" hint="Ils testent ton travail" accent /></Col>
          <Col xs={6} md={3}><KpiCard value={agg.github} label="Clics GitHub" hint="Ils lisent ton code" accent /></Col>
          <Col xs={6} md={3}><KpiCard value={agg.contact} label="Clics contact" hint="Ils veulent te joindre" accent /></Col>
        </Row>

        {/* Engagement KPIs */}
        <p className="section-label">Engagement</p>
        <Row className="kpi-row">
          <Col xs={6} md={3}><KpiCard value={agg.visitors} label="Visiteurs réels" /></Col>
          <Col xs={6} md={3}><KpiCard value={fmtDuration(agg.avgDuration)} label="Temps moyen" /></Col>
          <Col xs={6} md={3}><KpiCard value={`${agg.avgScroll}%`} label="Scroll moyen" /></Col>
          <Col xs={6} md={3}><KpiCard value={`${agg.bounceRate}%`} label="Taux de rebond" hint="Plus bas = mieux" /></Col>
        </Row>

        {/* Trend */}
        <Row className="chart-row">
          <Col lg={12}>
            <ChartCard title="Visiteurs par jour" empty={dayData.length === 0}>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={dayData}>
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={ACCENT} stopOpacity={0.4} />
                      <stop offset="100%" stopColor={ACCENT} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
                  <XAxis dataKey="date" tick={{ fontSize: 12, fill: AXIS }} />
                  <YAxis tick={{ fontSize: 12, fill: AXIS }} allowDecimals={false} />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Area type="monotone" dataKey="visits" stroke={ACCENT} strokeWidth={2} fill="url(#grad)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </Col>
        </Row>

        {/* Sources + Countries — where recruiters come from */}
        <Row className="chart-row">
          <Col lg={6}>
            <ChartCard title="Sources de trafic" empty={sourceData.length === 0}>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={sourceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
                  <XAxis type="number" tick={{ fontSize: 12, fill: AXIS }} allowDecimals={false} />
                  <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 12, fill: "#D4D4D8" }} />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                  <Bar dataKey="value" fill={ACCENT} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </Col>
          <Col lg={6}>
            <ChartCard title="Pays" empty={countryData.length === 0}>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={countryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
                  <XAxis type="number" tick={{ fontSize: 12, fill: AXIS }} allowDecimals={false} />
                  <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 12, fill: "#D4D4D8" }} />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                  <Bar dataKey="value" fill="#10B981" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </Col>
        </Row>

        {/* Pages + Clicks — what they engage with */}
        <Row className="chart-row">
          <Col lg={6}>
            <ChartCard title="Pages les plus vues" empty={pageData.length === 0}>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={pageData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
                  <XAxis type="number" tick={{ fontSize: 12, fill: AXIS }} allowDecimals={false} />
                  <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 12, fill: "#D4D4D8" }} />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                  <Bar dataKey="value" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </Col>
          <Col lg={6}>
            <ChartCard title="Éléments les plus cliqués" empty={clickData.length === 0}>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={clickData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke={GRID} />
                  <XAxis type="number" tick={{ fontSize: 12, fill: AXIS }} allowDecimals={false} />
                  <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 11, fill: "#D4D4D8" }} />
                  <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
                  <Bar dataKey="value" fill="#F59E0B" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </Col>
        </Row>

        {/* Recent real visitors */}
        <Row className="chart-row">
          <Col lg={12}>
            <Card className="chart-card">
              <h5 className="chart-title">Visiteurs récents<span className="table-count">{real.length} réels</span></h5>
              <div className="table-responsive">
                <Table className="visits-table">
                  <thead>
                    <tr>
                      <th>Date</th><th>Pays</th><th>Source</th><th>Appareil</th>
                      <th>Pages</th><th>Temps</th><th>Scroll</th><th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {real.slice(0, 40).map((v) => {
                      const pageCount = v.pages ? Object.keys(v.pages).length : 0;
                      const actionCount =
                        (v.conversions ? Object.keys(v.conversions).length : 0) +
                        (v.clicks ? Object.values(v.clicks).filter((c) => c.type === "contact").length : 0);
                      return (
                        <tr key={v.id} className={actionCount > 0 ? "row-hot" : ""}>
                          <td>{fmtDate(v.timestamp)}</td>
                          <td>{v.country || "—"}{v.city && v.city !== "Unknown" ? ` · ${v.city}` : ""}</td>
                          <td>{refLabel(v.referrer)}</td>
                          <td>{deviceLabel(v.device)}</td>
                          <td>{pageCount}</td>
                          <td>{fmtDuration(v.sessionDuration)}</td>
                          <td>
                            <div className="scroll-bar"><div className="scroll-fill" style={{ width: `${Math.min(v.scrollDepth || 0, 100)}%` }} /></div>
                          </td>
                          <td>{actionCount > 0 ? <span className="action-pill">{actionCount}</span> : <span className="action-zero">0</span>}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Danger zone */}
        <Row className="chart-row">
          <Col lg={12}>
            <Card className="danger-card">
              <h5>Zone dangereuse</h5>
              <p>Supprime <strong>toutes</strong> les données analytics de Firebase. Irréversible.</p>
              <Button variant="danger" onClick={handleReset}>Réinitialiser les données</Button>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default AdminDashboard;
