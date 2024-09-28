import React, { Children } from "react";
import "./button.css";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const button = ({ Children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
};

const checkButtonStyle = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

return (
  <Link to="/sign-up" className="btn-mobile">
    <button className={"btn ${checkButtonStyle} ${checkButtonSize}"} onClick={onClick} type={type}>
      {Children}
    </button>
  </Link>
);
