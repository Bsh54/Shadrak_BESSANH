import React from "react";

function ContactSectionTest() {
  const testClick = () => {
    alert("BOUTON CLIQUÉ !");
    console.log("Click détecté !");
  };

  return (
    <div style={{
      position: "relative",
      zIndex: 9999,
      backgroundColor: "#FF0000",
      padding: "100px",
      margin: "50px auto",
      maxWidth: "800px"
    }}>
      <h1 style={{ color: "#FFFFFF", marginBottom: "30px" }}>
        TEST DE CLIC
      </h1>

      <button
        onClick={testClick}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#00FF00",
          color: "#000000",
          fontSize: "24px",
          fontWeight: "bold",
          border: "5px solid #000000",
          cursor: "pointer",
          borderRadius: "10px"
        }}
      >
        CLIQUE ICI
      </button>

      <div style={{ marginTop: "30px", color: "#FFFFFF" }}>
        <p>Si ce bouton ne fonctionne pas, le problème est GLOBAL</p>
        <p>Si ce bouton fonctionne, le problème est dans ContactSection</p>
      </div>
    </div>
  );
}

export default ContactSectionTest;
