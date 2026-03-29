import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("home.about.title")} <span className="purple">{t("home.about.title.highlight")}</span>
            </h1>
            <p className="home-about-body">
              {t("home.about.intro")}
              <br />
              <br />
              {t("home.about.skills")}
              <i>
                <b className="purple">
                  {" "}
                  {t("home.about.skills.list")}{" "}
                </b>
              </i>
              {t("home.about.skills.end")}
              <br />
              <br />
              {t("home.about.interests")}
              <i>
                <b className="purple">
                  {" "}
                  {t("home.about.interests.list")}{" "}
                </b>
              </i>
              {t("home.about.interests.end")}
              <br />
              <br />
              {t("home.about.tools")}
              <b className="purple"> {t("home.about.tools.python")} </b> {t("home.about.tools.frameworks")}{" "}
              <i>
                <b className="purple">{t("home.about.tools.list")}</b> {t("home.about.tools.and")}{" "}
                <b className="purple">{t("home.about.tools.react")}</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
