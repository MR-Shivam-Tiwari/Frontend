import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainContent from "./MainContent";

function MainComponent() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <Navbar />
      </div>
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainComponent;
