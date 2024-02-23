import React from "react";
import "../App.js";

const CustomBtn = (props) => {
  const { onClick, children, buttonColor } = props;
  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
      className="add-button"
    >
      {children}
    </button>
  );
};

export default CustomBtn;
