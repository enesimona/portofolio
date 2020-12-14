import React, { useState } from "react";
import "../styles/projects.css";
import capture from "../images/capture.png";
import babyloo from "../images/babyloo1.png";
import firegram from "../images/firegram1.png";
import musicplayer from "../images/music-player1.png";
import paradox from "../images/paradox1.png";
import vidly from "../images/vidly1.png";
import ignite from "../images/ignite1.png";

const Projects = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container">
      <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">
        My Projects
      </h1>

      <hr className="mt-2 mb-5" />

      <div className="row text-center text-lg-left">
        <div
          className=" col-md-4 col-md-6"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <a
            href="https://enesimona.github.io/capture/"
            className="d-block mb-4 h-100"
            target="_blank"
          >
            <img className="img-fluid img-thumbnail" src={capture} alt="" />
            {/* {isShown && <h4>Capture</h4>} */}
          </a>
        </div>

        <div
          className=" col-md-4 col-md-6"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <a
            href="https://enesimona.github.io/ignite/"
            className="d-block mb-4 h-100"
            target="_blank"
          >
            <img className="img-fluid img-thumbnail" src={ignite} alt="" />
            {/* {isShown && <h4>Capture</h4>} */}
          </a>
        </div>

        <div className=" col-md-4 col-md-6">
          <a
            href="https://enesimona.github.io/wave/"
            className="d-block mb-4 h-100"
            target="_blank"
          >
            <img className="img-fluid img-thumbnail" src={musicplayer} alt="" />
          </a>
        </div>

        <div className=" col-md-4 col-md-6">
          <a
            href="https://babyloo.ro/"
            className="d-block mb-4 h-100"
            target="_blank"
          >
            <img className="img-fluid img-thumbnail" src={babyloo} alt="" />
          </a>
        </div>
        <div className=" col-md-4 col-md-6">
          <a
            href="https://enesimona.github.io/firegram/"
            className="d-block mb-4 h-100"
            target="_blank"
          >
            <img className="img-fluid img-thumbnail" src={firegram} alt="" />
          </a>
        </div>

        <div className=" col-md-4 col-md-6">
          <a
            href="https://paradoxeforie.ro/"
            className="d-block mb-4 h-100"
            target="_blank"
          >
            <img className="img-fluid img-thumbnail" src={paradox} alt="" />
          </a>
        </div>

        <div className=" col-md-4 col-md-6">
          <a
            href="https://enesimona.github.io/vidly/"
            className="d-block mb-4 h-100"
            target="_blank"
          >
            <img className="img-fluid img-thumbnail" src={vidly} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
