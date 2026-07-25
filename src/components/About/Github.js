import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Github() {
  const { t } = useTranslation();

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px", color: "#F4F4F5" }}>
        {t("skills.github.title")} <strong style={{ color: "#3B82F6" }}>{t("skills.github.title.highlight")}</strong>
      </h1>
      <GitHubCalendar
        username="Bsh54"
        blockSize={15}
        blockMargin={5}
        color="#2563EB"
        fontSize={16}
        year="last"
      />
    </Row>
  );
}

export default Github;
