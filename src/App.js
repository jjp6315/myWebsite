import React from "react";
import Box from "./Components/Box";
import Circle from "./Components/Circle";
import styled from "styled-components";
import Iphone from "./Components/Iphone";
import Airpods from "./Components/Airpods";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import SpotifyPlaylist from "./Components/Spotify";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Headphone from "./Components/Headphone";

import "./index.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const siteProps = {
  name: "Ji Woong John Park",
  title: "Computer Science Student",
  email: "johnpark0528@gmail.com",
  gitHub: "https://github.com/jjp6315",
  instagram: "https://www.instagram.com/jw_p_17/",
  linkedIn: "https://www.linkedin.com/in/ji-woong-park-7076b51b6/",
  medium: "",
};

function App() {
  return (
    <div id="Main">
      <Header />
      <Home name={siteProps.name} />
      <About />

      <div
        style={{
          display: "flex",
          flexDirection: "row", // Display components in a row on larger screens
          backgroundColor: "black",
          paddingBottom: "5rem",
          // justifyContent: "center",
        }}
      >
        <div
          style={{
            flex: 0.5, // Allow the components to share available space evenly
            // minWidth: "50%", // Set a minimum width to prevent components from taking less than 50% of the viewport width on large screens
            // display: "flex",
            backgroundColor: "black",
            textAlign: "center",
            paddingTop: "5rem",
            paddingBottom: "5rem",

            // width: "40%",
            // boxShadow: "0 0 1px 1px white",
          }}
        >
          <div
            style={{
              // flex: 0.45, // Allow the components to share available space evenly
              // minWidth: "50%", // Set a minimum width to prevent components from taking less than 50% of the viewport width on large screens
              width: "85%",
              background:
                "linear-gradient(to bottom, rgba(30, 215, 96, 0.7), rgba(20, 20, 20, 0.5))",
              display: "inline-block",
              paddingBottom: "14vh",
              borderRadius: "30px",
              marginLeft: "5%",

              // boxShadow: "5px 5px 5px darkgreen",
            }}
          >
            <SpotifyPlaylist />
            {/* <h1>this</h1> */}
          </div>
        </div>

        <div
          style={{
            flex: 0.5, // Allow the components to share available space evenly
            // minWidth: "50%", // Set a minimum width to prevent components from taking less than 50% of the viewport width on large screens
            // display: "flex",
            backgroundColor: "black",
            textAlign: "center",
            // marginRight: "10%",
            paddingTop: "5rem",

            paddingBottom: "5rem",
            // boxShadow: "0 0 1px 1px white",
          }}
        >
          <div
            style={{
              // flex: 0.55, // Allow the components to share available space evenly
              // minWidth: "50%", // Set a minimum width to prevent components from taking less than 50% of the viewport width on large screens
              // display: "flex",
              width: "85%",
              background:
                "linear-gradient(to bottom, rgb(215, 30, 1490, 0.7), rgba(0, 0, 0, 0.5))",
              // backgroundColor: "yellow",
              display: "inline-block",
              borderRadius: "30px",
              marginRight: "5%",
              // boxShadow: "0 0 1px 1px white",
              paddingBottom: "6vh",
            }}
          >
            <Headphone />
            {/* <h1>that</h1> */}
          </div>
        </div>
      </div>

      <Portfolio />

      <Footer
        {...siteProps}
        primaryColor={"#4c9365"}
        secondaryColor={"#D2F1E4"}
      />
    </div>
  );
}

export default App;
