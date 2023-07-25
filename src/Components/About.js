/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */

// const description =
//   "I'm a UI/UX student studying at Barnett Technical University. I enjoy creating unique and simplistic user interfaces in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Student",
  "Computer Science",
  "Athlete",
  "Intern",
  "Reading",
  "Travel",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section
      className="padding"
      id="about"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        height: "90vh",
      }}
    >
      {/* <img className="background" src={image} alt={imageAltText} /> */}
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">
          {" "}
          After 22 years of living, I have witnessed and experienced many things
          in America and South Korea. As I graduate Penn State with a degree in
          Computer Science and a minor in Mathematics, I am looking to start my
          career in the tech industry.
        </p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>
          I am passionate about solving problems in new and creative ways to
          drive innovation. By leveraging my experience, I hope to learn more
          about tech and the world.
        </p>
      </div>
    </section>
  );
};

export default About;

// <section className="hidden">
//   <h2>My Resume</h2>
//   <p> lroesn sldfj asalksdfjaslk;fj salf;ksjd</p>
// </section>
// <section className="hidden">
//   <h2>My life</h2>
//   <p> lroesn sldfj asalksdfjaslk;fj salf;ksjd</p>
// </section>
// <section className="hidden">
//   <h2>My workout</h2>
//   <p> lroesn sldfj asalksdfjaslk;fj salf;ksjd</p>
// </section>
