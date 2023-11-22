import * as React from "react";
import "./button.css";

function Button({ children,theme = "text", size=""}) {
  return (
    <span>
      <button className={`
      forest-button 
      forest-theme-${theme}
      forest-size-${size}
      `}>
        {children}
      </button>
    </span>
  );
}

export default Button;
