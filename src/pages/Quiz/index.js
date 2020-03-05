import React, { useEffect, useState } from "react";
import { ActiveQuiz } from "./ActiveQuiz";
import { QuizContext } from "./QuizContext";
import "./Quiz.scss";
import { connect } from "react-redux";
import { answerClick, answerChange } from "../../store/actions/actionQuiz";
// import { ANSWER_CLICK } from "../../store/constants";

const Quiz = ({
  quiz,
  activeQuestion,
  answerState,
  answerChange,
  results,
  answerClick
}) => {
  const { rightAnswer } = quiz[activeQuestion];
  const currentQuestion = quiz[activeQuestion];

  const [load, setLoad] = useState(false);

  const handleAnswerClick = (id, answerResult) => {
    setLoad(true);
    const answerState = true;
    setTimeout(() => {
      answerClick({ id, answerResult, answerState });
      answerChange();
    }, 1500);
  };

  // const hand = () => answerChange();

  useEffect(() => setLoad(false), [activeQuestion]);

  console.log("results", results);
  console.log("astate", answerState);

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        activeQuestion,
        rightAnswer,
        handleAnswerClick,
        answerState,
        load
      }}
    >
      <div className="quiz">
        <h1>Big quiz page</h1>
        <ActiveQuiz length={quiz.length} />
      </div>
    </QuizContext.Provider>
  );
};

export default connect(
  ({ quizReducer }) => {
    return {
      answerState: quizReducer.react.answerState,
      results: quizReducer.react.results,
      activeQuestion: quizReducer.react.activeQuestion,
      quiz: quizReducer.react.quiz
    };
  },
  { answerClick, answerChange }
)(Quiz);
