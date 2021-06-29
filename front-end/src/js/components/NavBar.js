import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../App'
import { FaBars } from 'react-icons/fa'
import '../../css/components/NavBar.css'

const Navbar = () => {
  return (
    <>
      <Link className="Nav">
        <FaBars className="Bars" />

        <div className="NavMenu">
          <Link className="NavLink" to="/" activeStyle>
            Humanities Research Lab
          </Link>
          <Link className="NavLink" to="/Data" activeStyle>
            Data
          </Link>
          <Link className="NavLink" to="/Visualize" activeStyle>
            Visualize
          </Link>
          <Link className="NavLink" to="/Questions" activeStyle>
            FAQ
          </Link>
          <Link className="NavLink" to="/SampleDataUse" activeStyle>
            Sample Data Use
          </Link>
          <Link className="NavLink" to="/Login" activeStyle>
            Login
          </Link>
          <Link className="NavLink" to="/Signup" activeStyle>
            SignUp
          </Link>
          <Link className="NavLink" to="/Dashboard" activeStyle>
            Dashboard
          </Link>
          <Link className="NavLink" to="/Profile" activeStyle>
            Profile
          </Link>
        </div>
      </Link>
    </>
  )
}
export default Navbar
