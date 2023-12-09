import React from "react";
import Airpods from "./Airpods";
import SpotifyPlaylist from "./Spotify";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import { useLanguage } from "../LanguageContext";
import { useTranslation } from "react-i18next";

const Headphone = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const { t } = useTranslation();
  const { selectedLanguage, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000); // Adjust the breakpoint as needed
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1
        style={{
          fontFamily: "Helvetica",
          color: "white",
          marginTop: "3vh",
          fontSize: "10vh",
          textAlign: "center",
          paddingBottom: "5%",
          paddingTop: "10%",
        }}
      >
        {selectedLanguage === "en" ? t("airpods") : t("airpods", { lng: "kr" })}
      </h1>

      <div className="wrapper">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.4} color="snow" />
          <directionalLight position={[10, 10, 5]} intensity={0.3} />
          <Airpods />
        </Canvas>
      </div>
    </div>
  );
};

export default Headphone;
