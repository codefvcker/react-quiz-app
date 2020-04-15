import React from "react";
import { AnswerItem } from "./AnswerItem";
import "./AnswerList.scss";

export const AnswerList = ({ answers }) => {
  const renderItems = answers =>
    answers.map((item, index) => {
      return (
        <AnswerItem key={index} text={item.text} id={item.id} number={index} />
      );
    });

  return <ul className="answer-list">{renderItems(answers)}</ul>;
};
