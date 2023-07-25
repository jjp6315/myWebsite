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
      {/* <div className="rowc"> */}
      <SpotifyPlaylist />
      <Wrapper>
        {/* <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Box />
          </Canvas>
          <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Circle />
        </Canvas> */}
        {/* <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Iphone />
        </Canvas> */}
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.4} color="white" />
          <directionalLight position={[10, 10, 5]} intensity={0.3} />
          <Airpods />
        </Canvas>
      </Wrapper>
      {/* </div> */}
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

const Wrapper = styled.div`
  position: relative;
  background-color: #282c34;
  height: 60vh;
  width: 50vh;
`;
