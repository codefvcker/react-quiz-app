import { ANSWER_CLICK } from "../constants";

const initialAsks = {
  react: {
    results: {},
    isFinished: false,
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
      }
    ]
  }
};

export const quizReducer = (state = initialAsks, { type, payload }) => {
  switch (type) {
    case ANSWER_CLICK:
      return {
        ...state,
        answer: state.answer + payload
      };
    default:
      return state;
  }
};
