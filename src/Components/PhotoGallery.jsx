import React, { useEffect, useRef, useState } from "react";

import library from "../images/library.jpg";
import waterskyline from "../images/waterskyline.jpg";
import tunnel from "../images/tunnel.jpg";
import folkvillage from "../images/folkvillage.jpg";
import hike from "../images/hike.jpg";
import kunkuk from "../images/kunkuk.jpg";
import foodtable from "../images/foodtable.jpg";
import friends from "../images/friends.jpg";
import namsan from "../images/namsan.jpg";
import garden from "../images/garden.jpg";
import osoluk from "../images/osoluk.jpg";
import water from "../images/water.jpg";
import bostonselfie from "../images/bostonselfie.jpg";

const Gallery = () => {
  const trackRef = useRef(null); // Create a ref for the track element

  const handleOnDown = (e) => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = e.clientX;
    }
  };

  const handleOnUp = () => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = "0";
      trackRef.current.dataset.prevPercentage =
        trackRef.current.dataset.percentage;
    }
  };

  const handleOnMove = (e) => {
    if (trackRef.current && trackRef.current.dataset.mouseDownAt === "0") {
      return;
    }

    const mouseDelta =
      parseFloat(trackRef.current.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(trackRef.current.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    trackRef.current.dataset.percentage = nextPercentage;

    trackRef.current.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const images = trackRef.current.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  /* -- Add event listeners using useEffect -- */

  useEffect(() => {
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e) => handleOnDown(e.touches[0]));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e) => handleOnUp(e.touches[0]));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", (e) =>
        handleOnDown(e.touches[0])
      );
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", (e) => handleOnUp(e.touches[0]));
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e) =>
        handleOnMove(e.touches[0])
      );
    };
  }, []); // Empty dependency array to add the event listeners only once

  return (
    <div
      style={{
        display: "flex",
        // backgroundColor: "yellow",
        alignSelf: "center",
        marginTop: "25%",
        // overflowX: "auto", // Enable horizontal scrolling
        maxWidth: "100%", // Prevent the container from extending beyond the screen width
        // justifyContent: "center",
      }}
    >
      <div
        id="image-track"
        ref={trackRef} // Use the ref here to reference the element
        data-mouse-down-at="0"
        data-prev-percentage="0"
      >
        {/* Your image elements */}
        <img className="image" src={library} draggable="false" />
        <img className="image" src={waterskyline} draggable="false" />
        <img className="image" src={foodtable} draggable="false" />
        <img className="image" src={friends} draggable="false" />
        <img className="image" src={osoluk} draggable="false" />
        <img className="image" src={folkvillage} draggable="false" />
        <img className="image" src={tunnel} draggable="false" />
        <img className="image" src={kunkuk} draggable="false" />
        <img className="image" src={hike} draggable="false" />
        <img className="image" src={namsan} draggable="false" />
        <img className="image" src={garden} draggable="false" />
        <img className="image" src={water} draggable="false" />
        <img className="image" src={bostonselfie} draggable="false" />
      </div>
    </div>
  );
};

export default Gallery;
