import * as React from "react";
// import { useState } from "react";
import './button.css'

function Button() {
  return (
    <div>
      <div  className="f-bottom">

      <button style={{ backgroundColor: "#5e72e4",color:'white' }}>PRIMARY</button>
      <button style={{ backgroundColor: "#11cdef" ,color:'white' }}>INFO</button>
      <button style={{ backgroundColor: "#2dce89" ,color:'white' }}>SUCCESS</button>
      <button style={{ backgroundColor: "#fb6340" ,color:'white' }}>WARNING</button>
      <button style={{ backgroundColor: "#f5365c" ,color:'white' }}>DANGER</button>
      <button style={{ backgroundColor: "#ffffff" ,color:'5e72e4' }}>NEUTRAL</button>
      </div>
    </div>
  );
}

export default Button;
