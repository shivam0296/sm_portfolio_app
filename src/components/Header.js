import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import resume from './Documents/Shivam_Mishra_Resume.pdf';

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='name'>
          <Link to="/">Shivam Mishra</Link>
        </div>
        <nav className='navigation'>
          <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            {/* <li><Link to="/research">Research</Link></li> */}
            {/* <li><Link to="/hobbies">Hobbies</Link></li> */}
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
  );
};
