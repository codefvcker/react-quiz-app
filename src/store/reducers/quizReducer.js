import { ANSWER_CLICK, ANSWER_CHANGE } from "../constants";

const initialAsks = {
  react: {
    results: [],
    isFinished: false,
    activeQuestion: 0,
    answerState: true,
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
          answerState: payload.answerState,
          results: [...state.react.results, payload.answerResult]
        }
      };
    case ANSWER_CHANGE:
      return {
        ...state,
        react: {
          ...state.react,
          answerState: false
        }
      };
    default:
      return state;
  }
};
