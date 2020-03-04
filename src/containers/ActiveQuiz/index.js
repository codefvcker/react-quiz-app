import React from "react";
import AnswerList from "./AnswerList";
import "./ActiveQuiz.scss";

export const ActiveQuiz = () => {
  return (
    <div className="active-quiz">
      <p className="active-quiz__question">
        <span>
          <strong>1.</strong>&nbsp; sssss
        </span>
        <small>1 from 1 </small>
      </p>
      <AnswerList />
    </div>
  );
};
