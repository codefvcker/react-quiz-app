import React, { useContext, useEffect } from "react";
import { Button } from "../../../components";
import { restartQuiz } from "../../../store/actions/actionQuiz";
import { QuizContext } from "../QuizContext";
import "./FinishQuiz.scss";
import { connect } from "react-redux";

const FinishQuiz = ({ restartQuiz }) => {
  const { results, last, length } = useContext(QuizContext);

  if (results && last) {
    if (results.length === length) {
      results.shift();
    }
    results.push(last);
  }

  const renderResults = results =>
    results.map((item, index) => (
      <li className={`finish-quiz__${item}`}>{index + 1}</li>
    ));

  return (
    <div className="finish-quiz">
      <h1>Quiz is finished</h1>
      <ul className="finish-quiz__results-board">{renderResults(results)}</ul>
      <Button onClick={() => restartQuiz()}>Restart</Button>
      <Button to="/">Back to main</Button>
    </div>
  );
};

export default connect(() => ({}), { restartQuiz })(FinishQuiz);
