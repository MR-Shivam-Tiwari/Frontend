import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const iconStyle = {
    fontSize: "25px",
    margin: "0 10px",
    color: "#fff",
  };

  const footerStyle = {
    backgroundColor: "#343a40",
    color: "#fff",
    padding: "30px 0",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    marginRight: "20px",
  };

  return (
    <div style={footerStyle}>
      <div className="container">
        <div className="mb-4">
          <Link to="/about" style={linkStyle}>
            About Us
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
          <Link to="/terms" style={linkStyle}>
            Terms of Service
          </Link>
          <Link to="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>
        </div>
        <div className="d-flex mt-4">
          <h5>Follow Us</h5>
          <div className="ms-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FaFacebook style={iconStyle} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FaInstagram style={iconStyle} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              <FaLinkedin style={iconStyle} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
