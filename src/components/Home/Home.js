import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import ContactSection from "./ContactSection";
import PreviewSections from "./PreviewSections";
import { SEOHead } from "../SEO/SEOHead";
import FAQSchema from "../SEO/FAQSchema";

function Home() {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language === "fr";

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section>
      <SEOHead
        title="Shadrak Bessanh"
        description="AI engineer based in Cotonou. Shipping products on digital identity, African languages, and public services. USAII Social Impact 2026, 2nd place ID4Africa 2026."
        keywords="Shadrak Bessanh, AI engineer, Benin, NAWIRI, CottonPay, Fon"
        image="https://shadrakbessanh.me/og-image.jpg"
        url="https://shadrakbessanh.me/"
        pageType="AboutPage"
      />
      <FAQSchema />

      {/* ============ HERO ============ */}
      <header className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-eyebrow">
                {isFr ? "Cotonou, Benin" : "Cotonou, Benin"}
              </div>

              <h1 className="hero-headline">
                Shadrak BESSANH.
              </h1>

              <div className="hero-rotator" aria-hidden="true">
                <Typewriter
                  options={{
                    strings: isFr
                      ? ["Ingenieur IA", "Developpeur full-stack", "Builder"]
                      : ["AI engineer", "Full-stack developer", "Builder"],
                    autoStart: true,
                    loop: true,
                    delay: 55,
                    deleteSpeed: 30,
                    pauseFor: 1800,
                  }}
                />
              </div>

              <p className="hero-sub">
                {isFr
                  ? "Je construis des logiciels de bout en bout, du modele a l'interface que les gens utilisent."
                  : "I build software end to end, from the model to the interface people actually use."}
              </p>

              <div className="hero-ctas">
                <Link to="/project" className="btn-editorial btn-editorial--primary">
                  {isFr ? "Voir les projets" : "See the work"}
                </Link>
                <a
                  href="#contact"
                  className="btn-editorial btn-editorial--ghost"
                  onClick={scrollToContact}
                >
                  {isFr ? "Me contacter" : "Get in touch"}
                </a>
              </div>
            </div>

            <aside className="hero-visual">
              <img
                src="/images/achievements/meti-timbuktoo-shadrak-2.jpg"
                alt={isFr
                  ? "Shadrak Bessanh devant l'AI Startup Center a Addis-Abeba, hoodie METI UniPods AI Cohort 1, novembre 2026."
                  : "Shadrak Bessanh in front of the AI Startup Center in Addis Ababa, wearing the METI UniPods AI Cohort 1 hoodie, November 2026."}
                loading="eager"
                decoding="async"
              />
            </aside>
          </div>

        </div>
      </header>

      {/* ============ BIO ============ */}
      <section className="section bio-section" style={{ borderTop: "1px solid var(--surface-border)" }}>
        <div className="editorial-container">
          <div className="section-head">
            <span className="section-eyebrow">
              {isFr ? "01 / Bio" : "01 / Bio"}
            </span>
            <h2 className="section-title">
              {isFr ? "Bio." : "Bio."}
            </h2>
          </div>

          <div className="bio-grid">
            <div className="bio-text">
              <p>
                {isFr
                  ? "Je suis Shadrak Bessanh, ingenieur en intelligence artificielle et full-stack, base a Cotonou. J'etudie actuellement en Licence Informatique a l'IFRI (Universite d'Abomey-Calavi), et je dirige Ife, une plateforme d'apprentissage des langues africaines sous-representees."
                  : "I'm Shadrak Bessanh, an artificial intelligence and full-stack engineer based in Cotonou. I am currently an undergraduate in Computer Science at IFRI (University of Abomey-Calavi), and I lead Ife, a platform for learning under-represented African languages."}
              </p>
              <p>
                {isFr
                  ? "En 2026, Ife a ete selectionne pour la Cohort 1 du Pan-African AI Ventures Residency, un programme de deux semaines organise a l'Ethiopian AI Institute d'Addis-Abeba, avec le soutien de UNDP timbuktoo et du Ministere japonais de l'Economie, du Commerce et de l'Industrie (METI)."
                  : "In 2026, Ife was selected for Cohort 1 of the Pan-African AI Ventures Residency, a two-week programme hosted at the Ethiopian AI Institute in Addis Ababa, with the support of UNDP timbuktoo and Japan's Ministry of Economy, Trade and Industry (METI)."}
              </p>
              <p>
                {isFr
                  ? "La meme annee, NAWIRI, un assistant multilingue qui aide les familles d'Afrique de l'Ouest a atteindre les aides publiques auxquelles elles ont droit, a recu le Social Impact Award du USAII Global AI Hackathon, parmi 808 equipes de plus de 90 pays. CottonPay, une solution d'identite numerique verifiable pour les producteurs de coton non bancarises, a termine deuxieme a l'African Digital Identity Hackathon d'Abidjan."
                  : "The same year, NAWIRI, a multilingual assistant that helps families in West Africa reach the public aid they are entitled to, received the Social Impact Award at the USAII Global AI Hackathon, among 808 teams from more than 90 countries. CottonPay, a verifiable digital identity solution for unbanked cotton farmers, placed second at the African Digital Identity Hackathon in Abidjan."}
              </p>
              <p>
                {isFr
                  ? "Mon travail porte sur ce que la technologie globale a tendance a ignorer: l'identite numerique pour les non-bancarises, les langues africaines que les modeles ne parlent pas, et l'acces aux services publics. Dans chaque projet, le modele interprete; la decision reste humaine."
                  : "My work focuses on what global technology tends to overlook: digital identity for the unbanked, African languages that language models do not speak, and access to public services. Across every project, the model interprets; the decision stays human."}
              </p>
            </div>

            <aside className="bio-portrait">
              <img
                src="/images/achievements/shadrak-ai4all-bio.jpg"
                alt={isFr
                  ? "Shadrak Bessanh a l'Ethiopian Artificial Intelligence Institute, residency METI UniPods AI Cohort 1, Addis-Abeba, novembre 2026."
                  : "Shadrak Bessanh at the Ethiopian Artificial Intelligence Institute, METI UniPods AI Cohort 1 residency, Addis Ababa, November 2026."}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                {isFr
                  ? "Ethiopian AI Institute, Addis-Abeba. Novembre 2026."
                  : "Ethiopian AI Institute, Addis Ababa. November 2026."}
              </figcaption>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ PREVIEWS (projects + achievements + blog + resume) ============ */}
      <PreviewSections />

      {/* ============ CONTACT ============ */}
      <ContactSection />
    </section>
  );
}

export default Home;
