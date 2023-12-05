import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function PrivacyPolicy() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flex: 1 }}>
      <Navbar />
        <div className="container mt-5">
          <h2>Privacy Policy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum
            tristique justo, sed fermentum mauris gravida eu. Morbi nec justo eu tortor
            malesuada bibendum. Fusce aliquet lectus at nisi malesuada, vel malesuada
            metus suscipit. Nullam vel ultrices nisl. Nulla facilisi.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We collect information that you provide directly to us, such as your name,
            email address, and any other information you choose to provide.
          </p>

          <h3>How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our
            services, as well as to communicate with you and respond to your inquiries.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
