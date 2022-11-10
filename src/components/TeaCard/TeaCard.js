import { Link } from 'react-router-dom'

import './TeaCard.css'

const TeaCard = ({ id, name, type, img }) => {
  return (
    <Link to={`/${id}`}>
      <div className='tea-card' id={id} data-cy='card'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-p'>{type}</p>
        <img className='card-img' src={img} alt={name}/>
      </div>
    </Link>
  )
}

export default TeaCard