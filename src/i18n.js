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

export default i18n;
