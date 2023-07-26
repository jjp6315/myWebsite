/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import { Cursor, useTypewriter, Typewriter } from "react-simple-typewriter";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
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

  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />

      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "2rem",
          width: "50rem",
        }}
      >
        <h1
          style={{
            fontSize: 100,
            color: "white",
            flex: "1",
            display: "flex",
          }}
        >
          Ji Woong John Park
        </h1>
        <h2 style={{ fontSize: 50, color: "white" }}>
          I enjoy {""}
          {text1}
          <Cursor cursorStyle="_" cursorColor="white" />
        </h2>

        {/* This is for the different fonts. Only works up to 4 words */}
        {/* <div
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
        </div> */}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
        }}
      >
        <a href="#about">
          <img
            src={arrowSvg}
            style={{ height: "3rem", width: "3rem" }}
            alt={imageAltText}
          />
        </a>
        {/* <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} /> */}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "70%",
          borderRadius: "50%",
          border: "1px solid ivory",
          width: "300px",
          height: "300px",
        }}
      >
        <img
          className="profile"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            width: "300px",
            height: "300px",
          }}
          src={portfolio}
        />
      </div>
    </section>
  );
};

// Home.defaultProps = {
//   name: "",
//   title: "",
// };

Home.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Home;
