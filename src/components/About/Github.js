import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Jours où je <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Bsh54"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        year="last"
      />
    </Row>
  );
}

export default Github;
