import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../LanguageContext";

const Header = () => {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();
  const translated = (key) => t(key, { lng: selectedLanguage });

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/">{translated("home")}</NavLink>
        <NavLink to="/about">{translated("about")}</NavLink>
        <NavLink to="/portfolio">{translated("portfolio")}</NavLink>
        <NavLink to="/photos">{translated("gallery")}</NavLink>
      </nav>
      <LanguageToggle />
    </header>
  );
};

export default Header;
