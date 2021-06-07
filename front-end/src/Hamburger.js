import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { AuthContext } from './App'

const Hamburger = (props) => {
  const { loggedInUser, setLoggedInUser } = React.useContext(AuthContext)
  return (
    <Menu {...props}>
      <Link to="/Home" id="home" className="menu-item">
        Home
      </Link>
      <Link
        to={loggedInUser == null ? `/login` : `/profile/${loggedInUser.id}`}
        id="Profile"
        className="menu-item"
      >
        Profile
      </Link>
      <Link
        to={
          loggedInUser == null ? `/all-shows` : `/my-shows/${loggedInUser.id}`
        } //path my-shows/17 will be replaced with a new page
        id="My Shows"
        className="menu-item"
      >
        Documentation
      </Link>
      <Link to="/view-users" id="View-users" className="menu-item">
        Visualize
      </Link>
    </Menu>
  )
}
export default Hamburger
