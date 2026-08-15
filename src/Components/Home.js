import React, { Suspense } from "react";
import arrowSvg from "../images/down-arrow.svg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useLanguage } from "../LanguageContext";

import image from "../images/seoulNight.jpg";
import portfolio from "../images/Profile1.jpg";
import { useTranslation } from "react-i18next";

const imageAltText = "Korea night view at 남산타워";

const Home = () => {
  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();

  const [text1] = useTypewriter({
    words: [
      "coding",
      "reading",
      "soccer",
      "photography",
      "designing",
      "traveling",
      "creativity",
    ],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 70,
  });
  // This is for the different fonts. Only works up to 4 words

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section id="home" className="min-height">
        <div
          style={{
            backgroundColor: "black",
            objectFit: "cover",
          }}
        >
          <img className="background" src={image} alt={imageAltText} />
        </div>

        <div
          style={{
            position: "absolute",
            top: "6rem",
            left: "2rem",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "7vw",
            }}
          >
            {t("welcome", { lng: selectedLanguage })}
          </h1>
        </div>

        <div
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "5vh", color: "white", textAlign: "center" }}>
            I enjoy{" "}
          </h2>
          <h2 style={{ fontSize: "5vh", color: "white", paddingLeft: "2rem" }}>
            {text1}
            <Cursor cursorStyle="_" cursorColor="white" />
          </h2>
        </div>

        {/* This is for the different fonts. Only works up to 4 words */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "absolute",
            bottom: "1rem", // Bottom position for the icon
            left: "50%", // Center horizontally for the icon
            transform: "translateX(-50%)", // Center the icon horizontally
          }}
        >
          <a href="#music">
            <img
              src={arrowSvg}
              style={{ height: "3rem", width: "3rem" }}
              alt={imageAltText}
            />
          </a>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "10vh", // Bottom position for the image
            right: "5%", // Left position for the image

            borderRadius: "50%",
            border: "1px solid ivory",
            width: "20vw", // Using vw for responsive width
            height: "20vw", // Using vw for responsive height
          }}
        >
          <img
            className="profile"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              width: "20vw",
              height: "20vw",
            }}
            src={portfolio}
            alt="Ji Woong John Park"
          />
        </div>
      </section>
    </Suspense>
  );
};

export default Home;
