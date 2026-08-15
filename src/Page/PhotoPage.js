import React from "react";
import SmallPhotoGallery from "../Components/SmallPhotoGallery";
import PhotoGallery from "../Components/PhotoGallery";
import useMediaQuery from "../hooks/useMediaQuery";

const PhotoPage = () => {
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <div id="Photo">
      {isSmallScreen ? <SmallPhotoGallery /> : <PhotoGallery />}
    </div>
  );
};

export default PhotoPage;
