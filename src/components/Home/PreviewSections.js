import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProjectCard from "../Projects/ProjectCards";
import AchievementCard from "../Achievements/AchievementCard";
import { achievementsData } from "../../data/achievementsData";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { trackConversion } from "../../services/analyticsService";
import pdfEN from "../../Assets/CV Shadrak EN.pdf";
import pdfFR from "../../Assets/CV Shadrak FR.pdf";
import oreus from "../../Assets/Projects/oreus.png";
import minerva from "../../Assets/Projects/minerva.png";
import voxiai from "../../Assets/Projects/voxiai.png";
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

function PreviewSections() {
  const { t, i18n } = useTranslation();
  const pdf = i18n.language === "fr" ? pdfFR : pdfEN;

  const featuredProjects = [
    {
      imgPath: oreus,
      title: "Oreus",
      description: t("projects.oreus.description"),
      ghLink: "https://github.com/Bsh54/Oreus",
      demoLink: "https://oreus.shadrakbessanh.me",
    },
    {
      imgPath: minerva,
      title: "MINERVA",
      description: t("projects.minerva.description"),
      ghLink: "https://github.com/Bsh54/MINERVA",
      demoLink: "https://minerva-snowy.vercel.app/",
    },
    {
      imgPath: voxiai,
      title: "VoxiAI",
      description: t("projects.voxiai.description"),
      ghLink: "https://github.com/Bsh54/VoxiAI",
      demoLink: "https://shads229-voxiai.hf.space/",
    },
  ];

  return (
    <>
      {/* ---- Projects Preview ---- */}
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

      {/* ---- Achievements Preview ---- */}
      <Container fluid className="preview-section preview-section--white">
        <Container>
          <h1 className="project-heading" style={{ paddingTop: "60px" }}>
            {t("preview.achievements.title")}{" "}
            <strong className="purple">{t("preview.achievements.highlight")}</strong>
          </h1>
          <p className="preview-subtitle">{t("preview.achievements.subtitle")}</p>

          <Row style={{ justifyContent: "center" }}>
            {achievementsData.slice(0, 1).map((achievement) => (
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

      {/* ---- Resume Preview ---- */}
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
    </>
  );
}

export default PreviewSections;
