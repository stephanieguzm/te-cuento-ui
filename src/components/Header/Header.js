import { NavLink } from "react-router-dom"

import './Header.css'

const Header = () => {
  return (
    <header className="header-container" data-cy='header-container'>
      {/* <img src={} data-cy='logo' alt='coffee cup logo'/> */}
      <NavLink to='/'>
        <h1 className='app-title' data-cy='app-title'>Té Cuento</h1>
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
