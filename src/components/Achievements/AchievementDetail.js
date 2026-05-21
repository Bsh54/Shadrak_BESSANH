import React, { useState, useCallback, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { achievementsData } from "../../data/achievementsData";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../ScrollToTop";
import { AchievementSEO } from "../SEO/SpecificSEO";
import "./AchievementDetail.css";

function AchievementDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [imageErrors, setImageErrors] = useState(new Set());

  const achievement = useMemo(() => achievementsData.find((a) => a.id === id), [id]);

  const handleImageError = useCallback((src) => {
    setImageErrors((prev) => new Set([...prev, src]));
  }, []);

  const handleImageLoad = useCallback((src) => {
    setLoadedImages((prev) => new Set([...prev, src]));
  }, []);

  // Lazy load images on scroll with intersection observer
  React.useEffect(() => {
    if (!achievement?.galleryImages) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            if (src && !loadedImages.has(src)) {
              img.src = src;
              img.removeAttribute("data-src");
              setLoadedImages((prev) => new Set([...prev, src]));
            }
          }
        });
      },
      { rootMargin: "50px" }
    );

    const images = document.querySelectorAll("img[data-src]");
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [achievement, loadedImages]);

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

  const getLocalizedText = (field) => {
    if (typeof field === 'object' && field !== null) {
      return field[i18n.language] || field['en'];
    }
    return field;
  };

  return (
    <>
      <ScrollToTop />
      <AchievementSEO
        title={`${getLocalizedText(achievement.title)} - BESSANH Shadrak`}
        description={getLocalizedText(achievement.description).split("\n\n")[0]}
        image={achievement.coverImage}
        url={`https://shadrakbessanh.me/achievement/${achievement.id}`}
        eventName={achievement.organization}
        eventDate={achievement.date}
        award={achievement.status}
        organization={achievement.organization}
      />

      {/* Hero Section with Cover Image */}
      <div
        className="achievement-hero"
        style={{
          backgroundImage: `url(${achievement.coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative",
          marginTop: "60px",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="achievement-hero-overlay"></div>
        <Container fluid className="achievement-hero-content">
          <Row className="h-100 align-items-end">
            <Col md={8}>
              <h1 className="achievement-hero-title">{getLocalizedText(achievement.title)}</h1>
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
                {getLocalizedText(achievement.description).split("\n\n").map((paragraph, idx) => (
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
            <div className="gallery-grid">
              {achievement.galleryImages.map((image, idx) => (
                <div key={idx} className="gallery-item">
                  <div
                    className="gallery-image"
                    onClick={() => !imageErrors.has(image) && setSelectedImage(image)}
                    style={{ cursor: imageErrors.has(image) ? "not-allowed" : "pointer" }}
                  >
                    {imageErrors.has(image) ? (
                      <div style={{
                        width: "100%",
                        height: "250px",
                        backgroundColor: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#999",
                        fontSize: "12px"
                      }}>
                        Image unavailable
                      </div>
                    ) : (
                      <>
                        <img
                          data-src={image}
                          alt={`Gallery ${idx + 1}`}
                          loading="lazy"
                          decoding="async"
                          onLoad={() => handleImageLoad(image)}
                          onError={() => handleImageError(image)}
                          style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                            display: loadedImages.has(image) ? "block" : "none"
                          }}
                        />
                        {!loadedImages.has(image) && (
                          <div style={{
                            width: "100%",
                            height: "250px",
                            backgroundColor: "#f0f0f0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}>
                            <div style={{
                              width: "30px",
                              height: "30px",
                              border: "3px solid #2563EB",
                              borderTop: "3px solid transparent",
                              borderRadius: "50%",
                              animation: "spin 1s linear infinite"
                            }}></div>
                          </div>
                        )}
                        <div className="gallery-overlay">
                          <span>{t('achievements.viewFullSize')}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
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
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full size"
              loading="lazy"
              decoding="async"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain"
              }}
            />
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
              type="button"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AchievementDetail;
