import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
// let x=process.env.REACT_APP_NEWS_API;
// console.log(x)
export default class App extends Component {
  // c = "class based component."
  apiKey=process.env.REACT_APP_NEWS_API;
  // apiKey="a64092eee06b4808b7a20c9f8e14849d";
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState(
     { progress:progress}
    )
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress} 
            transitionTime={500}
           
          />
          <Switch>
            <Route exact path="/"><News
              key="general" pageSize={12} country="in" category="general" setProgress={this.setProgress} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/general">
              <News key="general" pageSize={12} country="in" category="general" setProgress={this.setProgress} apiKey={this.apiKey}/>
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={12} country="in" category="business" setProgress={this.setProgress} apiKey={this.apiKey}/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={12} country="in" category="entertainment" setProgress={this.setProgress} apiKey={this.apiKey}/>
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={12} country="in" category="health" setProgress={this.setProgress} apiKey={this.apiKey} />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={12} country="in" category="science" setProgress={this.setProgress} apiKey={this.apiKey}/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={12} country="in" category="sports" setProgress={this.setProgress} apiKey={this.apiKey}/>
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={12} country="in" category="technology" setProgress={this.setProgress} apiKey={this.apiKey}/>
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