import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  c = "class based component."
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/general">
              <News  key="general" pageSize={12} country="in" category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={12} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={12} country="in" category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={12} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={12} country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={12} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={12} country="in" category="technology" />
            </Route>

          </Switch>

        </Router>
      </div>
    )
  }
}
// business
// entertainment
// general
// health
// science
// sports
// technology