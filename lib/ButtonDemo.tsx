import * as React from "react";
import Button from "./button";
import "./buttonDemo.css";
import ButtonTheme from "./buttonTheme.demo";
import ButtonSize from "./buttonSize.demo";

function ButtonDemo() {
  return (
    <>
      <h2>Button 示例</h2>
      <div className="button-demo-wrapper">
        <div>常规使用</div>
        <hr />
        <ButtonTheme></ButtonTheme>
        <hr />
        <Button>查看代码</Button>
      </div>
      <div className="button-demo-wrapper">
        <div>size使用</div>
        <hr />
        <ButtonSize></ButtonSize>
        <hr />
        <Button>查看代码</Button>
      </div>
    </>
  );
}

export default ButtonDemo;
