import { Link } from 'react-router-dom'

import './TeaCard.css'

const TeaCard = ({ id, name, type, img }) => {
  return (
    <Link to={`/${id}`}>
      <div className='tea-card' id={id} data-cy='tea-card'>
        <h3 className='card-title' data-cy='card-title'>{name}</h3>
        <p className='card-p' data-cy='card-type'>{type} tea</p>
        <img className='card-img' src={img} alt={name} data-cy='card-img'/>
      </div>
    </Link>
  )
}

export default TeaCard