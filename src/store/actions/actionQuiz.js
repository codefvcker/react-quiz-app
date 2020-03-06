import { ANSWER_CLICK, RESTART_QUIZ } from "../constants";

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

export const restartQuiz = () => ({
  type: RESTART_QUIZ
});
