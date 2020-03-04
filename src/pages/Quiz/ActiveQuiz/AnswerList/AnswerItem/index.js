import React, { useContext } from "react";
import { QuizContext } from "../../../QuizContext";
import classNames from "classnames";
import "./AnswerItem.scss";

export const AnswerItem = ({ text, number, id, className }) => {
  const classes = classNames("answer-item", className);

  const { answerClick, rightAnswer } = useContext(QuizContext);

  const handleClick = id => console.log(id);

  return (
    <li onClick={() => handleClick(id)} id={id} className={classes}>
      {number + 1}.{text}
    </li>
  );
};
