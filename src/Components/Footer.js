import React from "react";
import PropTypes from "prop-types";

import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";

const Footer = (props) => {
  const { email, gitHub, linkedIn, instagram, name, primaryColor } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        paddingTop: "3rem",
        paddingBottom: "2rem",
        backgroundColor: primaryColor,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          width: "100%",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a href={`${instagram}`} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a href={`${linkedIn}`} target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
};

export default Footer;
