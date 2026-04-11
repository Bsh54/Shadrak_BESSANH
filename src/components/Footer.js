import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { trackClick } from "../services/analyticsService";

function Footer() {
  const handleClick = (buttonName) => {
    trackClick(buttonName, "social");
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Bsh54/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick("GitHub")}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:shadrakbsh@gmail.com"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick("Email")}
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/bessanh-shadrak-744049287/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick("LinkedIn")}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/22901974265400"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick("WhatsApp")}
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
