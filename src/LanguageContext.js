import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => localStorage.getItem("selectedLanguage") || "en"
  );

  const toggleLanguage = useCallback(() => {
    setSelectedLanguage((language) => {
      const newLanguage = language === "en" ? "kr" : "en";
      localStorage.setItem("selectedLanguage", newLanguage);
      return newLanguage;
    });
  }, []);

  const contextValue = useMemo(
    () => ({ selectedLanguage, toggleLanguage }),
    [selectedLanguage, toggleLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
