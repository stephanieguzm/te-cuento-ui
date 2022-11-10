import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header/Header'
import TeaContainer from '../TeaContainer/TeaContainer'
import TeaPage from '../TeaPage/TeaPage'

import { getTeas } from '../../apiCalls.js'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      teas: [],
      error: false
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
        <Switch>
          <Route 
            exact path='/:id'
            render={({ match }) => {
              const teaId = match.params.id
              return <TeaPage selectedTea={teaId}/>
            }}
          />
          <Route 
            exact path='/' 
            render={() => {
              return <TeaContainer teas={this.state.teas}/>
            }}
          />
        </Switch>
      </main>
    )
  }

}

export default App
