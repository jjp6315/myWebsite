import React, { useRef } from "react";
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
  const trackRef = useRef(null);

  const handleOnDown = (event) => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = event.clientX;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handleOnUp = () => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = "0";
      trackRef.current.dataset.prevPercentage =
        trackRef.current.dataset.percentage;
    }
  };

  const handleOnMove = (event) => {
    const track = trackRef.current;
    if (!track || track.dataset.mouseDownAt === "0") {
      return;
    }

    const mouseDelta =
      parseFloat(track.dataset.mouseDownAt) - event.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage || "0") + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const images = track.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        marginTop: "30%",
      }}
    >
      <div
        id="image-track"
        ref={trackRef}
        data-mouse-down-at="0"
        data-prev-percentage="0"
        data-percentage="0"
        onPointerDown={handleOnDown}
        onPointerMove={handleOnMove}
        onPointerUp={handleOnUp}
        onPointerCancel={handleOnUp}
      >
        {/* Your image elements */}
        {[
          [library, "Library interior"],
          [waterskyline, "Skyline across the water"],
          [foodtable, "Food arranged on a table"],
          [friends, "Friends together"],
          [osoluk, "O'Sulloc tea fields"],
          [folkvillage, "Korean folk village"],
          [tunnel, "Illuminated tunnel"],
          [kunkuk, "Konkuk University"],
          [hike, "Mountain hike"],
          [namsan, "Namsan Tower"],
          [garden, "Garden"],
          [water, "Water landscape"],
          [bostonselfie, "Selfie in Boston"],
        ].map(([src, alt]) => (
          <img key={src} className="image" src={src} alt={alt} draggable="false" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
