import React from "react";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../LanguageContext";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const { selectedLanguage, toggleLanguage } = useLanguage();
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        background: "	#212121",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "2rem",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1,
      }}
    >
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a href="/">
          {selectedLanguage === "en" ? t("home") : t("home", { lng: "kr" })}
        </a>
        <a href="/AboutPage">
          {selectedLanguage === "en" ? t("about") : t("about", { lng: "kr" })}
        </a>
        <a href="/Portfolio">
          {selectedLanguage === "en"
            ? t("portfolio")
            : t("portfolio", { lng: "kr" })}
        </a>
        <a href="/PhotoGallery">
          {selectedLanguage === "en"
            ? t("gallery")
            : t("gallery", { lng: "kr" })}
        </a>
      </div>
      <div style={{ paddingRight: "3rem" }}>
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Header;
