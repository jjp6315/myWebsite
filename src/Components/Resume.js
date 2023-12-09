import React from "react";
import PDF from "../PDF/JiWoongParkResume.pdf";

const Resume = () => {
  return (
    <div>
      <a href={PDF} without rel="noopener noreferrer" target="_blank">
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            textDecoration: "underline",
          }}
        >
          View my Resume in New Tab
        </div>
      </a>
    </div>
  );
};

export default Resume;