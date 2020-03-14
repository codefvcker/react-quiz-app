import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ActiveQuiz from "./ActiveQuiz";
import { loadCourseData } from "../../store/actions/actionQuiz";
import { Button } from "../../components";
import "./Quiz.scss";

const Quiz = ({ loadCourseData, currentQuiz }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getQuizData = async () => {
      const response = await fetch(
        `https://react-todo-hooks-fcdd5.firebaseio.com/${currentQuiz}.json`
      );
      const data = await response.json();
      loadCourseData({ currentQuiz, data });
    };
    getQuizData();
  }, []);

  const handleCheck = () => {
    return setLoaded(true);
  };

  return (
    <div className="quiz">
      <div className="quiz__content-wrap">
        {currentQuiz ? (
          loaded ? (
            <ActiveQuiz />
          ) : (
            <div className="quiz__content">
              <h1>{currentQuiz.toUpperCase()}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                nostrum iusto quasi quos! Sit qui assumenda consequatur corrupti
                neque amet quia, minus perspiciatis dolor, quam rem quas.
                Aliquid ad aut beatae illum? Et dolores tempore accusamus. Porro
                maiores impedit aut pariatur eveniet soluta odit dolore sunt,
                totam beatae voluptates magnam velit facere tenetur dolorem.
              </p>
              <Button className="quiz__btn--start" onClick={handleCheck}>
                Start quiz
              </Button>
            </div>
          )
        ) : (
          <div className="quiz__loader-wrap">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default connect(
  ({ quizReducer }) => {
    return {
      state: quizReducer,
      currentQuiz: quizReducer.currentQuiz
    };
  },
  { loadCourseData }
)(Quiz);
