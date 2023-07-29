import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center", // Center the links on mobile screens
        alignItems: "center", // Center the links vertically on mobile screens
        gap: "2rem",
        background: "rgba(23, 23, 23, 0.85)",
        paddingTop: "1rem",
        paddingBottom: "1rem",

        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1,
        // top: 0,
        // width: "100%",
        // zIndex: 10,
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
