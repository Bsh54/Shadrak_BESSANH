import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      {/* Hero Section - Refait complètement */}
      <Container fluid className="home-section" id="home" style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        paddingTop: "100px",
        paddingBottom: "50px"
      }}>
        <Particle />
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <h1 style={{
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                color: "#18181B",
                fontWeight: "400",
                marginBottom: "20px"
              }}>
                {t('home.greeting')} <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#18181B",
                fontWeight: "700",
                marginBottom: "30px",
                lineHeight: "1.2"
              }}>
                {t('home.intro')} <span style={{ color: "#2563EB" }}>{t('home.name')}</span>
              </h1>

              <div style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                color: "#2563EB",
                fontWeight: "600",
                marginBottom: "40px",
                minHeight: "60px",
                display: "flex",
                alignItems: "center"
              }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
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
