import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { trackClick } from "../../services/analyticsService";

const LINKS = [
  { key: "GitHub", label: "GitHub", icon: AiFillGithub, href: "https://github.com/Bsh54/", external: true },
  { key: "Email", label: "Email", icon: AiOutlineMail, href: "mailto:shadrakbsh@gmail.com", external: false },
  { key: "LinkedIn", label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/bessanh-shadrak-744049287/", external: true },
  { key: "WhatsApp", label: "WhatsApp", icon: FaWhatsapp, href: "https://wa.me/2290197426540", external: true },
];

function ContactSection() {
  const { t } = useTranslation();

  const handleClick = (name, href, external) => {
    trackClick(`${name}-Contact`, "contact");
    if (external) window.open(href, "_blank", "noopener,noreferrer");
    else window.location.href = href;
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-inner">
        <h1 className="contact-title">
          <span style={{ color: "#2563EB" }}>{t("contact.title")}</span>
        </h1>
        <p className="contact-subtitle">{t("contact.subtitle")}</p>

        <div className="contact-links">
          {LINKS.map(({ key, label, icon: Icon, href, external }) => (
            <button
              key={key}
              type="button"
              aria-label={`${label} — ${key === "Email" ? "shadrakbsh@gmail.com" : label}`}
              className="contact-social-btn"
              onClick={() => handleClick(key, href, external)}
            >
              <Icon aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
