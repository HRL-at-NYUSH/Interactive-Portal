import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../App'

const NavBar = () => {
  //Feel free to modify code as needed! Just remember that html is inside return statement
  //and JS code goes before 'return' - exactly where this comment is written
  return (
    <Link to="/Home" className="menu-item">
      Home
    </Link>
  )
}
export default NavBar
