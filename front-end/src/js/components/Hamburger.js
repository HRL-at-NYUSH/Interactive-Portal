import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../App'

const Hamburger = (props) => {
  //const { loggedInUser, setLoggedInUser } = React.useContext(AuthContext)
  return (
    <Menu {...props}>
      <Link to="/Home" className="menu-item">
        Home
      </Link>
      <Link to="/Profile" className="menu-item">
        Profile
      </Link>

      <Link
        to="/Data"
        /*
        to={loggedInUser == null ? `/Login` : `/profile/${loggedInUser.id}`}
        id="Profile"
        className="menu-item"
        */
      >
        Data
      </Link>
      <Link
        to="/Visualize"
        /*to={
          loggedInUser == null ? `/Visualize` : `/profiles/${loggedInUser.id}`
        } 
        className="menu-item"
        */
      >
        Visualize
      </Link>
      <Link to="/Questions" className="menu-item">
        FAQ
      </Link>
      <Link to="/Login" className="menu-item">
        Login
      </Link>
      <Link to="/Signup" className="menu-item">
        Signup
      </Link>
      <Link to="/SampleDataUse" className="menu-item">
        Sample Data Use
      </Link>
    </Menu>
  )
}
export default Hamburger
