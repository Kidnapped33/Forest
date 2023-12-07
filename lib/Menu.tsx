import * as React from "react";
import ButtonDemo from "./ButtonDemo";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./menu.scss";
function Menu() {
  return (
    <div>
        <div className="menu-list">
          <Link to="/">Home</Link>
          <Link to="/Button">Button</Link>
        </div>
    </div>
  );
}

export default Menu;
