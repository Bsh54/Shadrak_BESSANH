import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cvai from "../../Assets/Projects/cvai.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>Récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cvai}
              isBlog={false}
              title="CV-AI"
              description="Application web d'optimisation stratégique de CV utilisant l'IA. Analyse sémantique des offres d'emploi pour adapter automatiquement votre CV aux attentes des recruteurs et des ATS. Export PDF haute fidélité format A4, API REST pour génération programmatique, et privacy by design (données uniquement dans le navigateur). Technologies : React 19, TypeScript, Tailwind CSS 4, Express, Puppeteer."
              ghLink="https://github.com/Bsh54/CV-AI"
              demoLink="https://cv-ai-neon.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
