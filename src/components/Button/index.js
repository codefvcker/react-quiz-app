import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Button.scss";

export const Button = ({
  onClick,
  to,
  className,
  children,
  disabled,
  active
}) => {
  const classes = classNames("button", { active }, className);

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  onClick: () => {},
  children: "Default button",
  className: "",
  disabled: false,
  active: false
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};
