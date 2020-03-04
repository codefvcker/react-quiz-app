import React from "react";
import classNames from "classnames";
import "./AnswerItem.scss";

export const AnswerItem = ({ text, number, className }) => {
  const classes = classNames("answer-item", className);

  return (
    <li className={classes}>
      {number + 1}.{text}
    </li>
  );
};
