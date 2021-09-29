import React from "react";
import "./header.css";

import IsTriangle from "../istriangle/isTriangle";
import TrianlgeHypo from "../hypotaneus/trianlgeHypo";
import TrianlgeArea from "../trianglearea/TrianlgeArea";
import Quiz from "../qiz/Quiz";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Router>
        <div className="MainCont">
          <div className="navcontainer">
            <div className="header">
              <div className="logo">
                <Link to="/">FunTriangles</Link>
              </div>
            </div>
            <div className="ulContainerh">
              <div className="uul">
                <ul className="ulstyleh">
                  <li className="listStyle">
                    <Link to="/IsTriangle">Is Triangle?</Link>
                  </li>
                  <li className="listStyleh">
                    <Link to="/quiz">Quiz</Link>
                  </li>
                  <li className="listStyleh">
                    <Link to="/hypotenus">Hypotenus</Link>
                  </li>
                  <li className="listStyleh">
                    <Link to="/area">AreaTraingle</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <IsTriangle />
          </Route>
          <Route exact path="/IsTriangle">
            <IsTriangle />
          </Route>
          <Route exact path="/quiz">
            <Quiz />
          </Route>
          <Route exact path="/hypotenus">
            <TrianlgeHypo />
          </Route>
          <Route exact path="/area">
            <TrianlgeArea />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Header;
