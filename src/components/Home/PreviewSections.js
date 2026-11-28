import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectCard from "../Projects/ProjectCards";
import AchievementCard from "../Achievements/AchievementCard";
import { achievementsData } from "../../data/achievementsData";
import { certificationsData } from "../../data/certificationsData";
import { AiOutlineDownload } from "react-icons/ai";
import { trackConversion } from "../../services/analyticsService";
import pdfEN from "../../Assets/CV Shadrak EN.pdf";
import pdfFR from "../../Assets/CV Shadrak FR.pdf";
import nawiri from "../../Assets/Projects/nawiri.png";
import cottonpay from "../../Assets/Projects/cottonpay.png";
import neurobridge from "../../Assets/Projects/neurobridge.png";

function PreviewSections({ only }) {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const pdf = isFr ? pdfFR : pdfEN;
  const show = (name) => !only || only === name;

  const featuredProjects = [
    {
      imgPath: nawiri,
      title: "NAWIRI",
      tags: ["Next.js", "Gemini", "RAG"],
      description: t("projects.nawiri.description"),
      ghLink: "https://github.com/Bsh54/NAWIRI",
      badge: "USAII 2026",
    },
    {
      imgPath: cottonpay,
      title: "CottonPay",
      tags: ["eSignet", "BCovrin", "Web3"],
      description: t("projects.cottonpay.description"),
      ghLink: "https://github.com/Bsh54/CottonPay2",
      badge: "ID4Africa 2026",
    },
    {
      imgPath: neurobridge,
      title: "NeuroBridge",
      tags: ["Next.js", "Web Speech", "A11y"],
      description: t("projects.neurobridge.description"),
      ghLink: "https://github.com/Bsh54/NeuroBridge",
    },
  ];

  return (
    <>
      {/* ---- PROJECTS PREVIEW ---- */}
      {show("projects") && (
        <section className="preview-section preview-section--white">
          <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="section-head">
              <span className="section-eyebrow">{isFr ? "02 / Projets" : "02 / Work"}</span>
              <h2 className="section-title">
                {isFr
                  ? "Une selection de ce que j'ai livre."
                  : "A selection of what I have shipped."}
              </h2>
            </div>

            <Row>
              {featuredProjects.map((project) => (
                <Col lg={4} md={6} className="project-card" key={project.title}>
                  <ProjectCard
                    imgPath={project.imgPath}
                    isBlog={false}
                    sourceOnly={true}
                    title={project.title}
                    badge={project.badge}
                    tags={project.tags}
                    description={project.description}
                    ghLink={project.ghLink}
                  />
                </Col>
              ))}
            </Row>

            <div style={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
              <Link to="/project" className="btn-editorial btn-editorial--ghost btn-editorial--seeall">
                {isFr ? "Voir tous les projets" : "See all work"}
                <span style={{ marginLeft: 8 }}>→</span>
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ---- ACHIEVEMENTS PREVIEW ---- */}
      {show("achievements") && (
        <section className="preview-section preview-section--gray">
          <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="section-head">
              <span className="section-eyebrow">{isFr ? "03 / Reconnaissance" : "03 / Recognition"}</span>
              <h2 className="section-title">
                {isFr
                  ? "Reconnaissance internationale en 2026."
                  : "International recognition in 2026."}
              </h2>
            </div>

            <Row>
              {achievementsData.slice(0, 4).map((achievement) => (
                <Col lg={3} md={6} className="project-card" key={achievement.id}>
                  <Link to={`/achievement/${achievement.id}`} style={{ textDecoration: "none" }}>
                    <AchievementCard
                      id={achievement.id}
                      title={achievement.title}
                      date={achievement.date}
                      location={achievement.location}
                      status={achievement.status}
                      cardImage={achievement.cardImage}
                      organization={achievement.organization}
                    />
                  </Link>
                </Col>
              ))}
            </Row>

            <div style={{ marginTop: 8, display: "flex", justifyContent: "center" }}>
              <Link to="/achievements" className="btn-editorial btn-editorial--ghost btn-editorial--seeall">
                {isFr ? "Voir toutes les distinctions" : "See all recognition"}
                <span style={{ marginLeft: 8 }}>→</span>
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* ---- CERTIFICATIONS PREVIEW ---- */}
      {show("certifications") && (
        <section className="preview-section preview-section--white">
          <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="section-head">
              <span className="section-eyebrow">{isFr ? "04 / Certifications" : "04 / Certifications"}</span>
              <h2 className="section-title">
                {isFr
                  ? "Formations et stage certifies."
                  : "Training and internship credentials."}
              </h2>
            </div>

            <div className="certifications-list">
              {certificationsData.map((group) => (
                <div className="certifications-group" key={group.issuer}>
                  <div className="certifications-group-head">
                    <div className="certifications-group-issuer">{group.issuer}</div>
                    <p className="certifications-group-context">
                      {group.context[isFr ? "fr" : "en"]}
                    </p>
                  </div>
                  <ul className="certifications-group-items">
                    {group.items.map((it) => (
                      <li key={it.file} className="certifications-item">
                        <a href={it.file} target="_blank" rel="noopener noreferrer">
                          <span className="certifications-item-name">
                            {it.name[isFr ? "fr" : "en"]}
                          </span>
                          <span className="certifications-item-arrow">PDF &rarr;</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ---- BLOG CTA ---- */}
      {show("blog") && (
        <section className="preview-section preview-section--gray">
          <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="section-head">
              <span className="section-eyebrow">{isFr ? "05 / Publications" : "05 / Writing"}</span>
              <h2 className="section-title">
                {isFr
                  ? "Notes ecrites en construisant."
                  : "Notes written while building."}
              </h2>
              <p className="section-lede" style={{ maxWidth: "62ch" }}>
                {isFr
                  ? "Un blog quotidien curé des articles AI d'arXiv, résumés en français, plus mes propres notes sur les projets et les leçons de terrain."
                  : "A daily blog curating AI papers from arXiv, summarized in French, alongside my own notes on projects and lessons from the field."}
              </p>
            </div>

            <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
              <a
                href="https://blog.shadrakbessanh.me"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-editorial btn-editorial--seeall"
              >
                {isFr ? "Visiter le blog" : "Visit the blog"}
                <span style={{ marginLeft: 8 }}>→</span>
              </a>
            </div>
          </Container>
        </section>
      )}

      {/* ---- RESUME PREVIEW ---- */}
      {show("resume") && (
        <section className="preview-section preview-section--white">
          <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="section-head">
              <span className="section-eyebrow">{isFr ? "06 / Curriculum vitae" : "06 / Curriculum vitae"}</span>
              <h2 className="section-title">
                {isFr
                  ? "Un curriculum vitae d'une page, tenu a jour."
                  : "A one-page curriculum vitae, kept current."}
              </h2>
            </div>

            <div className="resume-preview-stack">
              <p className="resume-preview-lede">
                {isFr
                  ? "Une page, mise a jour, prete a envoyer. Formation, experience, distinctions et credentials en un coup d'oeil."
                  : "One page, up to date, ready to send. Education, experience, recognition and credentials at a glance."}
              </p>
              <div className="resume-preview-ctas">
                <a
                  href={pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial btn-editorial--primary"
                  onClick={() =>
                    trackConversion("cv_download_homepage", isFr ? "CV_FR" : "CV_EN")
                  }
                >
                  <AiOutlineDownload style={{ fontSize: 18 }} />
                  {isFr ? "Telecharger le CV" : "Download CV"}
                </a>
                <Link to="/resume" className="btn-editorial btn-editorial--ghost">
                  {isFr ? "Voir en ligne" : "View online"}
                  <span style={{ marginLeft: 6 }}>→</span>
                </Link>
              </div>
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="resume-preview-big"
                aria-label={isFr ? "Ouvrir le CV en PDF" : "Open the CV as PDF"}
              >
                <img
                  src={isFr ? "/images/cv-preview-FR.png" : "/images/cv-preview-EN.png"}
                  alt={isFr ? "Apercu du CV" : "CV preview"}
                  className="resume-preview-big-img"
                  loading="lazy"
                />
              </a>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

export default PreviewSections;
