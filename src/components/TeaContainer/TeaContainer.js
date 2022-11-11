import TeaCard from '../TeaCard/TeaCard'
import './TeaContainer.css';

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
    <section className='tea-container' data-cy='tea-container'>
      {teaCards}
    </section>
  )

}

export default TeaContainer;