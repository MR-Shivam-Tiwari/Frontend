import React from "react";

function MainContent() {
  const bgimgStyle = {
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentContainerStyle = {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "10px",
  };

  const logoTextStyle = {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#333", 
    marginBottom: "20px",
  };

  const logoSubtextStyle = {
    color: "#FFD700",
  };

  const sloganStyle = {
    fontSize: "1.2em",
    color: "#555", 
  };

  return (
    <div style={bgimgStyle} id="home">
      <div style={contentContainerStyle}>
        <h1 style={logoTextStyle}>
          MY <span style={logoSubtextStyle}>AWESOME</span> WEBSITE
        </h1>
        <p style={sloganStyle}>Welcome to the world of creativity and innovation.</p>
      </div>
    </div>
  );
}

export default MainContent;
