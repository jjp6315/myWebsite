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
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "black",
        }}
      >
        <div style={{ display: "flex" }}>
          <SpotifyPlaylist />
          <Headphone />
        </div>
      </div>
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

{
  /* <div className="wrapper" style={{ backgroundColor: "black" }}>
  <Canvas className="canvas">
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={0.4} color="silver" />
    <directionalLight position={[10, 10, 5]} intensity={0.3} />
    <Airpods />
  </Canvas>
</div> */
}
