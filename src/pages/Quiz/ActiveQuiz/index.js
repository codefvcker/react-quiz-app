import React, { useContext } from "react";
import { QuizContext } from "../QuizContext";
import { AnswerList } from "./AnswerList";
import "./ActiveQuiz.scss";

export const ActiveQuiz = ({ length }) => {
  const { currentQuestion, activeQuestion } = useContext(QuizContext);
  const { answers, question } = currentQuestion;
  return (
    <div className="active-quiz">
      <p className="active-quiz__question">
        <span>
          <strong>1.{question}</strong>&nbsp;
        </span>
        <small>
          {activeQuestion + 1} from {length}
        </small>
      </p>
      <AnswerList answers={answers} />
    </div>
  );
};
