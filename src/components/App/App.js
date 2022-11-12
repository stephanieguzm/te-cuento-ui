import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Error from '../Error/Error'
import Header from '../Header/Header'
import TeaContainer from '../TeaContainer/TeaContainer'
import TeaPage from '../TeaPage/TeaPage'
import Footer from '../Footer/Footer'

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

  //reset state
  returnHome = () => {
    this.setState({ teas: [], error: ''})
  }

  componentDidMount = () => {
    getTeas()
      .then(data => this.setState({ teas: data }))
      .catch(error => this.setState({ error: `We're taking care of a kettle that's boiling over! Please visit us again later.` }))
  }

  render() {
    return (
      <div className='parent-container'>
        <Header />
        <main className='App'>
          <div className='components-container'>
            {!this.state.teas.length && !this.state.error && <p className='spinner' data-cy='spinner'></p>}
            {this.state.error && <Error errorMessage={this.state.error} />}
            {this.state.teas.length && 
              <Switch>
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
                    //if chosen tea exists, return teaPage, otherwise render error. secures the tea page
                    return <TeaPage 
                    teas={this.state.teas} 
                    selectedTea={parseInt(teaId)} 
                    returnHome={this.returnHome}
                    errorMessage={this.state.error} />
                  }}
                />
                <Route path='*' render={() => {
                  <Error errorMessage='What the heck are you doing here?' /> }} 
                />
              </Switch>
            }
          </div>
        </main>
        <Footer />
      </div>
    )
  }

}

export default App
