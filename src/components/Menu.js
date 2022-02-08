import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css'



const Menu = () => {
  return <div className='tab'>
    <div className='links'>
    <Link to="/">Home</Link>
    <Link to="research">Projects/Research</Link>
		<Link to="experience">Experience</Link>
    <Link to="achievements">Achievements</Link>
    <Link to="pics">Hobbies</Link>
    </div>
</div>;
};

export default Menu;
