import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import { Cursor, useTypewriter, Typewriter } from "react-simple-typewriter";

import image from "../images/seoulNight.jpg";
import portfolio from "../images/profile.jpg";

const imageAltText = "Korea night view at 남산타워";

const Home = ({ name }) => {
  const [text1] = useTypewriter({
    words: [
      "coding",
      "reading",
      "playing soccer",
      "photography",
      "designing",
      "traveling",
      "creating",
    ],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 70,
  });
  // This is for the different fonts. Only works up to 4 words

  return (
    <section id="home" className="min-height">
      <div
        style={{
          backgroundColor: "black",
          // objectFit: "contain",
          overflow: "hidden",
        }}
      >
        <img className="background" src={image} alt="" />
      </div>

      <div
        style={{
          position: "absolute",
          top: "4rem", // Top position for h1
          left: "2rem", // Left position for h1
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "12vh",
          }}
        >
          Ji Woong John Park
        </h1>
      </div>

      <div
        style={{
          position: "absolute",
          top: "55%", // Center vertically for h2
          left: "50%", // Center horizontally for h2
          transform: "translate(-50%, -50%)", // Center both horizontally and vertically
        }}
      >
        <h2 style={{ fontSize: "5vh", color: "white" }}>
          I enjoy {""}
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
          bottom: "3rem", // Bottom position for the icon
          left: "50%", // Center horizontally for the icon
          transform: "translateX(-50%)", // Center the icon horizontally
        }}
      >
        <a href="#about">
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
          bottom: "10%", // Bottom position for the image
          left: "70%", // Left position for the image
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
            width: "100%",
            height: "100%",
          }}
          src={portfolio}
        />
      </div>
    </section>
  );
};

export default Home;

// const [text1] = useTypewriter({
//   words: ["coding", "", "", ""],
//   loop: true,
//   deleteSpeed: 0,
//   typeSpeed: 100,
//   delaySpeed: 2500,
// });
// const [text2] = useTypewriter({
//   words: ["", "reading", "", ""],
//   loop: true,
//   deleteSpeed: 0,
//   typeSpeed: 100,
//   delaySpeed: 2500,
// });
// const [text3] = useTypewriter({
//   words: ["", "", "playing soccer", ""],
//   loop: true,
//   deleteSpeed: 0,
//   typeSpeed: 100,
//   delaySpeed: 2500,
// });
// const [text4] = useTypewriter({
//   words: ["", "", "", "traveling"],
//   loop: true,
//   deleteSpeed: 0,
//   typeSpeed: 100,
//   delaySpeed: 2500,
// });

{
  /* <div
  style={{
    flexDirection: "row",
    display: "flex",
    alignContent: "center",
  }}
>
  <h2
    style={{
      fontSize: 50,
      color: "white",
      paddingRight: "2%",
      paddingTop: "4%",
      fontFamily: "Helvetica",
    }}
  >
    I enjoy
  </h2>
  <h2
    style={{
      fontSize: 50,
      color: "white",
      fontFamily: "Courier New",
      paddingTop: "4%",
    }}
  >
    {text1}
  </h2>
  <h2
    style={{
      fontSize: 50,
      color: "white",
      fontFamily: "Brush Script MT",
      paddingTop: "4%",
    }}
  >
    {text2}
  </h2>
  <h2
    style={{
      fontSize: 50,
      color: "white",
      fontFamily: "Gill Sans",
      paddingTop: "3.6%",
    }}
  >
    {text3}
  </h2>
  <h2
    style={{
      fontSize: 50,
      color: "white",
      fontFamily: "impact",
      paddingTop: "4%",
    }}
  >
    {text4}
  </h2>

  <h2
    style={{
      fontSize: 45,
      color: "white",
      paddingRight: "2%",
      paddingTop: "4%",
    }}
  >
    <Cursor cursorStyle="|" cursorColor="white" />
  </h2>
</div> */
}
