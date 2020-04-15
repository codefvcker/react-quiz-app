import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loadCourse } from "../../store/actions/actionQuiz";
import { Image, Icon, Label } from "../../components";
import "./QuizCard.scss";

const QuizCard = ({ src, alt, className, author, course, id, loadCourse }) => {
  const cls = ["quiz-card"];

  if (className) {
    cls.push(className);
  }

  const to = `/quiz/${id}`;

  return (
    <Link to={to} onClick={() => loadCourse(id)} className={cls.join(" ")}>
      <div className="quiz-card__image-wrap">
        <Image className="quiz-card__image" src={src} alt={alt} />
      </div>
      <div className="quiz-card__content">
        <Label type="light">{author}</Label>
        <Label type="semi">{course}</Label>
      </div>
      <div className="quiz-card__stats-wrap">
        <div className="quiz-card__shows">
          <Icon name="users" />
          <Label type="semi">10.2k</Label>
        </div>
        <div className="quiz-card__stars">
          <Icon name="star" />
          <Label type="semi">4.7k</Label>
        </div>
      </div>
    </Link>
  );
};

export default connect(() => ({}), { loadCourse })(QuizCard);
