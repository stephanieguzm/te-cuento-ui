import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-container">
      {/* <img src={}/> */}
      <NavLink to='/'>
      <h1>Te Cuento</h1>
      </NavLink>
      <NavLink to='/'>Teas</NavLink>
    </header>
  )
}

export default Header
