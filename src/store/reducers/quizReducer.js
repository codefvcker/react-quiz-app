import {
  ANSWER_CLICK,
  RESTART_QUIZ,
  LOAD_COURSE,
  LOAD_COURSE_DATA
} from "../constants";

const initialAsks = {
  currentQuiz: null
  // react: {
  //   results: [],
  //   activeQuestion: 0,
  //   quiz: [
  //     {
  //       question: "What color is sky?",
  //       rightAnswer: 3,
  //       id: 1,
  //       answers: [
  //         { text: "Red", id: 1 },
  //         { text: "Yellow", id: 2 },
  //         { text: "Blue", id: 3 },
  //         { text: "Green", id: 4 }
  //       ]
  //     },
  //     {
  //       question: "What color?",
  //       rightAnswer: 3,
  //       id: 2,
  //       answers: [
  //         { text: "Red", id: 1 },
  //         { text: "Yellow", id: 2 },
  //         { text: "Right", id: 3 },
  //         { text: "Green", id: 4 }
  //       ]
  //     },
  //     {
  //       question: "What is it?",
  //       rightAnswer: 2,
  //       id: 3,
  //       answers: [
  //         { text: "Red", id: 1 },
  //         { text: "Right", id: 2 },
  //         { text: "Blue", id: 3 },
  //         { text: "Green", id: 4 }
  //       ]
  //     },
  //     {
  //       question: "What is it?",
  //       rightAnswer: 2,
  //       id: 4,
  //       answers: [
  //         { text: "Red", id: 1 },
  //         { text: "Right", id: 2 },
  //         { text: "Blue", id: 3 },
  //         { text: "Green", id: 4 }
  //       ]
  //     },
  //     {
  //       question: "What is it?",
  //       rightAnswer: 2,
  //       id: 5,
  //       answers: [
  //         { text: "Red", id: 1 },
  //         { text: "Right", id: 2 },
  //         { text: "Blue", id: 3 },
  //         { text: "Green", id: 4 }
  //       ]
  //     }
  //   ]
  // }
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
        react: {
          ...state.react,
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
