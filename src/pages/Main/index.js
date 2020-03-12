import React from "react";
import QuizCard from "../../containers/QuizCard";
import "./Main.scss";

export const Main = () => {
  return (
    <div className="main">
      <h1>Courses</h1>
      <div className="main__content-wrap">
        <QuizCard className="main__card" id="react" course="react" />
        <QuizCard className="main__card" id="angular" course="angular" />
      </div>
    </div>
  );
};
