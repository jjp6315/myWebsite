/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/selfie.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "DevPSU Learning Terminal Website",
    description:
      "Try out my terminal website to learn more about me! Developed in conjunction with Jude, Brian, Alex, and Me.",
    url: "https://jjp6315.github.io/",
  },
  {
    title: "Recishop",
    description:
      "A shopping list builder that helps people make shopping lists from custom recipes.",
    url: "https://github.com/Recishop/Recishop",
  },
  {
    title: "Twitter Clone App",
    description:
      "Built Twitter clone through CodePath's Android University. Used Parse as backend.",
    url: "https://github.com/jjp6315/SimpleTweet",
  },
  {
    title: "Designed Discord welcome page for Nittany Data Labs",
    description: "Used wordpress to develope website.",
    url: "https://ndl.psu.edu/homepage-2/discord/",
  },
];

const Portfolio = () => {
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #544a7d, #ffd452)",
        paddingTop: "4rem",
        paddingBottom: "3rem",
      }}
      id="portfolio"
    >
      <h2
        style={{ textAlign: "center", fontFamily: "cursive", fontSize: "2rem" }}
      >
        Portfolio
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
        }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            // display: "flex",
            // flexDirection: "row",
            display: "grid",

            margin: "20px auto",
          }}
        >
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
