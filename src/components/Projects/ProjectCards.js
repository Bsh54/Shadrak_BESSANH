import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { trackClick, trackConversion } from "../../services/analyticsService";

function ProjectCards(props) {
  const { t } = useTranslation();

  const handleGithubClick = () => {
    trackClick(`GitHub-${props.title}`, "project");
    trackConversion("project_github_click", props.title);
  };

  const handleDemoClick = () => {
    trackClick(`Demo-${props.title}`, "project");
    trackConversion("project_demo_click", props.title);
  };

  return (
    <Card className="project-card-view">
      <div className="project-img-wrap">
        <Card.Img variant="top" src={props.imgPath} alt={`${props.title} preview`} loading="lazy" />
        {props.badge && <span className="project-badge">{props.badge}</span>}
      </div>
      <Card.Body className="project-card-body">
        <Card.Title className="project-card-title">{props.title}</Card.Title>

        {props.tags && props.tags.length > 0 && (
          <div className="project-tags">
            {props.tags.map((tag) => (
              <span className="project-tag" key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <Card.Text className="project-card-text">
          {props.description}
        </Card.Text>

        <div className="project-card-actions">
          <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer" onClick={handleGithubClick}>
            <BsGithub /> &nbsp;{props.isBlog ? "Blog" : t('projects.github')}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              onClick={handleDemoClick}
            >
              <CgWebsite /> &nbsp;{t('projects.demo')}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
