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
                aria-label="GitHub"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick("GitHub")}
              >
                <AiFillGithub aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:shadrakbsh@gmail.com"
                aria-label="Email"
                style={{ color: "white" }}
                rel="noopener noreferrer"
                onClick={() => handleClick("Email")}
              >
                <AiOutlineMail aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/bessanh-shadrak-744049287/"
                aria-label="LinkedIn"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick("LinkedIn")}
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/2290197426540"
                aria-label="WhatsApp"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick("WhatsApp")}
              >
                <FaWhatsapp aria-hidden="true" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
