import * as React from "react";
import Button from "./button";
import "./buttonDemo.scss";
import ButtonTheme from "./buttonTheme.demo";
import ButtonSize from "./buttonSize.demo";

function ButtonDemo() {
  return (
    <>
      <h1>Buttons example</h1>

      <div className="example-title">Variants</div>
      <div className="code-example">
        <div className="code-example-button">
          <ButtonTheme></ButtonTheme>
        </div>
        <div className="code-example-code">代码部分 </div>
      </div>

      <div className="example-title">Sizes</div>
      <div className="code-example">
        <div className="code-example-button">
          <ButtonSize></ButtonSize>
        </div>
        <div className="code-example-code">代码部分 </div>
      </div>
    </>
  );
}

export default ButtonDemo;
