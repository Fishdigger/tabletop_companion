import React, { Component } from 'react'
import Router from "./Router"
import Nav from "./Nav"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Router />
      </div>
    );
  }
}

export default App;
