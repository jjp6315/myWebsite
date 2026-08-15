import React from "react";
import Home from "../Components/Home";
import Music from "../Components/Music";
import SmallMusic from "../Components/SmallMusic";
import useMediaQuery from "../hooks/useMediaQuery";

const Homepage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <div id="Main">
      <Home />
      {isSmallScreen ? <SmallMusic /> : <Music />}
    </div>
  );
};

export default Homepage;
