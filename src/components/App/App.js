import { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Error from '../Error/Error'
import Header from '../Header/Header'
import TeaContainer from '../TeaContainer/TeaContainer'
import TeaPage from '../TeaPage/TeaPage'
import Footer from '../Footer/Footer'
import PageNotFound from '../PageNotFound/PageNotFound'

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

  componentDidMount = () => {
    getTeas()
      .then(data => this.setState({ teas: data }))
      .catch(error => this.setState({ error: `We're taking care of a kettle that's boiling over! Please visit us again later.` }))
  }

  render() {
    return (
      <>
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
                    teas={this.state.teas} />
                  }}/>
                <Route 
                  exact path='/:id'
                  render={({ match }) => {
                    const teaId = parseInt(match.params.id)
                    const tea = this.state.teas.find(tea => tea.id === teaId)
                    return <TeaPage tea={tea} teaId={teaId} />
                  }}/>
                <Route path='*' render={() => <PageNotFound />} />
              </Switch>
            }
          </div>
        </main>
        <Footer />
      </>
    )
  }

}

export default App
