import React from "react";
import Airpods from "./Airpods";
import SpotifyPlaylist from "./Spotify";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Headphone = () => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50vw",
        height: "100vh",
      }}
    >
      <h1
        style={{
          fontFamily: "Helvetica",
          color: "white",
          marginTop: "3vh",
          fontSize: "6rem",
        }}
      >
        What I listen with
      </h1>
      <div
        className="wrapper"
        style={{ backgroundColor: "black", marginTop: "10vh" }}
      >
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
