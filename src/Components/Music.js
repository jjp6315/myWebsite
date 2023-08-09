import React from "react";
import SpotifyPlaylist from "./Spotify";
import Headphone from "./Headphone";

const Music = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "black",
        flex: 1,
        display: "flex",
      }}
      id="music"
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
            width: "80%",
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
            width: "80%",
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
  );
};

export default Music;
