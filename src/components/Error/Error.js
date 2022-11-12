import { useHistory } from 'react-router-dom'

import './Error.css'

const Error = ({ errorMessage }) => {
  const history = useHistory()

  const returnHome = () => {
    history.push('/')
  }

  return (
    <section className='error-container container' data-cy='error-container'>
      <p className='error-message' data-cy='error-message'>{errorMessage}</p>
      <button className='home-button' data-cy='home-button' onClick={returnHome}>Home</button>

    </section>
  )
}

export default Error