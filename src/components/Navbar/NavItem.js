import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';
import Context from '../context';
const NavItem = ({options},) => {
  const {navActive,changeNavActiv}=useContext(Context);
  return (
    <li>
        <NavLink onClick={()=>(
            navActive?setTimeout(changeNavActiv,650):null
          )} 
          className="nav-bar__buttons--button" {...(options.url)}>
            {options.icon}<span>{options.text}</span>
        </NavLink>
    </li>
  )
}

export default NavItem
