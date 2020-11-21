import React from "react";
import Toggle from "./Toggle";
import "../styles/courses.css";

const Courses = () => {
  return (
    <div className="courses">
      <h1>Last Courses</h1>
      <Toggle title="The Creative React and Redux Course">
        <div className="answer">
          <a
            href="https://developedbyed.com/p/the-creative-react-and-redux-course/"
            target="_blank"
          >
            The Creative React and Redux Course by Dev Ed
          </a>
          <p>
            Topics: React, React Router, Styled Components, Framer Motion,
            Intersection Observer, React Hooks, Axios, Redux, Thunk
          </p>
        </div>
      </Toggle>
      <Toggle title="Mastering React">
        <div className="answer">
          <a href="https://codewithmosh.com/p/mastering-react" target="_blank">
            Mastering React by Code with Mosh
          </a>
          <p>
            Topics: ES6, React Components, Lifecycle hooks, Pagination,
            Filtering, Sorting, Routing, Forms, Joi validation, Calling Backend
            Services, Authentication and Authorization, Hooks
          </p>
        </div>
      </Toggle>
    </div>
  );
};

export default Courses;
