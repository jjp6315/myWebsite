import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const toggleLanguage = () => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === "en" ? "kr" : "en"
    );
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
