import React from "react";
import { ActiveQuiz } from "../../containers/ActiveQuiz";
import "./Quiz.scss";

export const Quiz = () => {
  return (
    <div className="quiz">
      <h1>Big quiz page</h1>
      <ActiveQuiz />
    </div>
  );
};
