import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import AchievementCard from "./AchievementCard";
import { achievementsData } from "../../data/achievementsData";
import { useTranslation } from "react-i18next";
import "./Achievements.css";

function Achievements() {
  const { t } = useTranslation();

  return (
    <div>
      <Container fluid className="achievement-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            {t('achievements.title')} <strong className="purple">{t('achievements.title.highlight')}</strong>
          </h1>
          <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
            {t('achievements.subtitle')}
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {achievementsData.map((achievement) => (
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
        </Container>
      </Container>
    </div>
  );
}

export default Achievements;
