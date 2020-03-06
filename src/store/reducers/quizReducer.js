import { ANSWER_CLICK, RESTART_QUIZ } from "../constants";

const initialAsks = {
  react: {
    results: [],
    activeQuestion: 0,
    quiz: [
      {
        question: "What color is sky?",
        rightAnswer: 3,
        id: 1,
        answers: [
          { text: "Red", id: 1 },
          { text: "Yellow", id: 2 },
          { text: "Blue", id: 3 },
          { text: "Green", id: 4 }
        ]
      },
      {
        question: "What color?",
        rightAnswer: 3,
        id: 2,
        answers: [
          { text: "Red", id: 1 },
          { text: "Yellow", id: 2 },
          { text: "Right", id: 3 },
          { text: "Green", id: 4 }
        ]
      },
      {
        question: "What is it?",
        rightAnswer: 2,
        id: 3,
        answers: [
          { text: "Red", id: 1 },
          { text: "Right", id: 2 },
          { text: "Blue", id: 3 },
          { text: "Green", id: 4 }
        ]
      },
      {
        question: "What is it?",
        rightAnswer: 2,
        id: 4,
        answers: [
          { text: "Red", id: 1 },
          { text: "Right", id: 2 },
          { text: "Blue", id: 3 },
          { text: "Green", id: 4 }
        ]
      },
      {
        question: "What is it?",
        rightAnswer: 2,
        id: 5,
        answers: [
          { text: "Red", id: 1 },
          { text: "Right", id: 2 },
          { text: "Blue", id: 3 },
          { text: "Green", id: 4 }
        ]
      }
    ]
  }
};

export const quizReducer = (state = initialAsks, { type, payload }) => {
  switch (type) {
    case ANSWER_CLICK:
      return {
        ...state,
        react: {
          ...state.react,
          activeQuestion: state.react.activeQuestion + 1,
          results: [...state.react.results, payload.answerResult]
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
    default:
      return state;
  }
};
