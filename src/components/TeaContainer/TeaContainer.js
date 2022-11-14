import PropTypes from 'prop-types'
import TeaCard from '../TeaCard/TeaCard'

import './TeaContainer.css'
import hero from '../../hero.png'
import { useHistory } from 'react-router-dom'

const TeaContainer = ({ teas }) => {

  const history= useHistory()

  const toAbout = () => {
    history.push('/about')
  }

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
        <img className='hero-img' src={hero} alt='cup of tea in grass leaves' />
      </div>
      <p className='hero-p'>Every cup has a story to share.</p>
      <h3>Explore this season’s selection of single-origin teas and <br/>share your own insights that come with each cup.</h3>
        <button className='about-button' onClick={toAbout}>LEARN MORE</button>
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