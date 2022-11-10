import { Link } from 'react-router-dom'

import './Error.css'

const Error = ({ errorMessage }) => {
  return (
    <section className='error-container container' data-cy='error-container'>
      <p>{errorMessage}</p>
      <Link to='/'>
        <button className='home-button' data-cy='home-button'>Home</button>
      </Link>
    </section>
  )
}

export default Error