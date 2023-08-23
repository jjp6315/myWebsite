import React from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { useLanguage } from "../LanguageContext";

const SpotifyPlaylist = () => {
  const { t } = useTranslation();
  const { selectedLanguage, toggleLanguage } = useLanguage();

  return (
    <div>
      <div>
        <h1
          style={{
            fontFamily: "Helvetica",
            color: "#171717",
            marginTop: "3vh",
            fontSize: "10vh",
            textAlign: "center",
            paddingBottom: "10%",
            paddingTop: "10%",
          }}
        >
          {selectedLanguage === "en" ? t("listen") : t("listen", { lng: "kr" })}
        </h1>
      </div>

      <iframe
        style={{
          borderRadius: "30px",
          alignContent: "center",
          position: "relative",
          justifyContent: "center",
          backgroundColor: "black",
        }}
        src={
          selectedLanguage === "en" ? t("spotify") : t("spotify", { lng: "kr" })
        }
        width="70%"
        height="550"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
