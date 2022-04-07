import "./App.css";

import { Route, Routes } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import NavbarComponent from "./components/NavbarComponent";
import PricingPage from "./pages/PricingPage";
import { useState } from "react";

function App() {
  return (
    <div className="App container" fluid>
      <HeaderComponent />
      <NavbarComponent />
      <FooterComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
