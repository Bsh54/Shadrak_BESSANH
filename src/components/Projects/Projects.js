import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cvai from "../../Assets/Projects/cvai.png";
import evolutics from "../../Assets/Projects/evolutics.png";
import aiphonecall from "../../Assets/Projects/aiphonecall.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evolutics}
              isBlog={false}
              title="EVOLUTICS"
              description="Plateforme centralisée d'opportunités professionnelles développée pour le HACKBYIFRI 2026. Hub intelligent agrégeant stages, emplois et formations depuis plusieurs sources. Assistant IA intégré pour rédaction de CV optimisés ATS, décryptage du jargon professionnel et conseils personnalisés. CV Builder avec templates modernes, génération de lettres de motivation et filtrage intelligent adapté au profil étudiant. Technologies : React 18, TypeScript, Supabase, Google Gemini AI, Tailwind CSS."
              ghLink="https://github.com/Bsh54/EVOLUTICS_HACKBYIFRI_2026"
              demoLink="https://evolutics.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiphonecall}
              isBlog={false}
              title="AI Phone Call"
              description="Interface web de conversation vocale avec l'IA en temps réel. Utilise la Web Speech API pour la reconnaissance vocale et une API TTS personnalisée pour la synthèse vocale. Configuration complète de la voix (choix parmi plusieurs voix, vitesse, volume), conversation fluide avec pause/reprise, et interface intuitive. Support multilingue (français/anglais). Déployé sur GitHub Pages avec backend Cloudflare Workers. Technologies : JavaScript Vanilla, Web Speech API, Bootstrap 4."
              ghLink="https://github.com/Bsh54/AI_Phone_Call"
              demoLink="https://bsh54.github.io/AI_Phone_Call/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
