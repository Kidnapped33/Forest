import * as React from "react";
import Button from "./button";

function ButtonSize() {
  return (
    <>
      <Button size="large">Large Button</Button>
      <Button>Default Button</Button>
      <Button size="small">Small Button</Button>
    </>
  );
}

export default ButtonSize;
