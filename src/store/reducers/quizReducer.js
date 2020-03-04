import { ANSWER_CLICK } from "../constants";

const initialAsks = {
  answers: [
    { text: "1asdasd" },
    { text: "2asdasd" },
    { text: "3asdasd" },
    { text: "4asdasd" }
  ],
  cards: [1, 2, 3, 4],
  answer: 0
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
