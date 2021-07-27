import React from 'react';
import './Dropdown.css';

function DropNav(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  );
}

export default DropNav;
