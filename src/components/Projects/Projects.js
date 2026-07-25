import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import oreus from "../../Assets/Projects/oreus.png";
import cvai from "../../Assets/Projects/cvai.png";
import evolutics from "../../Assets/Projects/evolutics.png";
import fondataset from "../../Assets/Projects/fondataset.png";
import zenithai from "../../Assets/Projects/zenithai.png";
import voxiai from "../../Assets/Projects/voxiai.png";
import nawiri from "../../Assets/Projects/nawiri.png";
import neurobridge from "../../Assets/Projects/neurobridge.png";
import cottonpay from "../../Assets/Projects/cottonpay.png";
import sesion from "../../Assets/Projects/sesion.png";
import payvault from "../../Assets/Projects/payvault.png";
import aegisflow from "../../Assets/Projects/aegisflow.png";
import horus from "../../Assets/Projects/horus.png";
import gatekeep from "../../Assets/Projects/gatekeep.png";
import phytovance from "../../Assets/Projects/phytovance.png";
import neurosynthetix from "../../Assets/Projects/neuro-synthetix.png";
import { useTranslation } from "react-i18next";
import { SEOHead } from "../SEO/SEOHead";

// Produits / applications IA abouties
const PRODUCTS = [
  { img: nawiri, title: "NAWIRI", key: "nawiri", tags: ["Next.js", "Gemini", "Leaflet"], gh: "https://github.com/Bsh54/NAWIRI", demo: "https://nawiri-zeta.vercel.app" },
  { img: neurobridge, title: "NeuroBridge", key: "neurobridge", tags: ["Next.js", "React 19", "TypeScript", "Web Speech"], gh: "https://github.com/Bsh54/NeuroBridge", demo: "https://neuro-bridge-alpha.vercel.app" },
  { img: oreus, title: "Oreus", key: "oreus", tags: ["Python", "Flask", "Whisper", "FFmpeg"], gh: "https://github.com/Bsh54/Oreus", demo: "https://nawai58-oreus.hf.space" },
  { img: voxiai, title: "VoxiAI", key: "voxiai", tags: ["Python", "FastAPI", "Whisper", "Gemini"], gh: "https://github.com/Bsh54/VoxiAI", demo: "https://shads229-voxiai.hf.space/" },
  { img: zenithai, title: "Zenith AI", key: "zenithai", tags: ["Python", "YOLOv8", "Whisper", "LLM"], gh: "https://github.com/Bsh54/Zenith-AI-Front", demo: "https://zenith-ai-indol.vercel.app/" },
  { img: cvai, title: "CV-AI", key: "cvai", tags: ["React", "TypeScript", "Express", "Puppeteer"], gh: "https://github.com/Bsh54/CV-AI", demo: "https://cv-ai-neon.vercel.app/" },
  { img: evolutics, title: "EVOLUTICS", key: "evolutics", tags: ["React", "TypeScript", "Supabase", "Gemini"], gh: "https://github.com/Bsh54/EVOLUTICS_HACKBYIFRI_2026", demo: "https://evolutics.vercel.app/" },
  { img: fondataset, title: "Fon-Dataset-Generator", key: "fondataset", tags: ["Python", "Apps Script"], gh: "https://github.com/Bsh54/Fon-Dataset-Generator", demo: "https://docs.google.com/spreadsheets/d/1YGiLHh13jsMZkP04Gi101uc8dgdf-9AOK-u_ymuF8IU/edit?usp=sharing" },
];

