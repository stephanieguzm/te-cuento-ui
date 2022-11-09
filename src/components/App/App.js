import React, { Component } from 'react';
import Header from '../Header/Header'

import { getTeas, postMessage } from '../../apiCalls.js'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teas: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getTeas()
      .then(data => this.setState({ teas: data }))
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <main className='App'>
        <Header />

      </main>
    )
  }

}

export default App;
