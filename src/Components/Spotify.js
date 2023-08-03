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
            fontSize: "10vh",
            textAlign: "center",
            paddingBottom: "10%",
            paddingTop: "10%",
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
        src="https://open.spotify.com/embed/playlist/31WLmvzYHieK21tk2jbk2u?utm_source=generator"
        width="70%"
        height="550"
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;