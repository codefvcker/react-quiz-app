import React, { useEffect, useState } from "react";
import { ActiveQuiz } from "./ActiveQuiz";
import { QuizContext } from "./QuizContext";
import FinishQuiz from "./FinishQuiz";
import "./Quiz.scss";
import { connect } from "react-redux";
import { answerClick } from "../../store/actions/actionQuiz";

const Quiz = ({ quiz, activeQuestion, results, answerClick }) => {
  const { rightAnswer } = quiz[activeQuestion];
  const currentQuestion = quiz[activeQuestion];
  const [answerState, setAnswerState] = useState(null);
  const [finished, setFinished] = useState(true);

  useEffect(() => {
    if (activeQuestion === 0) {
      setFinished(false);
      setAnswerState(null);
    }
  }, [activeQuestion]);

  const handleAnswerClick = id => {
    let answerResult;

    if (rightAnswer === id) {
      setAnswerState({ id, style: "success" });
      answerResult = "success";
    } else {
      setAnswerState({ id, style: "error" });
      answerResult = "error";
    }

    setTimeout(() => {
      if (activeQuestion + 1 === quiz.length) {
        setFinished(true);
      } else {
        answerClick({ id, answerResult });
        setAnswerState(null);
      }
    }, 1500);
  };

  console.log("res", results);

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
        {finished ? <FinishQuiz /> : <ActiveQuiz length={quiz.length} />}
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
