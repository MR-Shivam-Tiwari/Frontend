import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(
    window.innerWidth <= 767
  );

 


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="text-warning" style={{ backgroundColor: "#dee3e7" }}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between">
          <ul
            className="navbar-nav"
            style={{ display: isMobileMenuOpen ? "none" : "flex" }}
          >
            <li className="nav-item">
              <Link
                className={`nav-link btn ${
                  location.pathname === "/" && "active"
                }`}
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link btn ${
                  location.pathname === "/about" && "active"
                }`}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link btn ${
                  location.pathname === "/contact" && "active"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link btn ${
                  location.pathname === "/terms" && "active"
                }`}
                to="/terms"
              >
                Terms of Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link btn ${
                  location.pathname === "/privacy" && "active"
                }`}
                to="/privacy"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>

          <div className="d-flex position-relative">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>

            <button
              className="navbar-toggler ms-5"
              type="button"
              onClick={toggleMobileMenu}
              style={{ display: window.innerWidth <= 767 ? "block" : "none" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
