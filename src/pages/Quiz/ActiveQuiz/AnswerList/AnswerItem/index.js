import React, { useContext } from "react";
import { QuizContext } from "../../../QuizContext";
import classNames from "classnames";
import "./AnswerItem.scss";

export const AnswerItem = ({ text, number, id }) => {
  const { handleAnswerClick, answerState } = useContext(QuizContext);

  const classes = classNames(
    "answer-item",
    answerState && answerState.id === id ? answerState.style : null
  );

  return (
    <li onClick={() => handleAnswerClick(id)} id={id} className={classes}>
      {number + 1}.{text}
    </li>
  );
};
