import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
const Gallery = () => {
  return (
    <ParallaxProvider>
      <div className="container-body">
        <ParallaxBanner
          layers={[
            { image: "/images/bostonNight.jpg", speed: -20 },
            {
              speed: -15,
              children: (
                <div className="">
                  <h1 className="text">Hello World!</h1>
                </div>
              ),
            },
            { image: "/images/mountain.png", speed: -10 },
          ]}
          className="bg-container"
        >
          <div className="bg-container">
            <h1 className="">Hello World!</h1>
          </div>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
};
export default Gallery;
