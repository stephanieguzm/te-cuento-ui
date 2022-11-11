import CommentsContainer from '../CommentsContainer/CommentsContainer'
import Error from '../Error/Error'
import './TeaPage.css'


const TeaPage = ({ teas, selectedTea, returnHome, errorMessage }) => {
  const tea = teas.find( tea => tea.id === selectedTea)

  return (
    <>
      {!tea
      ? <Error errorMessage={errorMessage} returnHome={returnHome} />
      : <div className='tea-page-container' data-cy='tea-page-container'>
          <div className='tea-info' id={tea.id} data-cy='tea-info'>
            <h3 className='tea-p' data-cy='tea-name'>{tea.name}</h3>
            <p className='tea-p' data-cy='tea-desc'>{tea.description}</p>
            <p className='tea-p' data-cy='tea-origin'>Originated from {tea.origin}</p>
            <p className='tea-p' data-cy='tea-brew'>Brew at {tea.temperature} for {tea.brewTime} minutes</p>
            <img src={tea.img} alt={tea.name} data-cy='tea-img'/>
            <div>
              <p className='tea-p'>Farmer {tea.farmer}</p>
              <img src={tea.farmer_img} alt={`Farmer ${tea.farmer}`}data-cy='farmer-img'/>
            </div>
          </div>
        <div className='comments-container' data-cy='comments-container'>
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
