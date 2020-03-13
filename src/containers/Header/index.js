import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export const Header = () => (
  <nav className="header">
    <div className="header__brand">
      <span>Quiz</span>
      <span className="header__brand-descr">by codefvcker</span>
    </div>
    <ul className="header__nav">
      <li>
        <NavLink exact className="header__link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="header__link" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);
