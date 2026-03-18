import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous ! Je suis <span className="purple">BESSANH Shadrak</span>,{" "}
            <span className="purple">Développeur Logiciel</span> et{" "}
            <span className="purple">Développeur IA</span>.
            <br />
            <br />
            Je me spécialise dans le développement d’applications intelligentes
            et de solutions basées sur l’intelligence artificielle, en combinant
            expertise technique et innovation.
            <br />
            <br />
            En dehors du code, j’aime m’engager dans des activités qui me
            gardent créatif et inspiré :
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux vidéo 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Écrire des articles tech ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager et explorer de nouveaux endroits 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Efforcez-vous de créer des choses qui font la différence !"{" "}
          </p>
          <footer className="blockquote-footer">Shadrak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
