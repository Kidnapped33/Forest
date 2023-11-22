import * as React from "react";
import ButtonTheme from "./buttonTheme.demo";
import "./buttonDemo.css";
import Button from "./button";

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
    </>
  );
}

export default ButtonDemo;
