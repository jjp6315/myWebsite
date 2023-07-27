import React from "react";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Music from "./Components/Music";
import SmallMusic from "./Components/SmallMusic";

import "./index.css";

const siteProps = {
  name: "Ji Woong John Park",
  title: "Computer Science Student",
  email: "johnpark0528@gmail.com",
  gitHub: "https://github.com/jjp6315",
  instagram: "https://www.instagram.com/jw_p_17/",
  linkedIn: "https://www.linkedin.com/in/ji-woong-park-7076b51b6/",
  medium: "",
};

function App() {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1000); // Adjust the breakpoint as needed
    };

    // Add event listener to window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div id="Main">
      <Header />
      <Home name={siteProps.name} />
      <About />

      {isLargeScreen ? <Music /> : <SmallMusic />}

      <Portfolio />

      <Footer
        {...siteProps}
        primaryColor={"#4c9365"}
        secondaryColor={"#D2F1E4"}
      />
    </div>
  );
}

export default App;
