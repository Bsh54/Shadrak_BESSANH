import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple"> PRÉSENTER</span>
            </h1>
            <p className="home-about-body">
              Je suis un Développeur Logiciel et Développeur IA passionné par la transformation d’idées en
              solutions intelligentes et évolutives. Au fil du temps, j’ai exploré plusieurs
              technologies et trouvé ma passion dans la création de systèmes
              d’intelligence artificielle et d’expériences utilisateur innovantes.
              <br />
              <br />
              Je maîtrise
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, Machine Learning, Deep Learning et Node.js{" "}
                </b>
              </i>
              — et j’aime travailler sur des projets d’IA et de développement full-stack.
              <br />
              <br />
              Mes principaux domaines d’intérêt incluent le développement
              <i>
                <b className="purple">
                  {" "}
                  d’Applications IA, de Modèles de Machine Learning,{" "}
                </b>
              </i>
              et l’exploration de nouvelles façons d’intégrer l’intelligence artificielle dans des solutions pratiques.
              <br />
              <br />
              Dès que possible, j’adore créer des projets avec
              <b className="purple"> Python </b> et des frameworks modernes comme{" "}
              <i>
                <b className="purple">TensorFlow, PyTorch</b> et{" "}
                <b className="purple">React.js</b>.
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
