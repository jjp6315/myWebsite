import React from "react";
import image from "../images/bostonNight.jpg";
import { useLanguage } from "../LanguageContext";
import { useTranslation } from "react-i18next";

const imageAltText = "purple and blue abstract background";

const skillsList = [
  "Student",
  "Math",
  "Computer Science",
  "Soccer",
  "Reading",
  "In Boston",
];


const About = () => {
  const { t } = useTranslation();
  const { selectedLanguage, toggleLanguage } = useLanguage();

  return (
    <section
      className="padding"
      id="about"
      style={{
        minHeight: "90vh",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <div
        style={{
          backgroundColor: "white",

          padding: "2rem",
          margin: "3rem auto",
          textAlign: "center",
          flex: 1,
          flexDirection: "column",
          maxWidth: "70vw",
        }}
      >
        <h2>{selectedLanguage === "en"
            ? t("aboutMe")
            : t("aboutMe", { lng: "kr" })}</h2>
        <p className="large">
          {selectedLanguage === "en"
            ? t("aboutbio")
            : t("aboutbio", { lng: "kr" })}
        </p>
        <hr />
        <ul
          style={{
            columns: 2,
            fontSize: "1.25rem",
            width: "70%",
            flex: 1,
            textAlign: "center",
            flexDirection: "column",
            marginLeft: "auto",
          }}
        >
          {skillsList.map((skill) => (
            <li
              style={{
                textAlign: "start",
                columns: 2,
                fontSize: "1.25rem",
              }}
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "0rem 3rem 0" }}>
          {" "}
          {selectedLanguage === "en"
            ? t("aboutbio2")
            : t("aboutbio2", { lng: "kr" })}
        </p>
      </div>
    </section>
  );
};

export default About;