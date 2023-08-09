import React from "react";
import LanguageToggle from "./LanguageToggle";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        background: "rgba(23, 23, 23, 0.85)",
        paddingTop: "1rem",
        paddingBottom: "1rem",

        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1,
      }}
    >
      <a href="/">Home</a>
      <a href="/AboutPage">About</a>
      <a href="/Portfolio">Portfolio</a>
      <a href="/PhotoGallery">Gallery</a>
      <LanguageToggle />
    </div>
  );
};

export default Header;
