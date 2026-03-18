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
import ContactSectionTest from "./ContactSectionTest";

function Home() {
  return (
    <section>
      {/* TEST DE CLIC - DIAGNOSTIC */}
      <ContactSectionTest />

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
                Bonjour ! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#18181B",
                fontWeight: "700",
                marginBottom: "30px",
                lineHeight: "1.2"
              }}>
                Je suis <span style={{ color: "#2563EB" }}>BESSANH Shadrak</span>
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

      {/* Section Compétences Professionnelles */}
      <Container fluid className="about-section">
        <Container>
          <h1 className="project-heading" style={{ paddingTop: "50px" }}>
            Compétences <strong className="purple">Professionnelles</strong>
          </h1>
          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Outils</strong> que j'utilise
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
