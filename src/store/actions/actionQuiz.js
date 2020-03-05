import { ANSWER_CLICK, ANSWER_CHANGE } from "../constants";

export const answerClick = ({ id, answerResult }) => {
  return {
    type: ANSWER_CLICK,
    payload: {
      id,
      answerResult
      // answerState
    }
  };
};

// export const answerChange = () => ({
//   type: ANSWER_CHANGE
// });
