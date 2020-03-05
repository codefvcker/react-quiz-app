import React, { useContext, useState } from "react";
import { QuizContext } from "../../../QuizContext";
import classNames from "classnames";
import "./AnswerItem.scss";

export const AnswerItem = ({ text, number, id }) => {
  const [color, setColor] = useState("");

  const { rightAnswer, handleAnswerClick, answerState } = useContext(
    QuizContext
  );

  const classes = classNames("answer-item", color);
  console.log("ANSWER STATE", answerState);

  const handleClick = id => {
    let answerResult;
    if (id === rightAnswer) {
      answerResult = "success";
      setColor(answerResult);
    } else {
      answerResult = "error";
      setColor(answerResult);
    }
    handleAnswerClick(id, answerResult);
  };

  return (
    <li onClick={() => handleClick(id)} id={id} className={classes}>
      {number + 1}.{text}
    </li>
  );
};
