import { useHistory } from "react-router-dom"
import logo from '../../logo.svg'

import './Header.css'

const Header = () => {
  const history = useHistory()

  const returnHome = () => {
    history.push('/')
  }
  
  return (
    <header className="header-container" data-cy='header-container'>
      <img src={logo} data-cy ='logo' alt='coffee cup logo' onClick={returnHome}/>
      <nav className='nav-bar' data-cy='nav-bar'>
        <p className='about-button' data-cy='about-button' onClick={returnHome}>About</p>
        <p className='home-button' data-cy='home-button' onClick={returnHome}>TEAS</p>

      </nav>
    </header>
  )
}

export default Header
