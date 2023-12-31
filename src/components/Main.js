import React from 'react';
import { Link, Element } from 'react-scroll';
import Home from './Home';       
import Experience from './Experience';
import Projects from './Projects';
import resume from './Documents/Shivam_Mishra_Resume.pdf';
import './main.css'


const Main = () => {
  return (
    <div>
    <header className='header'>
      <div className='container'>
        <div className='name'>
          <Link to="/">Shivam Mishra</Link>
        </div>
        <nav className='navigation'>
          <ul className='nav-links'>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
              Projects
            </Link>
          </li>
            <a href={resume} target='_blank' rel='noopener noreferrer' className='resume_button'>Resume</a>
          </ul>
        </nav>

        <div className='social-icons'>
          <a href={'https://www.linkedin.com/in/shivam-mishra-a39820160/'} target={'_blank'} rel="noreferrer">
            <img src="https://img.icons8.com/color/48/linkedin.png" alt='LinkedIn'/>
          </a>
          <a href={'https://twitter.com/shivam0296'} target={'_blank'} rel="noreferrer">
            <img src="https://img.icons8.com/color/48/twitter.png" alt='Twitter'/>
          </a>
          <a href={'https://github.com/shivam0296'} target={'_blank'} rel="noreferrer">
            <img src="https://img.icons8.com/color/48/github.png" alt='GitHub'/>
          </a>
        </div>
      </div>
    </header>

    <Element name="home">
        <Home />
    </Element>

    <Element name="experience">
    <Experience />
    </Element>

    <Element name="projects">
    <Projects />
    </Element>
    </div>
  );
};

export default Main;
