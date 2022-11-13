import PropTypes from 'prop-types'
import TeaCard from '../TeaCard/TeaCard'

import './TeaContainer.css'
import hero from '../../hero.png'

const TeaContainer = ({ teas }) => {
  const teaCards = teas.map( tea => {
    return <TeaCard 
      id={tea.id}
      key={tea.id}
      name={tea.name}
      type={tea.type}
      img={tea.img}
    />
  })

  return (
    <div>
      <div className='flex-hero'>
        <img className='hero-img' src={hero} />
        <div className='hero-text'>
          <p>Every cup has a story</p>
        </div>
      </div>
      <section className='tea-container' data-cy='tea-container'>
        {teaCards}
      </section>
    </div>
  )

}

export default TeaContainer

TeaContainer.propTypes = {
  teas: PropTypes.arrayOf(PropTypes.object)
}