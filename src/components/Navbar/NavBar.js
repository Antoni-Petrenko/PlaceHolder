import React,{useContext} from 'react';
import NavItem from './NavItem';
import Context from '../context';
import './navbar.scss';
import {FaGithub,FaLinkedin} from 'react-icons/fa';

const NavBar = () => {
    const {navActive,navOptions}=useContext(Context);

  return (
    <nav className={navActive?"nav-bar active":"nav-bar"}>
        <div className="logo">{navActive?<h2>{`<MyApp/>`}</h2>:<h2>{`M`}</h2>}</div>

        <ul className="nav-bar__buttons">
            {navOptions.map(item=>(<NavItem key={item.id} options={item}/>)
            )}
        </ul>
        <ul className="nav-bar__soc-media">
            <li><a href="https://github.com/Antoni-Petrenko"><span><FaGithub color='white'/></span></a></li>
            <li>
                <a href="https://www.linkedin.com/in/anton-petrenko-9a0961101/"><span><FaLinkedin color='white'/></span></a></li>
        </ul>
    </nav>
  )
}

export default NavBar
