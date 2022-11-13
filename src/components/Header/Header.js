import { useHistory } from "react-router-dom"
import logo from '../../logo.svg'

const Header = () => {
  const history = useHistory()

  const toHome = () => {
    history.push('/')
  }

  const toAbout = () => {
    history.push('/about')
  }
  
  return (
    <header className="header-container" data-cy='header-container'>
      <img className='logo' src={logo} data-cy ='logo' alt='coffee cup logo' onClick={toHome}/>
      <nav className='nav-bar' data-cy='nav-bar'>
        <p className='nav-button' data-cy='home-button' onClick={toHome}>TEAS</p>
        <p className='nav-button' data-cy='about-button' onClick={toAbout}>ABOUT</p>
      </nav>
    </header>
  )
}

export default Header
