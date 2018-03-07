import React, { Component } from 'react'
import Router from "./Router"
import Nav from "./components/Nav"

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
