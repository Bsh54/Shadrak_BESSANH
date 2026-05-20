import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { achievementsData } from "../../data/achievementsData";
import { useTranslation } from "react-i18next";
import { BsLinkedin, BsTwitter, BsGithub, BsMedium } from "react-icons/bs";
import ScrollToTop from "../ScrollToTop";
import "./AchievementDetail.css";

function AchievementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const achievement = achievementsData.find((a) => a.id === id);

  if (!achievement) {
    return (
      <Container style={{ paddingTop: "100px", textAlign: "center" }}>
        <h2>Achievement not found</h2>
        <Button onClick={() => navigate("/achievements")} variant="primary">
          Back to Achievements
        </Button>
      </Container>
    );
  }

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "linkedin":
        return <BsLinkedin />;
      case "twitter":
        return <BsTwitter />;
      case "github":
        return <BsGithub />;
      case "medium":
        return <BsMedium />;
      default:
        return null;
    }
  };

  return (
    <>
      <ScrollToTop />

      {/* Hero Section with Cover Image */}
      <div
        className="achievement-hero"
        style={{
          backgroundImage: `url(${achievement.coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative",
          marginTop: "60px"
        }}
      >
        <div className="achievement-hero-overlay"></div>
        <Container fluid className="achievement-hero-content">
          <Row className="h-100 align-items-end">
            <Col md={8}>
              <h1 className="achievement-hero-title">{achievement.title}</h1>
              <p className="achievement-hero-subtitle">
                {achievement.organization} • {achievement.date}
              </p>
            </Col>
            <Col md={4} className="text-end">
              <span className={`achievement-status-badge status-${achievement.status.toLowerCase()}`}>
                {achievement.status}
              </span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="achievement-detail-container">
        {/* Description Section */}
        <Row className="achievement-description-section">
          <Col md={12}>
            <div className="achievement-description">
              <h2>{t('achievements.about')}</h2>
              <div className="description-text">
                {achievement.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>


            {/* Technologies */}
            {achievement.technologies && (
              <div className="achievement-technologies">
                <h3>{t('achievements.technologies')}</h3>
                <div className="tech-tags">
                  {achievement.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Team */}
            {achievement.team && (
              <div className="achievement-team">
                <h3>{t('achievements.team')}</h3>
                <p>{achievement.team}</p>
              </div>
            )}

          </Col>
        </Row>

        {/* Event Details Section - Full Width */}
        <Row className="achievement-event-details-section">
          <Col md={12}>
            <div className="event-details-card">
              <h2>{t('achievements.eventDetails')}</h2>
              <Row>
                <Col md={4} className="detail-column">
                  <div className="detail-item">
                    <strong>{t('achievements.date')}:</strong>
                    <p>{achievement.date}</p>
                  </div>
                </Col>
                <Col md={4} className="detail-column">
                  <div className="detail-item">
                    <strong>{t('achievements.location')}:</strong>
                    <p>{achievement.location}</p>
                  </div>
                </Col>
                <Col md={4} className="detail-column">
                  <div className="detail-item">
                    <strong>{t('achievements.organization')}:</strong>
                    <p>{achievement.organization}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Gallery Section */}
        <Row className="achievement-gallery-section">
          <Col md={12}>
            <h2>{t('achievements.gallery')}</h2>
            <Row className="gallery-grid">
              {achievement.galleryImages.map((image, idx) => (
                <Col md={4} key={idx} className="gallery-item">
                  <div
                    className="gallery-image"
                    onClick={() => setSelectedImage(image)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={image} alt={`Gallery ${idx + 1}`} />
                    <div className="gallery-overlay">
                      <span>{t('achievements.viewFullSize')}</span>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row className="achievement-social-section">
          <Col md={12}>
            <h2>{t('achievements.shareAndFollow')}</h2>
            <div className="social-links">
              {Object.entries(achievement.socialLinks).map(([platform, url]) => (
                url && (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={platform}
                  >
                    {getSocialIcon(platform)}
                    <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                  </a>
                )
              ))}
            </div>
          </Col>
        </Row>

        {/* Back Button */}
        <Row className="achievement-back-section">
          <Col md={12} className="text-center">
            <Button
              onClick={() => navigate("/achievements")}
              variant="primary"
              size="lg"
            >
              {t('achievements.backToAchievements')}
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Lightbox Modal for Gallery */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={selectedImage} alt="Full size" />
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AchievementDetail;
