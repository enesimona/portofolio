import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <div className="nav-links">
      <ul>
        <div className="noSelect">
          <Link to="/">
            <li className="menu-item">About me</li>
            <motion.div
              className="nav-line"
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "70%" : "0%" }}
            ></motion.div>
          </Link>
        </div>
        <Link to="/projects">
          <li>Projects</li>
          <motion.div
            className="nav-line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/projects" ? "70%" : "0%" }}
          ></motion.div>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
          <motion.div
            className="nav-line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "70%" : "0%" }}
          ></motion.div>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
