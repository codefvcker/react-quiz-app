import React, { useEffect, useState } from "react";
import ActiveQuiz from "./ActiveQuiz";
import { loadCourseData } from "../../store/actions/actionQuiz";
import { QuizService } from "../../services/quizService";
import "./Quiz.scss";
import { connect } from "react-redux";

const Quiz = ({ loadCourseData, currentQuiz, state }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getQuizData = async () => {
      const test = currentQuiz;
      const response = await fetch(
        `https://react-todo-hooks-fcdd5.firebaseio.com/${currentQuiz}.json`
      );
      const data = await response.json();
      loadCourseData({ currentQuiz, data });
    };
    getQuizData();
  }, []);

  const handleCheck = () => {
    console.log("state", state);
    return setLoaded(true);
  };

  console.log(state);

  return (
    <div className="quiz">
      {currentQuiz ? (
        loaded ? (
          <ActiveQuiz />
        ) : (
          <div>
            <button onClick={handleCheck}>Check</button>
          </div>
        )
      ) : (
        <div>
          Loading...
          <button onClick={handleCheck}>Check</button>
        </div>
      )}
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
