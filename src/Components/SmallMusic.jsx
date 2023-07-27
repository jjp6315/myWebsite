import React from "react";
import SpotifyPlaylist from "./Spotify";
import Headphone from "./Headphone";

const SmallMusic = () => {
  return (
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
          flex: 1,
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
          }}
        >
          <SpotifyPlaylist />
        </div>
      </div>
    </div>
  );
};

export default SmallMusic;
