import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { trackConversion } from "../../services/analyticsService";
import pdfEN from "../../Assets/CV Shadrak EN.pdf";
import pdfFR from "../../Assets/CV Shadrak FR.pdf";

function ResumeNew() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const pdf = isFr ? pdfFR : pdfEN;
  const preview = isFr ? "/images/cv-preview-FR.png" : "/images/cv-preview-EN.png";

  const handleDownload = () => {
    trackConversion("cv_download", isFr ? "CV_FR" : "CV_EN");
  };

  return (
    <>
      <div style={{ paddingTop: 140, paddingBottom: 48, background: "var(--bg)" }}>
        <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ marginBottom: 32 }}>
            <Link to="/" className="achievement-back-link">
              {isFr ? "← Retour a l'accueil" : "← Back to home"}
            </Link>
          </div>

          <div className="section-head" style={{ marginBottom: 40 }}>
            <span className="section-eyebrow">
              {isFr ? "Curriculum vitae" : "Curriculum vitae"}
            </span>
            <h1 className="section-title achievement-detail-title">
              {isFr
                ? "Le curriculum vitae complet."
                : "The complete curriculum vitae."}
            </h1>
            <p className="section-lede">
              {isFr
                ? "Une page, mise a jour avec l'experience IDS, les distinctions 2026 et les credentials. Telechargement direct ci-dessous."
                : "One page, up to date with the IDS experience, the 2026 recognition and the credentials. Direct download below."}
            </p>
          </div>

          <div className="resume-full-actions-bar">
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="btn-editorial btn-editorial--primary"
              onClick={handleDownload}
            >
              <AiOutlineDownload style={{ fontSize: 18 }} />
              {isFr ? "Telecharger le PDF" : "Download PDF"}
            </a>
            <a
              href={pdf}
              target="_blank"
              rel="noreferrer"
              className="btn-editorial btn-editorial--ghost"
            >
              {isFr ? "Ouvrir dans le navigateur" : "Open in browser"}
              <span style={{ marginLeft: 6 }}>&rarr;</span>
            </a>
            <span className="resume-full-meta-inline">
              PDF A4, 1 {isFr ? "page" : "page"}
            </span>
          </div>

          <div className="resume-full-wrap">
            <img
              src={preview}
              alt={isFr ? "Curriculum vitae de Shadrak Bessanh" : "Curriculum vitae of Shadrak Bessanh"}
              className="resume-full-img"
              loading="eager"
            />
          </div>
        </Container>
      </div>
    </>
  );
}

export default ResumeNew;
