import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './TeaCard.css'

const TeaCard = ({ id, name, type, img }) => {
  return (
    <Link to={`/${id}`}>
      <div className='tea-card' id={id} data-cy='tea-card'>
        <img className='card-img' src={img} alt={name} data-cy='card-img'/>
        <h3 className='card-title' data-cy='card-title'>{name}</h3>
        <p className='card-p' data-cy='card-type'>{type} tea</p>
      </div>
    </Link>
  )
}

export default TeaCard

TeaCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
