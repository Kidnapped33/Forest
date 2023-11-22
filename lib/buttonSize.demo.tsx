import * as React from "react";
import Button from "./button";

function ButtonSize() {
  return (
    <>
      <Button size="small">small</Button>
      <Button>normal</Button>
      <Button size="big">big</Button>
    </>
  );
}

export default ButtonSize;
