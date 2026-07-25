import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = {
    en: { name: "English", code: "EN" },
    fr: { name: "Français", code: "FR" }
  };

  const currentLang = languages[i18n.language] || languages.en;

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-primary"
        id="language-dropdown"
        style={{
          backgroundColor: "transparent",
          border: "1.5px solid rgba(255,255,255,0.18)",
          color: "#E4E4E7",
          fontWeight: "600",
          padding: "0.4rem 0.9rem",
          borderRadius: "8px",
          transition: "all 0.3s ease"
        }}
      >
        <span style={{ color: "#3B82F6", marginRight: "6px", fontWeight: 700 }}>
          {currentLang.code}
        </span>
        {currentLang.name}
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          backgroundColor: "#16161F",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "10px",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.45)",
          minWidth: "160px"
        }}
      >
        {Object.entries(languages).map(([code, lang]) => (
          <Dropdown.Item
            key={code}
            onClick={() => changeLanguage(code)}
            active={i18n.language === code}
            style={{
              padding: "0.7rem 1rem",
              color: i18n.language === code ? "#3B82F6" : "#D4D4D8",
              backgroundColor: i18n.language === code ? "rgba(59,130,246,0.12)" : "transparent",
              fontWeight: i18n.language === code ? "600" : "400",
              transition: "all 0.2s ease"
            }}
          >
            <span style={{ marginRight: "8px", fontWeight: 700, opacity: 0.8 }}>
              {lang.code}
            </span>
            {lang.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitcher;
