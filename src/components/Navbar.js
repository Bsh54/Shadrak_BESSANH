import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => updateNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          Shadrak Bessanh<span style={{ color: "var(--accent)", marginLeft: 0 }}>.</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                active={isActive("/")}
                aria-current={isActive("/") ? "page" : undefined}
                onClick={() => updateExpanded(false)}
              >
                {t("nav.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                active={isActive("/project")}
                aria-current={isActive("/project") ? "page" : undefined}
                onClick={() => updateExpanded(false)}
              >
                {t("nav.projects")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/achievements"
                active={isActive("/achievements")}
                aria-current={isActive("/achievements") ? "page" : undefined}
                onClick={() => updateExpanded(false)}
              >
                {t("nav.achievements")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                active={isActive("/blog")}
                aria-current={isActive("/blog") ? "page" : undefined}
                onClick={() => updateExpanded(false)}
              >
                {t("nav.blog")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                active={isActive("/resume")}
                aria-current={isActive("/resume") ? "page" : undefined}
                onClick={() => updateExpanded(false)}
              >
                {t("nav.resume")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item style={{ marginLeft: 12, display: "flex", alignItems: "center" }}>
              <LanguageSwitcher />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
