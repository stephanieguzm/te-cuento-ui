import { useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Error from '../Error/Error'
import Header from '../Header/Header'
import TeaContainer from '../TeaContainer/TeaContainer'
import TeaPage from '../TeaPage/TeaPage'
import Footer from '../Footer/Footer'
import PageNotFound from '../PageNotFound/PageNotFound'
import { getTeas } from '../../apiCalls.js'

import './App.css';

const App = () => {

  const [ teas, setTeas ] = useState([])
  const [ error, setError ] = useState('')

  useEffect(() => {
    getTeas()
      .then(data => setTeas(data))
      .catch(error => setError(`We're taking care of a kettle that's boiling over! Please visit us again later.`))
  }, [])

  const aboutSection = () => {
    return (
      <section className='about-site' data-cy='about-site'>
        <h2>Welcome</h2>
        <p>Té Cuento was founded to combine the enjoyment of a cup of tea with storytelling and build community in the space it creates. 
          Each season we offer recommendations for single-origin teas imported directly from the gardens of China, the birthplace of tea. 
          Every tea is carefully selected to meet our standard for quality and to promote the rich, inspirational tradition of tea.</p>
        <p>We invite you to become a part of our community and share your own stories and insights that come with each cup.</p>
        <p>Simply select a tea to learn more, purchase, and contribute to our growing community.</p>
        <Link to='/'>
          <button className='about-button'>TEAS</button>
      </Link>
      </section>
    )
  }

  return (
    <>
      <Header />
      <main className='App'>
        <div className='components-container'>
          {!teas.length && !error && <p className='spinner' data-cy='spinner'></p>}
          {error && <Error errorMessage={error} />}
          {teas && 
            <Switch>
              <Route 
                exact path='/' 
                render={() => {
                  return <TeaContainer 
                  teas={teas} />
                }}/>
              <Route 
                exact path='/about'
                render={aboutSection} />
              <Route 
                exact path='/:id'
                render={({ match }) => {
                  return <TeaPage teas={teas} teaId={parseInt(match.params.id)} />
                }}/>
              <Route path='*' component={PageNotFound} />
            </Switch>
          }
        </div>
      </main>
      <Footer />
    </>
  )

}

export default App
