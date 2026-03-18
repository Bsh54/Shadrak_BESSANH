import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cvai from "../../Assets/Projects/cvai.png";
import evolutics from "../../Assets/Projects/evolutics.png";
import aiphonecall from "../../Assets/Projects/aiphonecall.png";
import fondataset from "../../Assets/Projects/fondataset.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fondataset}
              isBlog={false}
              title="Fon-Dataset-Generator"
              description="Générateur automatisé de datasets bilingues français-fongbe pour l'entraînement de modèles de langue (LLM). Génération de phrases naturelles sur 12 thématiques (santé, commerce, émotions, proverbes), traduction automatisée via APIs IA, export JSONL prêt pour fine-tuning. Dual mode : Python asynchrone pour experts ou interface Google Sheets pour contribution communautaire. Validation des données avec gestion des doublons. Objectif : préserver la langue Fon et développer l'IA pour la culture béninoise. Technologies : Python 3.8+, Google Apps Script, APIs IA."
              ghLink="https://github.com/Bsh54/Fon-Dataset-Generator"
              demoLink="https://docs.google.com/spreadsheets/d/1YGiLHh13jsMZkP04Gi101uc8dgdf-9AOK-u_ymuF8IU/edit?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
