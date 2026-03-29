import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ContactSection() {
  const { t } = useTranslation();
  return (
    <div style={{
      position: "relative",
      zIndex: 100,
      backgroundColor: "#FFFFFF",
      paddingTop: "80px",
      paddingBottom: "80px",
      borderTop: "1px solid #E5E7EB",
      width: "100%"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        <h1 style={{
          fontSize: "2.8em",
          paddingBottom: "30px",
          fontWeight: "bold",
          color: "#18181B",
          textAlign: "center"
        }}>
          <span style={{ color: "#2563EB" }}>{t('contact.title')}</span>
        </h1>

        <p style={{
          fontSize: "1.3em",
          paddingBottom: "40px",
          color: "#3F3F46",
          textAlign: "center"
        }}>
          {t('contact.subtitle')}
        </p>

        <div style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 101
        }}>
          {/* GitHub */}
          <button
            onClick={() => {
              console.log("GitHub clicked!");
              window.open('https://github.com/Bsh54/', '_blank');
            }}
            style={{
              position: "relative",
              zIndex: 102,
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "3px solid #2563EB",
              backgroundColor: "#FFFFFF",
              color: "#2563EB",
              fontSize: "2.5em",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2563EB";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.color = "#2563EB";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <AiFillGithub />
          </button>

          {/* Email */}
          <button
            onClick={() => {
              console.log("Email clicked!");
              window.location.href = 'mailto:shadrakbsh@gmail.com';
            }}
            style={{
              position: "relative",
              zIndex: 102,
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "3px solid #2563EB",
              backgroundColor: "#FFFFFF",
              color: "#2563EB",
              fontSize: "2.5em",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2563EB";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.color = "#2563EB";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <AiOutlineMail />
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => {
              console.log("LinkedIn clicked!");
              window.open('https://www.linkedin.com/in/bessanh-shadrak-744049287/', '_blank');
            }}
            style={{
              position: "relative",
              zIndex: 102,
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "3px solid #2563EB",
              backgroundColor: "#FFFFFF",
              color: "#2563EB",
              fontSize: "2.5em",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2563EB";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.color = "#2563EB";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaLinkedinIn />
          </button>

          {/* WhatsApp */}
          <button
            onClick={() => {
              console.log("WhatsApp clicked!");
              window.open('https://wa.me/2290197426540', '_blank');
            }}
            style={{
              position: "relative",
              zIndex: 102,
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "3px solid #2563EB",
              backgroundColor: "#FFFFFF",
              color: "#2563EB",
              fontSize: "2.5em",
              cursor: "pointer",
              transition: "all 0.3s ease",
              outline: "none"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2563EB";
              e.currentTarget.style.color = "#FFFFFF";
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.color = "#2563EB";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <FaWhatsapp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
