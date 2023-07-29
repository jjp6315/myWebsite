import React from "react";
import { Link } from "react-router-dom";

const NewPage = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Navigate to new page?</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <a href="/"> Home </a>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <a href="/about"> About </a>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <a href="/footer"> Footer </a>
        </li>
      </ul>
    </div>
  );
};

export default NewPage;
