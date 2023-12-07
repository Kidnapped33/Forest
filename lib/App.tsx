import * as React from "react";
import ButtonDemo from "./ButtonDemo";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./app.scss";
import Menu from "./Menu";
function App() {
  return (
    <Router>
      <div className="forest-ui">
        <nav>
          <div className="logo">logo</div>
          <div className="menu">
            <Menu />
          </div>
          <div className="github">github </div>
        </nav>
        <main>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/Button">
              <ButtonDemo />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
