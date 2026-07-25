import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen, AiOutlineMail } from "react-icons/ai";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Github from "../About/Github";
import ContactSection from "./ContactSection";
import PreviewSections from "./PreviewSections";
import { useTranslation } from "react-i18next";
import { SEOHead } from "../SEO/SEOHead";
import FAQSchema from "../SEO/FAQSchema";

function Home() {
  const { t } = useTranslation();

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section>
      <SEOHead
        title="BESSANH Shadrak - Full-Stack Developer & AI Specialist | Hackathon Winner 2026"
        description="BESSANH Shadrak - 20-year-old Full-Stack Developer & AI Specialist from Benin. 2nd Place Winner African Digital Identity Hackathon 2026 (ID4Africa). Expert in MERN Stack, React, Python, Digital Identity & Machine Learning. Projects: CottonPay, MINERVA, VoxiAI."
        keywords="BESSANH Shadrak, Shadrak BESSANH, software developer Benin, AI developer Africa, MERN stack developer, digital identity, CottonPay, ID4Africa 2026, hackathon winner, fintech Africa, machine learning, React developer, Node.js, Python, IFRI UAC"
        image="https://shadrakbessanh.me/og-image.jpg"
        url="https://shadrakbessanh.me/"
        pageType="AboutPage"
      />
      <FAQSchema />
      {/* Hero Section */}
      <Container fluid className="hero" id="home">
        <Particle />
        <Container className="hero-container">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <span className="hero-status">
                <span className="hero-status-dot" aria-hidden="true" />
                {t('home.available')}
              </span>

              <p className="hero-greeting">
                {t('home.greeting')} <span className="wave" role="img" aria-label="wave">👋🏻</span>
              </p>

              <h1 className="hero-name">
                {t('home.intro')} <span className="hero-name-accent">{t('home.name')}</span>
              </h1>

              <div className="hero-typewriter">
                <Type />
              </div>

              <p className="hero-tagline">
                {t('home.tagline')}
              </p>

              <div className="hero-cta">
                <Button as={Link} to="/project" variant="primary" size="lg" className="hero-cta-btn">
                  <AiOutlineFundProjectionScreen aria-hidden="true" /> &nbsp;{t('home.cta.projects')}
                </Button>
                <Button as={Link} to="/#contact" variant="outline-primary" size="lg" className="hero-cta-btn" onClick={scrollToContact}>
                  <AiOutlineMail aria-hidden="true" /> &nbsp;{t('home.cta.contact')}
                </Button>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="hero-stat-num">15+</span>
                  <span className="hero-stat-label">{t('home.stats.projects')}</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-num">8</span>
                  <span className="hero-stat-label">{t('home.stats.hackathons')}</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-num">🏆</span>
                  <span className="hero-stat-label">{t('home.stats.award')}</span>
                </div>
              </div>
            </Col>

            <Col md={5} className="hero-visual">
              <div className="hero-visual-glow" aria-hidden="true" />
              <img
                src={homeLogo}
                alt="Illustration"
                className="img-fluid hero-illustration"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      {/* Sections aperçu : Projects, Achievements, Resume */}
      <PreviewSections />

      {/* Section Compétences Professionnelles */}
      <Container fluid className="about-section">
        <Container>
          <h1 className="project-heading" style={{ paddingTop: "50px" }}>
            {t('skills.title')} <strong className="purple">{t('skills.title.highlight')}</strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">{t('skills.tools')}</strong> {t('skills.tools.end')}
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>

      {/* Section Contact */}
      <ContactSection />
    </section>
  );
}

export default Home;
