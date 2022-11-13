import { useHistory } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }

  return (
    <section className='pg-not-found-container' data-cy='pg-not-found'>
      <p className='pg-not-found-message' data-cy='error-message'>You've found a page that doesn't exist. Let's get you back home!</p>
      <button className='home-button' data-cy='home-button' onClick={goHome}>HOME</button>
    </section>
  )
}

export default PageNotFound