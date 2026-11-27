import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import nawiri from "../../Assets/Projects/nawiri.png";
import neurobridge from "../../Assets/Projects/neurobridge.png";
import cottonpay from "../../Assets/Projects/cottonpay.png";
import voxiai from "../../Assets/Projects/voxiai.png";
import oreus from "../../Assets/Projects/oreus.png";
import zenithai from "../../Assets/Projects/zenithai.png";
import cvai from "../../Assets/Projects/cvai.png";
import evolutics from "../../Assets/Projects/evolutics.png";
import fondataset from "../../Assets/Projects/fondataset.png";
import sesion from "../../Assets/Projects/sesion.png";
import payvault from "../../Assets/Projects/payvault.png";
import aegisflow from "../../Assets/Projects/aegisflow.png";
import horus from "../../Assets/Projects/horus.png";
import gatekeep from "../../Assets/Projects/gatekeep.png";
import phytovance from "../../Assets/Projects/phytovance.png";
import neurosynthetix from "../../Assets/Projects/neuro-synthetix.png";
import { useTranslation } from "react-i18next";
import { SEOHead } from "../SEO/SEOHead";

/* All projects in one flat list, most recent first. Badges preserved where awarded. */
const ALL_PROJECTS = [
  { img: nawiri, title: "NAWIRI", key: "nawiri", badgeKey: "badge.social", tags: ["Next.js", "Gemini", "RAG", "Multilingual"], gh: "https://github.com/Bsh54/NAWIRI" },
  { img: cottonpay, title: "CottonPay", key: "cottonpay", badgeKey: "badge.id4africa", tags: ["eSignet / MOSIP", "BCovrin", "Verifiable Credentials"], gh: "https://github.com/Bsh54/CottonPay2" },
  { img: neurobridge, title: "NeuroBridge", key: "neurobridge", tags: ["Next.js", "React 19", "Web Speech API", "Accessibility"], gh: "https://github.com/Bsh54/NeuroBridge" },
  { img: fondataset, title: "Fon-Dataset", key: "fondataset", tags: ["Python", "Apps Script", "LLM dataset"], gh: "https://github.com/Bsh54/Fon-Dataset-Generator" },
  { img: voxiai, title: "VoxiAI", key: "voxiai", tags: ["FastAPI", "Faster-Whisper", "Gemini"], gh: "https://github.com/Bsh54/VoxiAI" },
  { img: oreus, title: "Oreus", key: "oreus", tags: ["Flask", "Whisper", "FFmpeg"], gh: "https://github.com/Bsh54/Oreus" },
  { img: zenithai, title: "Zenith AI", key: "zenithai", tags: ["YOLOv8", "Whisper", "LLM"], gh: "https://github.com/Bsh54/Zenith-AI-Front" },
  { img: cvai, title: "CV-AI", key: "cvai", tags: ["React", "TypeScript", "Puppeteer"], gh: "https://github.com/Bsh54/CV-AI" },
  { img: evolutics, title: "EVOLUTICS", key: "evolutics", tags: ["React", "Supabase", "Gemini"], gh: "https://github.com/Bsh54/EVOLUTICS_HACKBYIFRI_2026" },
  { img: neurosynthetix, title: "Neuro-Synthetix", key: "neurosynthetix", tags: ["DeepSeek", "Neo4j", "RAG"], gh: "https://github.com/Bsh54/neuro-synthetix" },
  { img: phytovance, title: "Phytovance", key: "phytovance", tags: ["Python", "Docking"], gh: "https://github.com/Bsh54/phytovance" },
  { img: aegisflow, title: "AegisFlow", key: "aegisflow", tags: ["TypeScript", "Flare"], gh: "https://github.com/Bsh54/aegisflow" },
  { img: payvault, title: "PayVault", key: "payvault", tags: ["TypeScript", "iExec"], gh: "https://github.com/Bsh54/payvault" },
  { img: sesion, title: "Sesion", key: "sesion", tags: ["JavaScript", "Nimiq Pay"], gh: "https://github.com/Bsh54/sesion" },
  { img: horus, title: "Horus", key: "horus", tags: ["JavaScript", "Solana"], gh: "https://github.com/Bsh54/horus" },
  { img: gatekeep, title: "Gatekeep", key: "gatekeep", tags: ["TypeScript", "Monad"], gh: "https://github.com/Bsh54/gatekeep" },
];

function Projects() {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";

  const renderCard = (p) => (
    <Col lg={4} md={6} sm={12} className="project-card" key={p.title}>
      <ProjectCard
        imgPath={p.img}
        title={p.title}
        badge={p.badgeKey ? t(p.badgeKey, { defaultValue: p.badgeKey.replace("badge.", "") }) : null}
        tags={p.tags}
        description={t(`projects.${p.key}.description`, { defaultValue: "" })}
        ghLink={p.gh}
      />
    </Col>
  );

  return (
    <>
      <SEOHead
        title="Work / Shadrak Bessanh"
        description="NAWIRI, CottonPay, NeuroBridge, Fon-Dataset, and twelve more."
        url="https://shadrakbessanh.me/project"
        image="https://shadrakbessanh.me/og/og-project.png"
        pageType="CollectionPage"
      />

      <div style={{ paddingTop: 140, paddingBottom: 48, background: "var(--bg)" }}>
        <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="section-head" style={{ marginBottom: 56 }}>
            <span className="section-eyebrow">{isFr ? "Projets" : "Work"}</span>
            <h1 className="section-title" style={{ fontSize: "var(--fs-display)", maxWidth: "22ch" }}>
              {isFr ? "Tous les projets." : "All the work."}
            </h1>
            <p className="section-lede">
              {isFr
                ? "Du plus recent au plus ancien. Chaque carte renvoie au depot public."
                : "Most recent first. Each card links to the public repository."}
            </p>
          </div>
        </Container>
      </div>

      <div style={{ background: "var(--bg)", paddingBottom: 120 }}>
        <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            {ALL_PROJECTS.map((p) => renderCard(p))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Projects;
