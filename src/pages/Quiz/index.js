import React, { useEffect } from "react";
import { ActiveQuiz } from "./ActiveQuiz";
import { QuizContext } from "./QuizContext";
import "./Quiz.scss";
import { connect } from "react-redux";
import { answerClick } from "../../store/actions/actionQuiz";

const Quiz = ({ quiz, activeQuestion }) => {
  const { rightAnswer, question, answers } = quiz[activeQuestion];

  useEffect(() => {
    console.log(question);
  });

  return (
    <QuizContext.Provider
      value={{ answerClick, question, rightAnswer, answers }}
    >
      <div className="quiz">
        <h1>Big quiz page</h1>
        <ActiveQuiz />
      </div>
    </QuizContext.Provider>
  );
};

export default connect(
  ({ quizReducer }) => {
    return {
      activeQuestion: quizReducer.react.activeQuestion,
      quiz: quizReducer.react.quiz
    };
  },
  { answerClick }
)(Quiz);
