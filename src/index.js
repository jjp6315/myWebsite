import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./LanguageContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Translation from "./Translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: Translation.en },
    kr: { translation: Translation.kr },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
