import React from "react";
import ProgressBar from "react-customizable-progressbar";
import { motion } from "framer-motion";
import "../styles/skills.css";

const Skills = () => {
  const variants = {
    hidden: { width: "0%" },
    show: {
      width: "100%",
      transition: { duration: 1 },
    },
  };

  return (
    <div className="skills">
      <h1>My Skills</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Frontend Development</h3>

            <div className="skill">
              <p>HTML5</p>
              <div className="progress">
                <motion.div
                  variants={variants}
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80% Complete</span>
                </motion.div>
              </div>
            </div>

            <div className="skill">
              <p>CSS3/Sass</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                >
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              {" "}
              <p>JavaScript ES6</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                >
                  <span className="sr-only">70% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              {" "}
              <p>React js</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              {" "}
              <p>AngularJS</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                >
                  <span className="sr-only">70% Complete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Server Side Development</h3>

            <div className="skill">
              <p>Node.js/Express</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                >
                  <span className="sr-only">70% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <p>Java</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              {" "}
              <p>Python</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                >
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md-6">
            <h3>Web development tools</h3>

            <div className="skill">
              <p>Git</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              <p>Webpack/Gulp/Babel/Grunt</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "60%" }}
                >
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3>E-commerce & Digital marketing</h3>

            <div className="skill">
              <p>Facebook/Instagram Ads/ Google Ads</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              {" "}
              <p>Google Analytics</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "70%" }}
                >
                  <span className="sr-only">70% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              {" "}
              <p>SEO</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </div>

            <div className="skill">
              {" "}
              <p>Photoshop</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                >
                  <span className="sr-only">80% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
