import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  c="class based component."
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
