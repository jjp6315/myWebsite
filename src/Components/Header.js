import React from "react";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(23, 23, 23, 0.85)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "2rem",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1,
      }}
    >
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a href="/">Home</a>
        <a href="/AboutPage">About</a>
        <a href="/Portfolio">Portfolio</a>
        <a href="/PhotoGallery">Gallery</a>
      </div>
      <div style={{ paddingRight: "3rem" }}>
        <LanguageToggle />
      </div>
    </div>
  );
};

export default Header;
