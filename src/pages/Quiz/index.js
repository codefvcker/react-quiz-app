import React, { useEffect, useState } from "react";
import { ActiveQuiz } from "./ActiveQuiz";
import { QuizContext } from "./QuizContext";
import "./Quiz.scss";
import { connect } from "react-redux";
import { answerClick } from "../../store/actions/actionQuiz";
// import { ANSWER_CLICK } from "../../store/constants";

const Quiz = ({ quiz, activeQuestion, answerChange, results, answerClick }) => {
  const { rightAnswer } = quiz[activeQuestion];
  const currentQuestion = quiz[activeQuestion];
  const [answerState, setAnswerState] = useState(null);

  console.log("ac", activeQuestion);
  console.log("ql", quiz.length);

  const handleAnswerClick = (id, answerResult) => {
    if (rightAnswer === id) {
      setAnswerState({ id, style: "success" });
      setTimeout(() => {
        if (activeQuestion + 1 === quiz.length) {
          alert("Finished");
        } else {
          answerClick({ id, answerResult });
          setAnswerState(null);
        }
      }, 1500);
    } else {
      setAnswerState({ id, style: "error" });
    }
  };

  // const isQuizFinished = () => activeQuestion + 1 === quiz.length;

  // console.log("results", results);
  // console.log("astate", answerState);

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        activeQuestion,
        rightAnswer,
        handleAnswerClick,
        answerState
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
      // answerState: quizReducer.react.answerState,
      results: quizReducer.react.results,
      activeQuestion: quizReducer.react.activeQuestion,
      quiz: quizReducer.react.quiz
    };
  },
  { answerClick }
)(Quiz);
