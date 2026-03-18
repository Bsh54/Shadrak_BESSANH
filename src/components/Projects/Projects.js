import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>Récents
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Salon de discussion personnel ou espace de travail pour partager des ressources et discuter avec des amis, construit avec react.js, Material-UI et Firebase. Dispose de fonctionnalités permettant la messagerie en temps réel, le partage d'images ainsi que les réactions aux messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="Mon blog personnel construit avec Next.js et Tailwind CSS qui prend le contenu des fichiers markdown et le rend avec Next.js. Supporte le mode sombre et facilite l'écriture d'articles en markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Éditeur de code et markdown en ligne construit avec react.js. Éditeur en ligne qui supporte le code html, css et js avec aperçu instantané du site web. Éditeur markdown en ligne pour créer des fichiers README qui supporte GFM, les balises HTML personnalisées avec barre d'outils et aperçu instantané. Les deux éditeurs supportent la sauvegarde automatique via le Local Storage."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Utilisation du dataset de maladies des plantes de Kaggle et entraînement d'un modèle de classification d'images avec le framework 'PyTorch' utilisant CNN et Transfer Learning avec 38 classes de différentes feuilles de plantes. Le modèle a réussi à détecter les feuilles malades et saines de 14 plantes uniques. J'ai pu atteindre une précision de 98% en utilisant le modèle pré-entraîné Resnet34."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="IA pour le Bien Social"
              description="Utilisation du 'Traitement du Langage Naturel' pour la détection de publications liées au suicide et l'idéation suicidaire des utilisateurs dans le cyberespace, contribuant ainsi à la prévention du suicide."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Reconnaissance Faciale et Détection d'Émotions"
              description="Entraînement d'un classificateur CNN utilisant le dataset 'FER-2013' avec Keras et tensorflow en backend. Le classificateur a prédit avec succès les différents types d'émotions humaines. La précision la plus élevée obtenue avec le modèle était de 60,1%.
              Ensuite, utilisation d'Open-CV pour détecter le visage dans une image puis passer le visage au classificateur pour prédire l'émotion d'une personne."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
