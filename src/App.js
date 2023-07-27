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
import { useState, useEffect } from "react";

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
  const [isLargeScreen, setIsLargeScreen] = useState(true);

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
    <div id="Main">
      <Header />
      <Home name={siteProps.name} />
      <About />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            flex: 0.5,
            backgroundColor: "black",
            textAlign: "center",
            paddingTop: "5rem",
            paddingBottom: "5rem",
          }}
        >
          <div
            style={{
              width: "85%",
              background:
                "linear-gradient(to bottom, rgba(30, 215, 96, 0.7), rgba(20, 20, 20, 0.5))",
              display: "inline-block",
              paddingBottom: "14vh",
              borderRadius: "30px",
              marginLeft: "5%",
            }}
          >
            <SpotifyPlaylist />
          </div>
        </div>

        <div
          style={{
            flex: 0.5,
            backgroundColor: "black",
            textAlign: "center",
            paddingTop: "5rem",
            paddingBottom: "5rem",
          }}
        >
          <div
            style={{
              width: "85%",
              background:
                "linear-gradient(to bottom, rgb(215, 30, 1490, 0.7), rgba(0, 0, 0, 0.5))",
              display: "inline-block",
              borderRadius: "30px",
              marginRight: "5%",
              paddingBottom: "6vh",
            }}
          >
            <Headphone />
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
