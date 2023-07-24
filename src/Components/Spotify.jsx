import React from "react";

const SpotifyPlaylist = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>My Favorite Music</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
          alignSelf: "center",
        }}
      >
        <div
          className="container"
          style={{ backgroundColor: "white", alignSelf: "center" }}
        >
          <iframe
            style={{ borderRadius: "30px" }}
            src="https://open.spotify.com/embed/playlist/5C23cvDkDYkSHjPzuJHw3l?utm_source=generator"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SpotifyPlaylist;
