import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectCard from "../Projects/ProjectCards";
import AchievementCard from "../Achievements/AchievementCard";
import { achievementsData } from "../../data/achievementsData";
import { blogPosts } from "../../data/blogData";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { trackConversion } from "../../services/analyticsService";
import pdfEN from "../../Assets/CV Shadrak EN.pdf";
import pdfFR from "../../Assets/CV Shadrak FR.pdf";
import cottonpay from "../../Assets/Projects/cottonpay.png";
import nawiri from "../../Assets/Projects/nawiri.png";
import neurobridge from "../../Assets/Projects/neurobridge.png";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const SeeMoreButton = ({ to, label }) => (
  <Row style={{ justifyContent: "center", marginTop: "40px", marginBottom: "10px" }}>
    <Col style={{ textAlign: "center" }}>
      <Link to={to}>
        <Button
          variant="outline-primary"
          size="lg"
          className="preview-see-more-btn"
        >
          {label}
        </Button>
      </Link>
    </Col>
  </Row>
);

function PreviewSections({ only }) {
  const { t, i18n } = useTranslation();
  const pdf = i18n.language === "fr" ? pdfFR : pdfEN;
  const show = (name) => !only || only === name;

  const featuredProjects = [
    {
      imgPath: cottonpay,
      title: "CottonPay",
      tags: ["Digital Identity", "React", "Web3"],
      description: t("projects.cottonpay.description"),
      ghLink: "https://github.com/Bsh54/CottonPay2",
      demoLink: "https://cottonpay.shadrakbessanh.me",
    },
    {
      imgPath: nawiri,
      title: "NAWIRI",
      tags: ["Next.js", "Gemini", "Leaflet"],
      description: t("projects.nawiri.description"),
      ghLink: "https://github.com/Bsh54/NAWIRI",
      demoLink: "https://nawiri-zeta.vercel.app",
    },
    {
      imgPath: neurobridge,
      title: "NeuroBridge",
      tags: ["Next.js", "React 19", "Web Speech"],
      description: t("projects.neurobridge.description"),
      ghLink: "https://github.com/Bsh54/NeuroBridge",
      demoLink: "https://neuro-bridge-alpha.vercel.app",
    },
  ];

  return (
    <>
      {/* ---- Projects Preview ---- */}
      {show("projects") && (
      <Container fluid className="preview-section preview-section--gray">
        <Container>
          <h1 className="project-heading" style={{ paddingTop: "60px" }}>
            {t("preview.projects.title")}{" "}
            <strong className="purple">{t("preview.projects.highlight")}</strong>
          </h1>
          <p className="preview-subtitle">{t("preview.projects.subtitle")}</p>

          <Row style={{ justifyContent: "center" }}>
            {featuredProjects.map((project, idx) => (
              <Col md={4} className="project-card" key={idx}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  badge={project.badge}
                  tags={project.tags}
                  description={project.description}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                />
              </Col>
            ))}
          </Row>

          <SeeMoreButton to="/project" label={t("preview.projects.seeAll")} />
        </Container>
      </Container>
      )}

      {/* ---- Achievements Preview ---- */}
      {show("achievements") && (
      <Container fluid className="preview-section preview-section--white">
        <Container>
          <h1 className="project-heading" style={{ paddingTop: "60px" }}>
            {t("preview.achievements.title")}{" "}
            <strong className="purple">{t("preview.achievements.highlight")}</strong>
          </h1>
          <p className="preview-subtitle">{t("preview.achievements.subtitle")}</p>

          <Row style={{ justifyContent: "center" }}>
            {achievementsData.slice(0, 2).map((achievement) => (
              <Col md={4} className="achievement-card-wrapper" key={achievement.id}>
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

          <SeeMoreButton to="/achievements" label={t("preview.achievements.seeAll")} />
        </Container>
      </Container>
      )}

      {/* ---- Blog Preview ---- */}
      {show("blog") && (
      <Container fluid className="preview-section preview-section--gray">
        <Container>
          <h1 className="project-heading" style={{ paddingTop: "60px" }}>
            {t("preview.blog.title")}{" "}
            <strong className="purple">{t("preview.blog.highlight")}</strong>
          </h1>
          <p className="preview-subtitle">{t("preview.blog.subtitle")}</p>

          <Row style={{ justifyContent: "center" }}>
            {blogPosts.slice(0, 3).map((post) => (
              <Col md={4} className="project-card" key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="home-article-card">
                  <div className="home-article-img">
                    <img src={post.cover} alt={post.title} loading="lazy" />
                  </div>
                  <div className="home-article-body">
                    <div className="home-article-meta">
                      {new Date(post.date).toLocaleDateString(i18n.language === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "short", day: "numeric" })}
                      {" · "}{post.readingTime}
                    </div>
                    <h3 className="home-article-title">{post.title}</h3>
                    <p className="home-article-excerpt">{post.excerpt}</p>
                    <span className="home-article-more">Read →</span>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>

          <SeeMoreButton to="/blog" label={t("preview.blog.seeAll")} />
        </Container>
      </Container>
      )}

      {/* ---- Resume Preview ---- */}
      {show("resume") && (
      <Container fluid className="preview-section preview-section--gray">
        <Container>
          <h1 className="project-heading" style={{ paddingTop: "60px" }}>
            {t("preview.resume.title")}{" "}
            <strong className="purple">{t("preview.resume.highlight")}</strong>
          </h1>
          <p className="preview-subtitle">{t("preview.resume.subtitle")}</p>

          <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
            <Col xs="auto">
              <div className="resume-preview-wrapper">
                <Document file={pdf} className="d-flex justify-content-center">
                  <Page pageNumber={1} scale={0.45} />
                </Document>
              </div>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center", marginBottom: "60px" }}>
            <Col style={{ textAlign: "center" }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                className="resume-preview-btn"
                onClick={() =>
                  trackConversion(
                    "cv_download_homepage",
                    i18n.language === "fr" ? "CV_FR" : "CV_EN"
                  )
                }
              >
                <AiOutlineDownload /> &nbsp;{t("resume.download")}
              </Button>
              <Link to="/resume">
                <Button variant="outline-primary" className="resume-preview-btn">
                  {t("preview.resume.viewOnline")}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Container>
      )}
    </>
  );
}

export default PreviewSections;
