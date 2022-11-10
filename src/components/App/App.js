import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Error from '../Error/Error'
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
      error: ''
    }
  }

  returnHome = () => {
    this.setState({ teas: [], error: ''})
  }

  componentDidMount = () => {
    getTeas()
      .then(data => this.setState({ teas: data }))
      .catch(error => this.setState({ error: `${error.message}. We're busy taking care of a kettle that's boiling over! Please visit us again later.` }))
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <div className='components-container'>
          {!this.state.teas.length 
          ? <Error 
            errorMessage={this.state.error} 
            returnHome={this.returnHome} />
          : <Switch>
            <Route 
              exact path='/' 
              render={() => {
                return <TeaContainer 
                teas={this.state.teas} 
                returnHome={this.returnHome} />
              }}
            />
            <Route 
              exact path='/:id'
              render={({ match }) => {
                const teaId = match.params.id
                return <TeaPage 
                  teas={this.state.teas} 
                  selectedTea={parseInt(teaId)} 
                  returnHome={this.returnHome}
                  errorMessage={this.state.error} />
              }}
            />
          </Switch>
          }
        </div>
      </main>
    )
  }

}

export default App
