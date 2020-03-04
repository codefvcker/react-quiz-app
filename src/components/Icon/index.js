import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./Icon.scss";

export const Icon = ({ className, name }) => {
  const classes = classNames("fas", `fa-${name}`, "icon", className);

  return <i className={classes} />;
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

Icon.defaultProps = {
  className: "",
  name: "exclamation-circle"
};
