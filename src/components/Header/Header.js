import { NavLink } from "react-router-dom"
import logo from '../../logo.svg'

import './Header.css'

const Header = () => {
  return (
    <header className="header-container" data-cy='header-container'>
      <NavLink to='/'>
        <img src={logo} data-cy ='logo' alt='coffee cup logo'/>
      </NavLink>
      <nav className='nav-bar' data-cy='nav-bar'>
        <NavLink to='/'>
          <button className='home-button' data-cy='home-button'>Teas</button>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
