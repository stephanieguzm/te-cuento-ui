import CommentsContainer from '../CommentsContainer/CommentsContainer'
import Error from '../Error/Error'

import './TeaPage.css'

const TeaPage = ({ teas, selectedTea, returnHome, errorMessage }) => {
  //move find to App
  const tea = teas.find( tea => tea.id === selectedTea)

  return (
    <>
      {!tea
      //you could just render an error message here if you decide to pass the error message
      ? <Error errorMessage={errorMessage} returnHome={returnHome} />
      : <div className='tea-page-container' data-cy='tea-page-container'>
          <div className='tea-info' id={tea.id} data-cy='tea-info'>
            <h3 className='tea-p' data-cy='tea-name'>{tea.name}</h3>
            <p className='tea-p' data-cy='tea-type'>{tea.type} tea</p>
            <p className='tea-p' data-cy='tea-origin'>Origin: {tea.origin}</p>
            <p className='tea-p' data-cy='tea-desc'>{tea.description}</p>
            <p className='tea-p' data-cy='tea-brew'>
              Steep for {tea.brew_time} minutes at {tea.temperature}°F 
            </p>
            <p className='tea-p' data-cy='tea-infusions'>Infusions: {tea.infusions}</p>
            <p className='tea-p' data-cy='tea-caffeine'>
              This tea contains a {tea.caffeine_level} level of caffeine
            </p>
            <img src={tea.img} alt={`${tea.name} tea`} data-cy='tea-img'/>
            <div className='farmer-container' data-cy='farmer-container'>
              <p className='tea-p' data-cy='farmer-name'>Farmer {tea.farmer}</p>
              <img src={tea.farmer_img} alt={`Farmer ${tea.farmer}`} data-cy='farmer-img'/>
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
