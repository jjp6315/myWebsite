import React from "react";
import Airpods from "./Airpods";
import SpotifyPlaylist from "./Spotify";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";

const Headphone = () => {
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
    <div
      style={{
        //   flex: 1,
        // background:
        //   "linear-gradient(to bottom, rgba(30, 215, 96, 0.7), rgba(20, 20, 20, 0.5))",
        //   display: "flex",
        //   flexDirection: "column",

        justifySelf: "center",
        //   width: "50vw",
        //   borderRadius: "30px",
      }}
    >
      <h1
        style={{
          fontFamily: "Helvetica",
          color: "white",
          marginTop: "3vh",
          fontSize: "10vh",
          textAlign: "center", // Center the text on mobile
          paddingBottom: "5%",
          paddingTop: "10%",
        }}
      >
        With Me
      </h1>

      {isLargeScreen ? (
        <div
          className="wrapper"
          style={
            {
              // backgroundColor:
              //   "linear-gradient(to bottom, rgba(30, 215, 96, 0.7), rgba(20, 20, 20, 0.5))",
              // backgroundColor: "black",
              // marginTop: "6vh",
              // marginBottom: "3vh",
            }
          }
        >
          <Canvas className="canvas">
            {/* Add the contents of the Canvas here */}
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.4} color="snow" />
            <directionalLight position={[10, 10, 5]} intensity={0.3} />
            <Airpods />
          </Canvas>
        </div>
      ) : (
        <h1>This</h1>
      )}
    </div>
  );
};

export default Headphone;
