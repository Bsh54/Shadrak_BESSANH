import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/project", label: t("nav.projects") },
    { to: "/achievements", label: t("nav.achievements") },
    { to: "/resume", label: t("nav.resume") },
  ];

  return (
    <footer className="footer">
      <Container className="footer-inner">
        <p className="footer-copyright">
          © {year} <strong>BESSANH Shadrak</strong>
        </p>

        <nav className="footer-nav" aria-label="Footer">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="footer-nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="footer-built">Built with React</p>
      </Container>
    </footer>
  );
}

export default Footer;
