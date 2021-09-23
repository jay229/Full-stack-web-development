import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c="class based component."
  render() {
    return (
      <div>
        Hello I'm a {this.c}
      </div>
    )
  }
}
