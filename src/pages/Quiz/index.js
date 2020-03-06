import React, { useEffect, useState } from "react";
import { ActiveQuiz } from "./ActiveQuiz";
import { QuizContext } from "./QuizContext";
import FinishQuiz from "./FinishQuiz";
import { connect } from "react-redux";
import { answerClick } from "../../store/actions/actionQuiz";
import "./Quiz.scss";

const Quiz = ({ quiz, activeQuestion, results, answerClick }) => {
  const { rightAnswer } = quiz[activeQuestion];
  const currentQuestion = quiz[activeQuestion];
  const length = quiz.length;
  const [answerState, setAnswerState] = useState(null);
  const [finished, setFinished] = useState(true);
  const [last, setLast] = useState("");

  useEffect(() => {
    if (activeQuestion === 0) {
      setFinished(false);
      setLast("");
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
      if (activeQuestion + 1 === length) {
        setLast(answerResult);
        setFinished(true);
      } else {
        setAnswerState(null);
        answerClick({ id, answerResult });
      }
    }, 1500);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        activeQuestion,
        rightAnswer,
        handleAnswerClick,
        answerState,
        length,
        last,
        results
      }}
    >
      <div className="quiz">
        <h1>Big quiz page</h1>
        {finished ? <FinishQuiz /> : <ActiveQuiz length={length} />}
      </div>
    </QuizContext.Provider>
  );
};

export default connect(
  ({ quizReducer }) => {
    return {
      results: quizReducer.react.results,
      activeQuestion: quizReducer.react.activeQuestion,
      quiz: quizReducer.react.quiz
    };
  },
  { answerClick }
)(Quiz);
