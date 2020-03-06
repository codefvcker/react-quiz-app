import { ANSWER_CLICK, LOAD_COURSE, RESTART_QUIZ } from "../constants";

export const answerClick = ({ id, answerResult }) => {
  console.log("act", id, answerResult);
  return {
    type: ANSWER_CLICK,
    payload: {
      id,
      answerResult
    }
  };
};

export const loadCourse = course => ({
  type: LOAD_COURSE,
  payload: course
});

export const restartQuiz = () => ({
  type: RESTART_QUIZ
});
