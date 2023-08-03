import React from "react";
import image from "../images/bostonNight.jpg";

const imageAltText = "purple and blue abstract background";

const skillsList = [
  "Student",
  "Computer",
  "Athlete",
  "Intern",
  "Reading",
  "Travel",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section
      className="padding"
      id="about"
      style={{
        minHeight: "90vh",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        className="background"
        src={image}
        alt={imageAltText}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      <div
        style={{
          backgroundColor: "white",

          padding: "2rem",
          margin: "3rem auto",
          textAlign: "center",
          flex: 1,
          flexDirection: "column",
          maxWidth: "70vw",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">
          After 22 years of living, I have witnessed and experienced many things
          in America and South Korea. As I graduate Penn State with a degree in
          Computer Science and a minor in Mathematics, I am looking to start my
          career in the tech industry.
        </p>
        <hr />
        <ul
          style={{
            columns: 2,
            fontSize: "1.25rem",
            width: "70%",
            flex: 1,
            textAlign: "center",
            flexDirection: "column",
            marginLeft: "auto",
          }}
        >
          {skillsList.map((skill) => (
            <li
              style={{
                textAlign: "start",
                columns: 2,
                fontSize: "1.25rem",
              }}
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
