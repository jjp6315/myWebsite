import React from "react";
import { useState, useEffect } from "react";
import SmallPhotoGallery from "../Components/SmallPhotoGallery";
import PhotoGallery from "../Components/PhotoGallery";

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
    <div id="Photo">
      {isLargeScreen ? (
        <div>
          <SmallPhotoGallery />
        </div>
      ) : (
        <PhotoGallery />
      )}
    </div>
  );
};

export default Homepage;
