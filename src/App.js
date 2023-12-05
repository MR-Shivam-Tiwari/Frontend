import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainComponent from "./Components/MainComponent";
import AboutUs from "./Components/AboutUsPage";
import ContactUs from "./Components/ContactUs";
import TermsOfServices from "./Components/TermsOfServices";
import PrivacyPolicy from "./Components/PrivacyPolicy";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsOfServices />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
