import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Github from "../About/Github";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <section>
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
      <Container fluid style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px", borderTop: "1px solid #E5E7EB" }}>
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: "center" }}>
              <h1 style={{ fontSize: "2.8em", paddingBottom: "30px", fontWeight: "bold", color: "#18181B" }}>
                <strong style={{ color: "#2563EB" }}>Contactez-moi</strong>
              </h1>
              <p style={{ fontSize: "1.3em", paddingBottom: "40px", color: "#3F3F46" }}>
                N'hésitez pas à me contacter pour toute collaboration ou opportunité
              </p>
              <div style={{
                display: "flex",
                gap: "30px",
                justifyContent: "center",
                flexWrap: "wrap",
                padding: 0,
                margin: 0
              }}>
                <a
                  href="https://github.com/Bsh54/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "3px solid #2563EB",
                    transition: "all 0.3s ease",
                    color: "#2563EB",
                    backgroundColor: "#FFFFFF",
                    fontSize: "2.5em",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563EB";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(37, 99, 235, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#2563EB";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <AiFillGithub />
                </a>

                <a
                  href="mailto:shadrakbsh@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "3px solid #2563EB",
                    transition: "all 0.3s ease",
                    color: "#2563EB",
                    backgroundColor: "#FFFFFF",
                    fontSize: "2.5em",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563EB";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(37, 99, 235, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#2563EB";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <AiOutlineMail />
                </a>

                <a
                  href="https://www.linkedin.com/in/bessanh-shadrak-744049287/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "3px solid #2563EB",
                    transition: "all 0.3s ease",
                    color: "#2563EB",
                    backgroundColor: "#FFFFFF",
                    fontSize: "2.5em",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563EB";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(37, 99, 235, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#2563EB";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://wa.me/22901974265400"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: "90px",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    border: "3px solid #2563EB",
                    transition: "all 0.3s ease",
                    color: "#2563EB",
                    backgroundColor: "#FFFFFF",
                    fontSize: "2.5em",
                    textDecoration: "none",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#2563EB";
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(37, 99, 235, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFFFFF";
                    e.currentTarget.style.color = "#2563EB";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <FaWhatsapp />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
