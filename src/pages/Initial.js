import React from "react";
import "../styles/initial.css";
import profile from "../images/profile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Initial = () => {
  const handleResume = (e) => {
    e.preventDefault();
    console.log("Download resume");
  };
  return (
    <motion.div className="initial">
      <div className="wrapper">
        <motion.div
          className="container-initial"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            staggerChildren: 0.25,
            when: "beforeChildren",
          }}
        >
          <img className="img-profile" src={profile} alt="" />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
          >
            Hi, I'm Simona Ene.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
          >
            I'm a frontend developer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
          >
            I am an ambitious and hardworking individual, with broad skills and
            experience in software development, online and e-commerce. As you'll
            see in my CV, I have a year of experience in frontend development
            using HTML5, CSS3, JavaScript ES6, AngularJS, Git, webpack, Babel,
            Sass, npm and a year of experience in e-commerce and digital
            marketing. I am passionate about tech and new technologies and I try
            to stay up-to-date on industry trends. My last projects are
            developed with React and Firebase.
          </motion.p>
          {/* <motion.button
            id="login-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.5,
            }}
            onClick={handleResume}
          >
            Download My Resume
          </motion.button> */}

          <Link id="resume" to="/files/resume.pdf" target="_blank" download>
            Download My Resume
          </Link>
        </motion.div>
        <ul className="bg-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Initial;
