import React from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = {
    en: { name: "English", flag: "🇬🇧" },
    fr: { name: "Français", flag: "🇫🇷" }
  };

  const currentLang = languages[i18n.language] || languages.en;

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-primary"
        id="language-dropdown"
        style={{
          backgroundColor: "#FFFFFF",
          border: "2px solid #2563EB",
          color: "#2563EB",
          fontWeight: "500",
          padding: "0.5rem 1rem",
          borderRadius: "8px",
          transition: "all 0.3s ease"
        }}
      >
        <span style={{ fontSize: "1.2em", marginRight: "8px" }}>
          {currentLang.flag}
        </span>
        {currentLang.name}
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          minWidth: "150px"
        }}
      >
        {Object.entries(languages).map(([code, lang]) => (
          <Dropdown.Item
            key={code}
            onClick={() => changeLanguage(code)}
            active={i18n.language === code}
            style={{
              padding: "0.75rem 1rem",
              color: "#18181B",
              backgroundColor: i18n.language === code ? "#EFF6FF" : "transparent",
              fontWeight: i18n.language === code ? "600" : "400",
              transition: "all 0.2s ease"
            }}
          >
            <span style={{ fontSize: "1.2em", marginRight: "8px" }}>
              {lang.flag}
            </span>
            {lang.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSwitcher;
