import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUs() {
  const pageStyle = {
    minHeight: "100vh",
    padding: "50px",
    backgroundColor: "#f4f4f4", 
  };

  const contentStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "#333", 
    marginBottom: "20px",
  };

  const textStyle = {
    fontSize: "1.2em",
    color: "#555", 
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <Navbar />
        <div style={pageStyle}>
          <div style={contentStyle}>
            <h1 style={headingStyle}>About Us</h1>
            <p style={textStyle}>
              Welcome to our website! We are a creative and innovative team
              dedicated to providing high-quality solutions for our clients.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              bibendum tristique justo, sed fermentum mauris gravida eu.
            </p>
            <p style={textStyle}>
              Our mission is to make a positive impact through our work and
              deliver outstanding results. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
