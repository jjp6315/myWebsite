import React from "react";
import { useLanguage } from "../LanguageContext";
import "../index.css"; // Import the CSS file for styling

const LanguageToggle = () => {
  const { selectedLanguage, toggleLanguage } = useLanguage();

  return (
    <div className="switch">
      <input
        id="language-toggle"
        className="check-toggle check-toggle-round-flat"
        type="checkbox"
        checked={selectedLanguage === "kr"}
        onChange={toggleLanguage}
      />
      <label htmlFor="language-toggle"></label>
      <span className="on">En</span>
      <span className="off">Kr</span>
    </div>
  );
};

export default LanguageToggle;
