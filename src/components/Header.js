import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';


export const Header = () => {
  return <React.Fragment>
    <div className='header'>
    <div className='name'>Shivam Mishra</div>
      <div className='tab'>
        <li><Link to="/">About</Link></li>
        <li><Link to="experience">Experience</Link></li>
        <li><Link to="projects">Projects</Link></li>
      </div>
      <div className='logo'>
        <a href={'https://www.linkedin.com/in/shivam-mishra-a39820160/'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/ios-filled/45/000000/linkedin.png" alt='linkedin'/></a>
        <a href={'https://twitter.com/shivam0296'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/fluency-systems-filled/45/000000/twitter.png" alt='twitter'/></a>
        <a href={'https://github.com/shivam0296'} target={'_blank'} rel="noreferrer"><img src={"https://img.icons8.com/ios-filled/45/000000/github.png"} alt='github'/></a>
      </div>
    </div>
  </React.Fragment>
};
