import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Music from "./Components/Music";
import SmallMusic from "./Components/SmallMusic";
import NewPage from "./Components/NewPageButton";

import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

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
      <Header />
      <About />
      <Router>
        <Routes>
          {/* This route is for home component
          with exact path "/", in component props
        we passes the imported component*/}
          <Route exact path="" element={<Home />} />
          {/* This route is for about component
          with exact path "/about", in component
        props we passes the imported component*/}
          <Route path="/about" element={<About />} />
          {/* This route is for contactus component
          with exact path "/contactus", in
        component props we passes the imported component*/}
          <Route path="/footer" element={<Footer />} />
          {/* If any route mismatches the upper
          route endpoints then, redirect triggers
        and redirects app to home component with to="/" */}
        </Routes>
      </Router>
      <Home name={siteProps.name} />
      {isLargeScreen ? (
        <div>
          <SmallMusic />
        </div>
      ) : (
        <Music />
      )}
      <Portfolio />
      <Footer
        {...siteProps}
        primaryColor={"#4c9365"}
        secondaryColor={"#D2F1E4"}
      />
    </div>
  );
};

export default App;
