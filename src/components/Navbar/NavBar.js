import React,{useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome, FaCommentAlt,FaUsers,FaGithub,FaLinkedin} from 'react-icons/fa';
import { IoIosAlbums,IoMdPhotos,IoIosWarning } from "react-icons/io";
import { MdLocalPostOffice } from "react-icons/md";
import Context from '../context';
import './navbar.scss';

const NavBar = () => {
    const {navActive}=useContext(Context);
  return (
    <nav className={navActive?"nav-bar active":"nav-bar"}>
        <div className="logo">{navActive?<h1>{`<MyApp/>`}</h1>:<h1>{`M`}</h1>}</div>

        <ul className="nav-bar__buttons">
            <li>
                <NavLink className="nav-bar__buttons--button" exact to='/'>
                    <FaHome className='icons'/><span>Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-bar__buttons--button" to='/albums'>
                    <IoIosAlbums className='icons'/><span>albums</span>
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-bar__buttons--button" to='/comments'>
                    <FaCommentAlt className='icons'/><span>comments</span>
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-bar__buttons--button" to='/photos'>
                   <IoMdPhotos className='icons'/><span>photos</span>
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-bar__buttons--button" to='/posts'>
                    <MdLocalPostOffice className='icons'/><span>posts</span>
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-bar__buttons--button" to='/todos'>
                    <IoIosWarning className='icons'/><span>todos</span>
                </NavLink>
            </li>
            <li>
                <NavLink className="nav-bar__buttons--button" to='/users'>
                    <FaUsers className='icons'/><span>users</span>
                </NavLink>
            </li>
        </ul>
        <ul className="nav-bar__soc-media">
            <li><a href="https://github.com/Antoni-Petrenko"><span><FaGithub color='white'/></span></a></li>
            <li>
                <a href="https://www.linkedin.com/feed/"><span><FaLinkedin color='white'/></span></a></li>
        </ul>
    </nav>
  )
}

export default NavBar
