import { ANSWER_CLICK } from "../constants";

export const answerClick = count => ({
  type: ANSWER_CLICK,
  payload: count
});
