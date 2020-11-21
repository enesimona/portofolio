import React from "react";
import profile from "../images/profile.jpg";
import "../styles/introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <img src={profile} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        cumque esse, quis consequatur vitae tempore harum dolore odit non totam
        nulla enim repudiandae tempora? Accusantium magnam saepe delectus eum
        officiis.
      </p>
    </div>
  );
};

export default Introduction;
