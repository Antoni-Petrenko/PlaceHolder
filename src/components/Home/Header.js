import React from 'react'
import {FaGithub} from 'react-icons/fa';
import './Header.scss';
const Header = () => {
  return (
    <header className="headaer-home-page">
      <div className="headaer-home-page__box">
        <h1 className='headaer-home-page__text'>Wallcome to my test app !</h1>
        <a className='btn' href="https://github.com/Antoni-Petrenko"><FaGithub color='white'/><span>Github</span></a>
      </div>
    </header>
  )
}

export default Header
