// import { useHistory } from 'react-router-dom'
// import { Component } from 'react'
// import { getTea } from '../../apiCalls'
import CommentsContainer from '../CommentsContainer/CommentsContainer'

import './TeaPage.css'

const TeaPage = ({ tea, teaId }) => {
// const history = useHistory()

  return (
    <section className='tea-page-container' data-cy='tea-page-container'>
      <h1>It works!</h1>
      <section className='tea-header' id={tea.id} data-cy='tea-header'>
        <div className='img-container'>
          <img className='tea-pg-img' src={tea.img} alt={`${tea.name} tea`} data-cy='tea-img'/>
        </div>
        <div className='tea-header-details'>
          <p className='tea-p' data-cy='tea-type'>{tea.type} tea</p>
          <h2 className='tea-p' data-cy='tea-name'>{tea.name}</h2>
          <h4 className='tea-p' data-cy='tea-origin'>{tea.origin} origin</h4>
          <p className='tea-p' data-cy='tea-brew'>
            steep for {tea.brew_time} minutes at {tea.temperature}°F 
          </p>
          <p className='tea-p'>{tea.caffeine_level} caffeine level</p>
          <p className='tea-p' data-cy='tea-infusions'>{tea.infusions} infusions</p>
          <p className='tea-p' data-cy='tea-caffeine'>
          </p>
        </div>
      </section>
      <section className='desc-farmer'>
        <div className='about'>
          <h3>About {tea.name}</h3>
          <p className='tea-p' data-cy='tea-desc'>{tea.description}</p>
        </div>
        <div className='farmer-container' data-cy='farmer-container'>
          <img className='farmer-img' src={tea.farmer_img} alt={`Farmer ${tea.farmer}`} data-cy='farmer-img'/>
          <p className='tea-p' data-cy='farmer-name'>Cultivated by {tea.farmer}</p>
        </div>
      </section>
      <section className='comments-container' data-cy='comments-container'>
        <CommentsContainer 
          tea_id={teaId}
          />
      </section>
    </section>
  )

}

export default TeaPage
