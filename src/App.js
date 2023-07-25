// Date: 9/4/2021
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
      <section
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-around",
          paddingBottom: "30vh",
        }}
      >
        <div
          style={{
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              color: "white",
              paddingTop: "10vh",
              paddingBottom: "15vh",
              fontFamily: "San Francisco",
              fontStyle: "normal",
              fontSize: "4vh",
            }}
          >
            Listen to My Favorite Music
          </h2>
          <SpotifyPlaylist />
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              color: "white",
              paddingTop: "14vh",
              paddingBottom: "15vh",
              fontFamily: "San Francisco",
              fontStyle: "normal",
              fontSize: "4vh",
            }}
          >
            What I listen with{" "}
          </h2>
          <div className="wrapper" style={{ backgroundColor: "black" }}>
            <Canvas className="canvas">
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.4} color="silver" />
              <directionalLight position={[10, 10, 5]} intensity={0.3} />
              <Airpods />
            </Canvas>
          </div>
        </div>
      </section>
      <Portfolio />

      <Footer
        {...siteProps}
        primaryColor={"#4E567E"}
        secondaryColor={"#D2F1E4"}
      />
    </div>
  );
}

export default App;

//
