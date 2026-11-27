import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AchievementCard from "./AchievementCard";
import { achievementsData } from "../../data/achievementsData";
import { useTranslation } from "react-i18next";

function Achievements() {
  const { i18n } = useTranslation();
  const isFr = i18n.language === "fr";

  return (
    <>
      <div style={{ paddingTop: 140, paddingBottom: 48, background: "var(--bg)" }}>
        <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="section-head" style={{ marginBottom: 56 }}>
            <span className="section-eyebrow">{isFr ? "Reconnaissance" : "Recognition"}</span>
            <h1 className="section-title" style={{ fontSize: "var(--fs-display)", maxWidth: "22ch" }}>
              {isFr ? "Reconnaissance." : "Recognition."}
            </h1>
            <p className="section-lede">
              {isFr
                ? "Selections, prix et residences obtenus avec mes projets. Du plus recent au plus ancien."
                : "Selections, awards and residencies earned with my projects. Most recent first."}
            </p>
          </div>
        </Container>
      </div>

      <div style={{ background: "var(--bg)", paddingBottom: 120 }}>
        <Container fluid className="editorial-container" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Row>
            {achievementsData.map((achievement) => (
              <Col lg={4} md={6} sm={12} className="project-card" key={achievement.id}>
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
        </Container>
      </div>
    </>
  );
}

export default Achievements;
