import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-container" data-cy='header-container'>
      {/* <img src={}/> */}
      <NavLink to='/'>
        <h1 className='app-title' data-cy='app-title'>Te Cuento</h1>
      </NavLink>
      <nav className='nav-bar' data-cy='nav-bar'>
        <NavLink to='/'>
          <button className='home-button'>Teas</button>
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
