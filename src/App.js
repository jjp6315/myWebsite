import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import HomePage from "./Page/Homepage";
import PhotoPage from "./Page/PhotoPage";
import PhotoGallery from "./Components/PhotoGallery";

import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const siteProps = {
  name: "Ji Woong John Park",
  title: "Computer Science Student",
  email: "johnpark0528@gmail.com",
  gitHub: "https://github.com/jjp6315",
  instagram: "https://www.instagram.com/jw_p_17/",
  linkedIn: "https://www.linkedin.com/in/ji-woong-park-7076b51b6/",
};

function App() {
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
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          <Route path="/About" element={<About />} />

          <Route path="/Portfolio" element={<Portfolio />} />

          <Route path="/PhotoGallery" element={<PhotoPage />} />
        </Routes>
      </Router>
      <Footer
        {...siteProps}
        primaryColor={"#000000"}
        secondaryColor={"#000000"}
      />
    </div>
  );
}

export default App;
