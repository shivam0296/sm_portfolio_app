import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'



const Menu = () => {
  return <div className='tab'>
    <li><Link to="/">Home</Link></li>
    <li><Link to="research">Projects/Research</Link></li>
		<li><Link to="experience">Experience</Link></li>
    <li><Link to="achievements">Achievements</Link></li>
    <li><Link to="hobbies">Hobbies</Link></li>
</div>;
};

export default Menu;
