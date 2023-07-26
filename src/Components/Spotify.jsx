import React from "react";

const SpotifyPlaylist = () => {
  return (
    <div>
      <div>
        <h1
          style={{
            fontFamily: "Helvetica",
            color: "#171717",

            marginTop: "3vh",
            fontSize: "10vh", // Adjusted font size for mobile
            textAlign: "center", // Center the text on mobile
            paddingBottom: "10%",
            paddingTop: "10%",

            // flex: 1,
          }}
        >
          Listen Along
        </h1>
      </div>

      <iframe
        style={{
          borderRadius: "30px",
          alignContent: "center",
          position: "relative",
          justifyContent: "center",
          backgroundColor: "black",
        }}
        src="https://open.spotify.com/embed/playlist/5sfpQz64WjCDr09StvRjHr?utm_source=generator"
        width="70%"
        height="550"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
