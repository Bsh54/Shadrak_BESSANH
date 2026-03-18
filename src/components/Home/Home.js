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
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Bonjour !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                JE SUIS
                <strong className="main-name"> BESSANH Shadrak</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
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
            <Col md={12} className="home-about-social">
              <h1 style={{ fontSize: "2.8em", paddingBottom: "30px", fontWeight: "bold", color: "#18181B" }}>
                <strong style={{ color: "#2563EB" }}>Contactez-moi</strong>
              </h1>
              <p style={{ fontSize: "1.3em", paddingBottom: "40px", color: "#3F3F46" }}>
                N'hésitez pas à me contacter pour toute collaboration ou opportunité
              </p>
              <ul className="home-about-social-links" style={{ display: "flex", gap: "50px", justifyContent: "center", flexWrap: "wrap" }}>
                <li className="social-icons" style={{ listStyle: "none" }}>
                  <a
                    href="https://github.com/Bsh54/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    style={{
                      fontSize: "3.5em",
                      width: "130px",
                      height: "130px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      border: "3px solid #2563EB",
                      transition: "all 0.3s",
                      color: "#2563EB",
                      backgroundColor: "#FFFFFF"
                    }}
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons" style={{ listStyle: "none" }}>
                  <a
                    href="mailto:shadrakbsh@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    style={{
                      fontSize: "3.5em",
                      width: "130px",
                      height: "130px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      border: "3px solid #2563EB",
                      transition: "all 0.3s",
                      color: "#2563EB",
                      backgroundColor: "#FFFFFF"
                    }}
                  >
                    <AiOutlineMail />
                  </a>
                </li>
                <li className="social-icons" style={{ listStyle: "none" }}>
                  <a
                    href="https://www.linkedin.com/in/bessanh-shadrak-744049287/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    style={{
                      fontSize: "3.5em",
                      width: "130px",
                      height: "130px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      border: "3px solid #2563EB",
                      transition: "all 0.3s",
                      color: "#2563EB",
                      backgroundColor: "#FFFFFF"
                    }}
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons" style={{ listStyle: "none" }}>
                  <a
                    href="https://wa.me/22901974265400"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    style={{
                      fontSize: "3.5em",
                      width: "130px",
                      height: "130px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      border: "3px solid #2563EB",
                      transition: "all 0.3s",
                      color: "#2563EB",
                      backgroundColor: "#FFFFFF"
                    }}
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
