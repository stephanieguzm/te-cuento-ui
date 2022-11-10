import React from 'react'
import { Link } from 'react-router-dom'

import './TeaCard.css'

const TeaCard = ({ id, name, type, img }) => {
  return (
    <Link to={`/${id}`}>
      <div className='tea-card' id={id}>
        <h3>{name}</h3>
        <p>{type}</p>
        <img src={img} alt={name}/>
      </div>
    </Link>
  )
}

export default TeaCard