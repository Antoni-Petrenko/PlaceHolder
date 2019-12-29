import React from 'react'
import './sectionAbout.scss';
import {FaLinkedin} from 'react-icons/fa';
const AboutMe=()=>{
    return(
        <section className='section-about'>
            <div className="section-about__header-text">
                <h2>Let's get acquainted!</h2></div>
                <h3 className='section-about__heading-tertiary' >Who am I ?</h3>
                <p className='section-about__paragraph'>
                    My name is Anthony, I'm a beginner front-end developer who looking for 
                    like-minded persons, with passion for programming.
                </p>
                <h3 className='section-about__heading-tertiary' >Localization</h3>
                <p className='section-about__paragraph'>I am from Dnipro, Ukraine. I studied in Kharkiv and Krakow. Localization doesn't matter for me. I ready for relocation in any point in the world. The most important for me, my future team!</p>
                <div className='section-about__btn-box'>
                    <a className='btn' href="https://github.com/Antoni-Petrenko"><FaLinkedin color='white'/><span>Linkedin</span></a>
                </div>
                
        </section>
    )
}

const Main = () => {
  return (
    <main>
        <AboutMe/>
    </main>
  )
}

export default Main
