import React from "react";
import { useLanguage } from "../LanguageContext";

const LanguageToggle = () => {
  const { selectedLanguage, toggleLanguage } = useLanguage();

  return (
    <div>
      <button onClick={toggleLanguage}>Toggle Language</button>
      <p style={{ color: "white" }}>Selected Language: {selectedLanguage}</p>
    </div>
  );
};

export default LanguageToggle;