// Projets de hackathons
const HACKATHONS_LIST = [
  { img: cottonpay, title: "CottonPay", key: "cottonpay", badgeKey: "badge.id4africa", tags: ["Digital Identity", "React", "Web3"], gh: "https://github.com/Bsh54/CottonPay2", demo: "https://cottonpay.shadrakbessanh.me" },
  { img: neurosynthetix, title: "Neuro-Synthetix", key: "neurosynthetix", badgeKey: "badge.hackhazards", tags: ["Python", "DeepSeek", "Neo4j", "RAG"], gh: "https://github.com/Bsh54/neuro-synthetix", demo: "https://neuro.shadrakbessanh.me/" },
  { img: phytovance, title: "Phytovance", key: "phytovance", badgeKey: "badge.hackathon", tags: ["Python", "Docking", "BioTech"], gh: "https://github.com/Bsh54/phytovance", demo: "https://phytovance.shadrakbessanh.me/" },
  { img: aegisflow, title: "AegisFlow", key: "aegisflow", badgeKey: "badge.flare", tags: ["TypeScript", "Flare", "FXRP"], gh: "https://github.com/Bsh54/aegisflow", demo: "https://aegisflow.shadrakbessanh.me/" },
  { img: payvault, title: "PayVault", key: "payvault", badgeKey: "badge.iexec", tags: ["TypeScript", "iExec", "Nox"], gh: "https://github.com/Bsh54/payvault", demo: "https://payvault.shadrakbessanh.me/" },
  { img: sesion, title: "Sesion", key: "sesion", badgeKey: "badge.nimiq", tags: ["JavaScript", "Nimiq Pay"], gh: "https://github.com/Bsh54/sesion", demo: "https://sesion-alpha.vercel.app" },
  { img: horus, title: "Horus", key: "horus", badgeKey: "badge.solana", tags: ["JavaScript", "Solana", "TTS", "AI"], gh: "https://github.com/Bsh54/horus", demo: "https://horus.shadrakbessanh.me/" },
  { img: gatekeep, title: "Gatekeep", key: "gatekeep", badgeKey: "badge.monad", tags: ["TypeScript", "Monad", "Web3"], gh: "https://github.com/Bsh54/gatekeep", demo: "https://gatekeep.shadrakbessanh.me/" },
];

function Projects() {
  const { t } = useTranslation();

  const renderCard = (p) => (
    <Col md={4} className="project-card" key={p.title}>
      <ProjectCard
        imgPath={p.img}
        isBlog={false}
        title={p.title}
        badge={p.badgeKey ? t(p.badgeKey) : null}
        tags={p.tags}
        description={t(`projects.${p.key}.description`)}
        ghLink={p.gh}
        demoLink={p.demo}
      />
    </Col>
  );

  return (
    <>
      <SEOHead
        title="Projects - BESSANH Shadrak | CottonPay, MINERVA, NAWIRI, NeuroBridge, Oreus, VoxiAI"
        description="Explore BESSANH Shadrak's projects: CottonPay (Digital Identity, 2nd place ID4Africa 2026), NAWIRI (AI social orientation West Africa), NeuroBridge (AI communication aid), Oreus (AI video subtitling, 39 African languages), VoxiAI, EVOLUTICS, CV-AI, Zenith AI, plus hackathon projects across Solana, Monad, Flare, iExec & Nimiq."
        keywords="BESSANH Shadrak projects, CottonPay digital identity, ID4Africa 2026, NAWIRI Africa, NeuroBridge autism AI, Oreus AI subtitles, VoxiAI, EVOLUTICS, CV-AI, Zenith AI, hackathon winner Benin, Web3 developer Africa, Python Flask developer"
        image="https://shadrakbessanh.me/og-image.jpg"
        url="https://shadrakbessanh.me/project"
        pageType="CollectionPage"
      />
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            {t('projects.title')} <strong className="purple">{t('projects.title.highlight')} </strong>{t('projects.title.end')}
          </h1>
          <p style={{ color: "white" }}>{t('projects.subtitle')}</p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {PRODUCTS.map(renderCard)}
          </Row>

          <h1 className="project-heading" style={{ paddingTop: "40px", color: "white" }}>
            {t('projects.hackathons.title')} <strong className="purple">{t('projects.hackathons.highlight')}</strong>
          </h1>
          <p style={{ color: "white" }}>{t('projects.hackathons.subtitle')}</p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {HACKATHONS_LIST.map(renderCard)}
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
