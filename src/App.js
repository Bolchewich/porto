import React from "react";
import "./styles.css";

import { Test } from "./Sideheader.js";
import { Header } from "./Header.js";
import { Hjem } from "./Hjem.js";
import { om_meg } from "./Om-meg.js";
import { Prosjekter } from "./Prosjekter.js";
import {Bachelor} from "./Bachelor.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">

        <Header />
        <Test />
        <div className="component-body">

          <Switch>

            <Route path="/Hjem" component={Hjem} />
            <Route path="/Om-meg" component={om_meg} />
            <Route path="/Prosjekter" component={Prosjekter} />
            <Route path="/Bachelor" component={Bachelor} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
