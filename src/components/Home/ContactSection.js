import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function ContactSection() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:shadrakbsh@gmail.com';
  };

  return (
    <div style={{
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
          <span style={{ color: "#2563EB" }}>Contactez-moi</span>
        </h1>

        <p style={{
          fontSize: "1.3em",
          paddingBottom: "40px",
          color: "#3F3F46",
          textAlign: "center"
        }}>
          N'hésitez pas à me contacter pour toute collaboration ou opportunité
        </p>

        <div style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          {/* GitHub */}
          <button
            onClick={() => handleClick('https://github.com/Bsh54/')}
            style={{
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
            onClick={handleEmail}
            style={{
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
            onClick={() => handleClick('https://www.linkedin.com/in/bessanh-shadrak-744049287/')}
            style={{
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
            onClick={() => handleClick('https://wa.me/22901974265400')}
            style={{
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
