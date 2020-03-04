import React, { useContext } from "react";
import { QuizContext } from "../QuizContext";
import { AnswerList } from "./AnswerList";
import "./ActiveQuiz.scss";

export const ActiveQuiz = () => {
  const { question, answers } = useContext(QuizContext);
  console.log(question);
  return (
    <div className="active-quiz">
      <p className="active-quiz__question">
        <span>
          <strong>1.{question}</strong>&nbsp;
        </span>
        <small>1 from 1 </small>
      </p>
      <AnswerList answers={answers} />
    </div>
  );
};
