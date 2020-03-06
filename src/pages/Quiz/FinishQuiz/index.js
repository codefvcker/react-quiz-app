import React, { useContext } from "react";
import { Button } from "../../../components";
import { restartQuiz } from "../../../store/actions/actionQuiz";
import "./FinishQuiz.scss";
import { connect } from "react-redux";

const FinishQuiz = ({ restartQuiz }) => {
  return (
    <div className="finish-quiz">
      Quiz is finished
      <Button onClick={() => restartQuiz()}>Restart</Button>
      <Button to="/">Back to main</Button>
    </div>
  );
};

export default connect(() => ({}), { restartQuiz })(FinishQuiz);
