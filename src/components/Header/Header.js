import { useHistory } from "react-router-dom"
import logo from '../../logo.svg'

const Header = () => {
  const history = useHistory()

  const goHome = () => {
    history.push('/')
  }
  
  return (
    <header className="header-container" data-cy='header-container'>
      <img src={logo} data-cy ='logo' alt='coffee cup logo' onClick={goHome}/>
      <nav className='nav-bar' data-cy='nav-bar'>
        <p className='nav-button' data-cy='about-button' onClick={goHome}>ABOUT</p>
        <p className='nav-button' data-cy='home-button' onClick={goHome}>TEAS</p>
      </nav>
    </header>
  )
}

export default Header
