import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'


const Menu = () => {
  return <React.Fragment>
    <div className='header'>
      <div className='name'>Shivam Mishra</div>
      <div className='tab'>
        <li><Link to="/">About</Link></li>
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="experience">Experience</Link></li>
        <li><Link to="skills">Skills</Link></li>
      </div>
    </div>
</React.Fragment>
};

export default Menu;
