import {
  ANSWER_CLICK,
  RESTART_QUIZ,
  LOAD_COURSE,
  LOAD_COURSE_DATA
} from "../constants";

const initialAsks = {
  currentQuiz: null
};

export const quizReducer = (state = initialAsks, { type, payload }) => {
  switch (type) {
    case LOAD_COURSE:
      return {
        ...state,
        currentQuiz: payload
      };
    case ANSWER_CLICK:
      return {
        ...state,
        [payload.currentQuiz]: {
          ...state[payload.currentQuiz],
          activeQuestion: state[payload.currentQuiz].activeQuestion + 1,
          results: [...state[payload.currentQuiz].results, payload.answerResult]
        }
      };
    case RESTART_QUIZ:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          results: [],
          activeQuestion: 0
        }
      };
    case LOAD_COURSE_DATA:
      return {
        ...state,
        [payload.currentQuiz]: payload.data
      };
    default:
      return state;
  }
};
