import * as React from "react";
import Button from "./button";
function ButtonTheme() {
  return (
    <>
      <Button theme="text">NEUTRAL</Button>
      <Button theme="primary">PRIMARY</Button>
      <Button theme="info">INFO</Button>
      <Button theme="success">SUCCESS</Button>
      <Button theme="warning">WARNING</Button>
      <Button theme="danger">DANGER</Button>
    </>
  );
}

export default ButtonTheme;
