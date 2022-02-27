import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'


const Menu = () => {
  return <React.Fragment>
    <div className='tab'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="research">Research</Link></li>
    <li><Link to="projects">Projects</Link></li>
		<li><Link to="experience">Experience</Link></li>
    <li><Link to="achievements">Achievements</Link></li>
    <li><Link to="hobbies">Hobbies</Link></li>
</div>
</React.Fragment>
};

export default Menu;
