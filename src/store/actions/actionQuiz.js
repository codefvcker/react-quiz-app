import { ANSWER_CLICK } from "../constants";

export const addOne = count => ({
  type: ANSWER_CLICK,
  payload: count
});
