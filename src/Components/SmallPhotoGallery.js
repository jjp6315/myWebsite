import React from "react";

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

const SmallPhotoGallery = () => {
  return (
    <div
      style={{
        overflowY: "auto", // Enable vertical scrolling on phone screen
        height: "100vh", // Ensure the gallery takes the full viewport height
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Align images vertically
          alignItems: "center",
          justifyContent: "center",
          padding: "20px", // Add spacing around each image
        }}
      >
        {/* Your image elements */}
        <img
          className="image"
          src={library}
          draggable="false"
          alt="Library"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={waterskyline}
          draggable="false"
          alt="Waterskyline"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={foodtable}
          draggable="false"
          alt="Foodtable"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={friends}
          draggable="false"
          alt="Friends"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={osoluk}
          draggable="false"
          alt="Osoluk"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={folkvillage}
          draggable="false"
          alt="Folkvillage"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={tunnel}
          draggable="false"
          alt="Tunnel"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={kunkuk}
          draggable="false"
          alt="Kunkuk"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={hike}
          draggable="false"
          alt="Hike"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={namsan}
          draggable="false"
          alt="Namsan"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={garden}
          draggable="false"
          alt="Garden"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={water}
          draggable="false"
          alt="Water"
          style={{ maxWidth: "100%" }}
        />
        <img
          className="image"
          src={bostonselfie}
          draggable="false"
          alt="Bostonselfie"
          style={{ maxWidth: "100%" }}
        />
        {/* ... other image elements ... */}
      </div>
    </div>
  );
};

export default SmallPhotoGallery;