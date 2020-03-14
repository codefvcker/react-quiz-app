import {
  ANSWER_CLICK,
  LOAD_COURSE,
  RESTART_QUIZ,
  LOAD_COURSE_DATA
} from "../constants";

export const answerClick = ({ id, currentQuiz, answerResult }) => ({
  type: ANSWER_CLICK,
  payload: {
    id,
    currentQuiz,
    answerResult
  }
});

export const loadCourse = course => ({
  type: LOAD_COURSE,
  payload: course
});

export const restartQuiz = currentQuiz => ({
  type: RESTART_QUIZ,
  payload: currentQuiz
});

export const loadCourseData = ({ currentQuiz, data }) => ({
  type: LOAD_COURSE_DATA,
  payload: {
    currentQuiz,
    data
  }
});
