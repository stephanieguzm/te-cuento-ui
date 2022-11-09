import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teas: [],
      error: ''
    }
  }

  render() {
    return (
      <h1>Hello World :)</h1>
    )
  }

}

export default App;
