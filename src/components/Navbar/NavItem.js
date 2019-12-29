import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = ({options}) => {
  return (
    <li>
        <NavLink className="nav-bar__buttons--button" {...(options.url)}>
        {options.icon}<span>{options.text}</span>
        </NavLink>
    </li>
  )
}

export default NavItem
