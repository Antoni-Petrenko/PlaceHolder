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
    <nav className={navActive?"nav-bar":"nav-bar active"}>
        <div className="logo">{navActive?<h1>{`<MyApp/>`}</h1>:null}</div>
        <ul className="nav-bar__buttons">
            <li className="nav-bar__buttons--batton">
                <NavLink to='/'>
                    <span className='icons'><FaHome/></span> Home
                </NavLink>
            </li>
            <li className="nav-bar__buttons--batton">
                <NavLink to='/albums'>
                    <span className='icons'><IoIosAlbums/></span>albums
                </NavLink>
            </li>
            <li className="nav-bar__buttons--batton">
                <NavLink to='/comments'>
                    <span className='icons'><FaCommentAlt/></span>comments
                </NavLink>
            </li>
            <li className="nav-bar__buttons--batton">
                <NavLink to='/photos'>
                    <span className='icons'><IoMdPhotos/></span>photos
                </NavLink>
            </li>
            <li className="nav-bar__buttons--batton">
                <NavLink to='/posts'>
                    <span className='icons'><MdLocalPostOffice/></span>posts
                </NavLink>
            </li>
            <li className="nav-bar__buttons--batton">
                <NavLink to='/todos'>
                    <span className='icons'><IoIosWarning/></span>todos
                </NavLink>
            </li>
            <li className="nav-bar__buttons--batton">
                <NavLink to='/users'>
                    <span className='icons'><FaUsers/></span>users
                </NavLink>
            </li>
        </ul>
        <ul className="nav-bar__soc-media">
            <li><span><FaGithub/></span></li>
            <li><span><FaLinkedin/></span></li>
        </ul>
    </nav>
  )
}

export default NavBar
