import CommentsContainer from '../CommentsContainer/CommentsContainer'
import Error from '../Error/Error'
import './TeaPage.css'


const TeaPage = ({ teas, selectedTea, returnHome, errorMessage }) => {
  const tea = teas.find( tea => tea.id === selectedTea)

  return (
    <>
      {!tea
      ? <Error errorMessage={errorMessage} returnHome={returnHome} />
      : <div className='tea-page-container'>
          <div className='tea-info' id={tea.id}>
            <h3>{tea.name}</h3>
            <p>{tea.description}</p>
            <p>Originated from {tea.origin}</p>
            <h4>Make the perfect cup</h4>
            <p>Brew at {tea.temperature} for {tea.brewTime} minutes</p>
            <img src={tea.img} alt={tea.name}/>
          </div>
        <div className='comments-container'>
          <CommentsContainer 
            tea_id={selectedTea}
            returnHome={returnHome}
          />
        </div>
      </div>
      }
    </>
  )
}

export default TeaPage;
