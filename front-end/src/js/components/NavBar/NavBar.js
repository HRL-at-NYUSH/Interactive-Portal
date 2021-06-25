import React from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../App'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavBarElements';
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' activeStyle>
            Humanities Research Lab
          </NavLink>
          <NavLink to='/Data' activeStyle>
            Data
          </NavLink>
          <NavLink to='/Visualize' activeStyle>
            Visualize
          </NavLink>
          <NavLink to='/Questions' activeStyle>
            FAQ
          </NavLink>
          <NavLink to='/SampleDataUse' activeStyle>
            Sample Data Use
          </NavLink>
          <NavLink to='/Login' activeStyle>
            Login
          </NavLink>
          <NavLink to='/Signup' activeStyle>
            SignUp
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
