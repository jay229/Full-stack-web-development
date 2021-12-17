import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
        height={3}
          color='#f11946'
          progress={progress}
          transitionTime={500}

        />
        <Switch>
          <Route exact path="/"><News
            key="general" pageSize={12} country="in" category="general" setProgress={setProgress} apiKey={ apiKey} />
          </Route>
          <Route exact path="/general">
            <News key="general" pageSize={12} country="in" category="general" setProgress={setProgress} apiKey={ apiKey} />
          </Route>
          <Route exact path="/business">
            <News key="business" pageSize={12} country="in" category="business" setProgress={setProgress} apiKey={ apiKey} />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" pageSize={12} country="in" category="entertainment" setProgress={setProgress} apiKey={ apiKey} />
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={12} country="in" category="health" setProgress={setProgress} apiKey={ apiKey} />
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={12} country="in" category="science" setProgress={setProgress} apiKey={ apiKey} />
          </Route>
          <Route exact path="/sports">
            <News key="sports" pageSize={12} country="in" category="sports" setProgress={setProgress} apiKey={ apiKey} />
          </Route>
          <Route exact path="/technology">
            <News key="technology" pageSize={12} country="in" category="technology" setProgress={setProgress} apiKey={ apiKey} />
          </Route>

        </Switch>

      </Router>

    </div>
  )
}

export default App