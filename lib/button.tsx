import * as React from "react";
import "./button.css";

function Button({ theme = "text", children }) {
  return (
    <span>
      <button className={`forest-button forest-theme-` + theme}>
        {children}
      </button>
    </span>
  );
}

export default Button;
