import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { achievementsData } from "../../data/achievementsData";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../ScrollToTop";
import { AchievementSEO } from "../SEO/SpecificSEO";
import "./AchievementDetail.css";

function AchievementDetail() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const isFr = i18n.language === "fr";
  const [lightbox, setLightbox] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const achievement = achievementsData.find((a) => a.id === id);

  if (!achievement) {
    return (
      <Container style={{ paddingTop: 160, textAlign: "center" }}>
        <h2 className="section-title">{isFr ? "Introuvable." : "Not found."}</h2>
        <Link to="/achievements" className="btn-editorial btn-editorial--ghost" style={{ marginTop: 24 }}>
          {isFr ? "Retour aux reconnaissances" : "Back to recognition"}
        </Link>
      </Container>
    );
  }

  const getLocalizedText = (field) => {
    if (typeof field === "object" && field !== null) {
      return field[i18n.language] || field["en"];
    }
    return field;
  };

  const description = getLocalizedText(achievement.description) || "";
  const paragraphs = description.split("\n\n").filter(Boolean);
  const gallery = achievement.galleryImages || [];
  const visibleGallery = showAll ? gallery : gallery.slice(0, 6);

  return (
    <>
      <ScrollToTop />
      <AchievementSEO
        title={`${getLocalizedText(achievement.title)} - BESSANH Shadrak`}
        description={paragraphs[0] || ""}
        image={`https://shadrakbessanh.me${achievement.ogImage || achievement.coverImage}`}
        url={`https://shadrakbessanh.me/achievement/${achievement.id}`}
        eventName={achievement.organization}
        eventDate={achievement.date}
        award={achievement.status}
        organization={achievement.organization}
      />

      <div style={{ paddingTop: 120, paddingBottom: 48, background: "var(--bg)" }}>
        <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ marginBottom: 32 }}>
            <Link
              to="/achievements"
              className="achievement-back-link"
            >
              ← {isFr ? "Retour aux reconnaissances" : "Back to recognition"}
            </Link>
          </div>

          <div className="section-head" style={{ marginBottom: 48 }}>
            <span className="section-eyebrow">
              {achievement.organization}
            </span>
            <h1 className="section-title achievement-detail-title">
              {getLocalizedText(achievement.title)}
            </h1>
            <div className="achievement-meta-row">
              <span>{achievement.date}</span>
              <span className="achievement-meta-dot">·</span>
              <span>{achievement.location}</span>
              {achievement.status && (
                <>
                  <span className="achievement-meta-dot">·</span>
                  <span className="achievement-status-pill">{achievement.status}</span>
                </>
              )}
            </div>
          </div>

          {achievement.coverImage && (
            <div className="achievement-cover">
              <img src={achievement.coverImage} alt={getLocalizedText(achievement.title)} loading="eager" decoding="async" />
            </div>
          )}
        </Container>
      </div>

      <div style={{ background: "var(--bg)", paddingBottom: 96 }}>
        <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            <Col lg={8}>
              <div className="achievement-prose">
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </Col>
            <Col lg={4}>
              <aside className="achievement-sidebar">
                <div className="achievement-side-block">
                  <span className="achievement-side-label">{isFr ? "Organisation" : "Organization"}</span>
                  <span className="achievement-side-value">{achievement.organization}</span>
                </div>
                {achievement.team && (
                  <div className="achievement-side-block">
                    <span className="achievement-side-label">{isFr ? "Equipe" : "Team"}</span>
                    <span className="achievement-side-value">{achievement.team}</span>
                  </div>
                )}
                {achievement.keyContacts && achievement.keyContacts.length > 0 && (
                  <div className="achievement-side-block">
                    <span className="achievement-side-label">{isFr ? "Membres du jury" : "Jury members"}</span>
                    <ul className="achievement-side-list">
                      {achievement.keyContacts.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </Col>
          </Row>

          {achievement.technologies && achievement.technologies.length > 0 && (
            <div className="achievement-block">
              <span className="section-eyebrow">{isFr ? "Stack" : "Stack"}</span>
              <div className="achievement-tags">
                {achievement.technologies.map((tech, idx) => (
                  <span key={idx} className="achievement-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {achievement.sourceLinks && achievement.sourceLinks.length > 0 && (
            <div className="achievement-block">
              <span className="section-eyebrow">{isFr ? "Sources" : "Sources"}</span>
              <ul className="achievement-sources-list">
                {achievement.sourceLinks.map((s, idx) => (
                  <li key={idx}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.label}
                      <span style={{ marginLeft: 6 }}>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {gallery.length > 0 && (
            <div className="achievement-block">
              <span className="section-eyebrow">{isFr ? "Images" : "Gallery"}</span>
              <div className="achievement-gallery">
                {visibleGallery.map((image, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="achievement-gallery-item"
                    onClick={() => setLightbox(image)}
                    aria-label={`Open image ${idx + 1}`}
                  >
                    <img src={image} alt={`${getLocalizedText(achievement.title)} - ${idx + 1}`} loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
              {!showAll && gallery.length > 6 && (
                <div style={{ marginTop: 24, display: "flex", justifyContent: "center" }}>
                  <button
                    type="button"
                    className="btn-editorial btn-editorial--ghost btn-editorial--seeall"
                    onClick={() => setShowAll(true)}
                  >
                    {isFr ? `Voir les ${gallery.length} images` : `See all ${gallery.length} images`}
                  </button>
                </div>
              )}
            </div>
          )}
        </Container>
      </div>

      {lightbox && (
        <div
          className="achievement-lightbox"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={lightbox} alt="Full size" />
          <button
            type="button"
            className="achievement-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

export default AchievementDetail;
