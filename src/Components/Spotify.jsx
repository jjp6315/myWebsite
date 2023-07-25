import React from "react";

const SpotifyPlaylist = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <iframe
        style={{ borderRadius: "30px" }}
        src="https://open.spotify.com/embed/playlist/5C23cvDkDYkSHjPzuJHw3l?utm_source=generator"
        width="100%"
        height="650"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;
