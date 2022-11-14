import { NavLink } from 'react-router-dom'
import logo from '../../logo.svg'

const Header = () => { 
  return (
    <header className="header-container" data-cy='header-container'>
      <NavLink to='/'>
        <img className='logo' src={logo} data-cy ='logo' alt='coffee cup logo'/>
      </NavLink>
      <nav className='nav-bar' data-cy='nav-bar'>
        <NavLink to='/'>
          <p className='nav-button' data-cy='home-button'>TEAS</p>
        </NavLink>
        <NavLink to='/about'>
          <p className='nav-button' data-cy='about-button'>ABOUT</p>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
