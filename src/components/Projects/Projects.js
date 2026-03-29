import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cvai from "../../Assets/Projects/cvai.png";
import evolutics from "../../Assets/Projects/evolutics.png";
import aiphonecall from "../../Assets/Projects/aiphonecall.png";
import fondataset from "../../Assets/Projects/fondataset.png";
import zenithai from "../../Assets/Projects/zenithai.png";
import voxiai from "../../Assets/Projects/voxiai.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.title')} <strong className="purple">{t('projects.title.highlight')} </strong>{t('projects.title.end')}
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.subtitle')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fondataset}
              isBlog={false}
              title="Fon-Dataset-Generator"
              description={t('projects.fondataset.description')}
              ghLink="https://github.com/Bsh54/Fon-Dataset-Generator"
              demoLink="https://docs.google.com/spreadsheets/d/1YGiLHh13jsMZkP04Gi101uc8dgdf-9AOK-u_ymuF8IU/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zenithai}
              isBlog={false}
              title="Zenith AI"
              description={t('projects.zenithai.description')}
              ghLink="https://github.com/Bsh54/Zenith-AI-Front"
              demoLink="https://zenith-ai-indol.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cvai}
              isBlog={false}
              title="CV-AI"
              description={t('projects.cvai.description')}
              ghLink="https://github.com/Bsh54/CV-AI"
              demoLink="https://cv-ai-neon.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evolutics}
              isBlog={false}
              title="EVOLUTICS"
              description={t('projects.evolutics.description')}
              ghLink="https://github.com/Bsh54/EVOLUTICS_HACKBYIFRI_2026"
              demoLink="https://evolutics.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiphonecall}
              isBlog={false}
              title="AI Phone Call"
              description={t('projects.aiphonecall.description')}
              ghLink="https://github.com/Bsh54/AI_Phone_Call"
              demoLink="https://bsh54.github.io/AI_Phone_Call/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voxiai}
              isBlog={false}
              title="VoxiAI"
              description={t('projects.voxiai.description')}
              ghLink="https://github.com/Bsh54/VoxiAI"
              demoLink="https://shads229-voxiai.hf.space/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
