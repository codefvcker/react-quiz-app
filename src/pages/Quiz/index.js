import React, { useEffect, useState } from "react";
import ActiveQuiz from "./ActiveQuiz";
import { connect } from "react-redux";
import { loadCourseData } from "../../store/actions/actionQuiz";
import { Button } from "../../components";
import "./Quiz.scss";

const Quiz = ({ loadCourseData, currentQuiz, state }) => {
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
          <div className="quiz__content">
            <Button onClick={handleCheck}>Start quiz</Button>
          </div>
        )
      ) : (
        <div>Loading...</div>
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
