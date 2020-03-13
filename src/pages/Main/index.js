import React from "react";
import QuizCard from "../../containers/QuizCard";
import "./Main.scss";

export const Main = () => {
  return (
    <div className="main">
      <h1>Courses</h1>
      <div className="main__content-wrap">
        <QuizCard
          src="https://cdn.auth0.com/blog/react-js/react.png"
          className="main__card"
          author="by codefvcker"
          id="react"
          course="React"
        />
        <QuizCard
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
          className="main__card"
          id="angular"
          author="by codefvcker"
          course="Angular"
        />
      </div>
    </div>
  );
};
