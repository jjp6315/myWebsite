import React from "react";
import Airpods from "./Airpods";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLanguage } from "../LanguageContext";
import { useTranslation } from "react-i18next";

const Headphone = () => {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();

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
        {t("airpods", { lng: selectedLanguage })}
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
