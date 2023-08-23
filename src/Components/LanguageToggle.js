import React from "react";
import { useLanguage } from "../LanguageContext";
import "../index.css";

const LanguageToggle = () => {
  const { selectedLanguage, toggleLanguage } = useLanguage();

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        checked={selectedLanguage === "kr"}
        onChange={toggleLanguage}
        name="toggleSwitch"
        id="toggleSwitch"
      />
      <label className="toggle-switch-label" htmlFor="toggleSwitch">
        <span className="toggle-switch-inner"></span>
        <span className="toggle-switch-switch"></span>
      </label>
    </div>
  );
};

export default LanguageToggle;
