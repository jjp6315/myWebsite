import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../LanguageContext";

const SpotifyPlaylist = () => {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();

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
          {t("listen", { lng: selectedLanguage })}
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
          t("spotify", { lng: selectedLanguage })
        }
        width="70%"
        height="550"
        frameBorder="0"
        title="Ji Woong Park's Spotify playlist"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
