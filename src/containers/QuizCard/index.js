import React from "react";
import { Link } from "react-router-dom";
import { Image, Icon, Label } from "../../components";
import "./QuizCard.scss";

export const QuizCard = ({ to, src, alt, className, author, course }) => {
  const cls = ["course-card"];

  if (className) {
    cls.push(className);
  }

  return (
    <Link to={to} className={cls.join(" ")}>
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
