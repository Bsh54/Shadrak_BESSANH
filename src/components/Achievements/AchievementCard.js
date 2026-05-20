import React from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useTranslation } from "react-i18next";
import "./AchievementCard.css";

function AchievementCard(props) {
  const { t } = useTranslation();

  const getStatusColor = (status) => {
    switch (status) {
      case "Winner":
        return "success";
      case "Finalist":
        return "info";
      case "Participant":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="achievement-card-view">
      <Card.Img variant="top" src={props.cardImage} alt="achievement-img" />
      <Card.Body>
        <div className="achievement-header">
          <Card.Title>{props.title}</Card.Title>
          <Badge bg={getStatusColor(props.status)} className="status-badge">
            {props.status}
          </Badge>
        </div>

        <Card.Text className="achievement-organization">
          {props.organization}
        </Card.Text>

        <div className="achievement-meta">
          <p className="achievement-date">
            <i className="fas fa-calendar"></i> {props.date}
          </p>
          <p className="achievement-location">
            <i className="fas fa-map-marker-alt"></i> {props.location}
          </p>
        </div>

        <div className="achievement-footer">
          <small className="text-muted">{t('achievements.clickToLearnMore')}</small>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AchievementCard;
