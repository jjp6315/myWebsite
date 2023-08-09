import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./LanguageContext";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = {
  welcome: "Ji Woong Park",
  spotify:
    "https://open.spotify.com/embed/playlist/31WLmvzYHieK21tk2jbk2u?utm_source=generator",
};
const translationKr = {
  welcome: "박지웅의 홈페이지",
  spotify:
    "https://open.spotify.com/embed/playlist/3QirPjACcvemhLPMas0xMw?utm_source=generator",
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    kr: { translation: translationKr },
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
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
