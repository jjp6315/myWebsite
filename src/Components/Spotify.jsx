import React from "react";

const SpotifyPlaylist = () => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#1DB954",
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
          color: "black",
          marginTop: "3vh",
          fontSize: "6rem",
        }}
      >
        What I listen to
      </h1>
      <div style={{ backgroundColor: "#1DB954", marginTop: "10vh" }}>
        <iframe
          style={{ borderRadius: "30px" }}
          src="https://open.spotify.com/embed/playlist/5C23cvDkDYkSHjPzuJHw3l?utm_source=generator"
          width="500"
          height="650"
          frameBorder="0"
          allowFullScreen="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default SpotifyPlaylist;
