import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Error.css'

const Error = ({ errorMessage }) => {
  return (
    <section className='error-container container' data-cy='error-container'>
      <p className='error-message' data-cy='error-message'>{errorMessage}</p>
      <Link to='/'>
        <button className='home-button' data-cy='home-button'>HOME</button>
      </Link>
    </section>
  )
}

export default Error

Error.propTypes = {
  errorMessage: PropTypes.string.isRequired
}