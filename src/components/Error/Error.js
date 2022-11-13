import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import './Error.css'

const Error = ({ errorMessage }) => {
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }

  return (
    <section className='error-container container' data-cy='error-container'>
      <p className='error-message' data-cy='error-message'>{errorMessage}</p>
      <button className='home-button' data-cy='home-button' onClick={goHome}>HOME</button>
    </section>
  )
}

export default Error

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired
}