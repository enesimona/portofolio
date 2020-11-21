import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
        Contact
      </h1>
      <hr className="mt-2 mb-5" />
      <div className="infos">
        <div>
          <FontAwesomeIcon
            className="info"
            size="2x"
            icon={faPhone}
          ></FontAwesomeIcon>
          <span>0732878462</span>
        </div>
        <div>
          <FontAwesomeIcon
            className="info"
            size="2x"
            icon={faEnvelope}
          ></FontAwesomeIcon>
          <span>enesimonam@gmail.com</span>
        </div>
        <div>
          <FontAwesomeIcon
            className="info"
            size="2x"
            icon={faLinkedin}
          ></FontAwesomeIcon>
          <a
            href="https://www.linkedin.com/in/simonamonalisaene"
            target="_blank"
          >
            LinkedIn profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
