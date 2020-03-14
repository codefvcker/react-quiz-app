import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import FinishQuiz from "../FinishQuiz";
import { answerClick } from "../../../store/actions/actionQuiz";
import { QuizContext } from "../QuizContext";
import { AnswerList } from "./AnswerList";
import "./ActiveQuiz.scss";

export const ActiveQuiz = ({ quizReducer, answerClick, currentQuiz }) => {
  const { quiz, activeQuestion, results } = quizReducer[currentQuiz];
  const { rightAnswer } = quiz[activeQuestion];
  const currentQuestion = quiz[activeQuestion];
  const length = quiz.length;
  const [answerState, setAnswerState] = useState(null);
  const [finished, setFinished] = useState(true);
  const [last, setLast] = useState("");
  const { answers, question } = currentQuestion;

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
        answerClick({ id, currentQuiz, answerResult });
      }
    }, 800);
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
      <div className="active-quiz">
        {finished ? (
          <FinishQuiz />
        ) : (
          <div className="active-quiz__content-wrap">
            <p className="active-quiz__question">
              <span>
                <strong>1.{question}</strong>&nbsp;
              </span>
              <small>
                {activeQuestion + 1} from {length}
              </small>
            </p>
            <AnswerList answers={answers} />
          </div>
        )}
      </div>
    </QuizContext.Provider>
  );
};

export default connect(
  ({ quizReducer }) => {
    return {
      currentQuiz: quizReducer.currentQuiz,
      quizReducer: quizReducer
    };
  },
  { answerClick }
)(ActiveQuiz);
