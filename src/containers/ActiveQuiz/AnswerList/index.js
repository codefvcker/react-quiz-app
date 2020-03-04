import React from "react";
import { AnswerItem } from "./AnswerItem";
import { connect } from "react-redux";
import { addOne } from "../../../store/actions/actionQuiz";
import "./AnswerList.scss";

const AnswerList = ({ answers, answer, cards, dispatch, addOne }) => {
  const renderItems = answers =>
    answers.map((item, index) => {
      return <AnswerItem key={index} text={item.text} number={index} />;
    });

  const clickHandle = () => {
    const mult = 1;
    // console.log(answer);
    addOne(mult);
  };

  return (
    <ul onClick={() => clickHandle()} className="answer-list">
      {answer}
      {renderItems(answers)}
    </ul>
  );
};

export default connect(
  ({ quizReducer }) => {
    return {
      cards: quizReducer.cards,
      answer: quizReducer.answer,
      answers: quizReducer.answers
    };
  },
  { addOne }
)(AnswerList);
