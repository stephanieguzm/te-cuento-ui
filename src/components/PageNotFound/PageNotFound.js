import { useHistory } from 'react-router-dom'

const PageNotFound = () => {
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }

  return (
    <section className='pg-not-found-container' data-cy='pg-not-found'>
      <h3 className='pg-not-found-message' data-cy='pg-not-found-message'>You've found a page that doesn't exist. Go back home or visit these helpful resources below.</h3>
      <button className='home-button' data-cy='not-found-home-button' onClick={goHome}>HOME</button>
      <a className='links' data-cy='links' href="https://journal.rishi-tea.com/what-is-tea-origins-of-camellia-sinensis/">What is Tea? Origins of Camellia Sinensis</a>
      <a className='links' data-cy='links' href="https://journal.rishi-tea.com/why-is-water-temperature-important-when-brewing-tea/">The Importance of Water Temperature in Tea Brewing</a>
      <a className='links' data-cy='links' href="https://journal.rishi-tea.com/how-to-brew-tea/">Tea Brewing Techniques</a>
    </section>
  )
}

export default PageNotFound