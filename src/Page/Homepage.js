import React from "react";
import { useState, useEffect } from "react";
import Home from "../Components/Home";
import Music from "../Components/Music";
import SmallMusic from "../Components/SmallMusic";

const siteProps = {
  name: "Ji Woong John Park",
  title: "Computer Science Student",
  email: "johnpark0528@gmail.com",
  gitHub: "https://github.com/jjp6315",
  instagram: "https://www.instagram.com/jw_p_17/",
  linkedIn: "https://www.linkedin.com/in/ji-woong-park-7076b51b6/",
  medium: "",
};

const Homepage = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(() => {
    // Get the stored value from local storage, default to true if not found
    const storedValue = localStorage.getItem("isLargeScreen");
    return storedValue === "false" ? false : true;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth <= 900); // Adjust the breakpoint as needed
    };
    handleResize();
    // Add event listener to window resize
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Save the value to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("isLargeScreen", isLargeScreen);
  }, [isLargeScreen]);

  return (
    <div id="Main">
      <Home name={siteProps.name} />
      {isLargeScreen ? (
        <div>
          <SmallMusic />
        </div>
      ) : (
        <Music />
      )}
    </div>
  );
};

export default Homepage;