import React from 'react';
import './header.css'
import img from './images/profile4.jpg'
import resume from './Documents/Shivam_Mishra_Resume.pdf'
import { Link } from 'react-router-dom';


export const Header = () => {
  // return<div className='side_tab'>
  //   <div className='left_tab'>
  //    <img src={img} className='img' alt='Shivam Mishra'/>
  //    <div className='information'>
  //      <div className='name'>Shivam Mishra</div>
  //      <div className='dev'>Data Science Graduate Student</div>
  //      <div className='dev'>Indiana University Bloomington</div>
  //      <div className='contact_info'> shimish@iu.edu</div>
  //      <div className='resume'><a href={resume} target='_blank' rel="noreferrer">Resume</a></div>
  //     </div>
  //     </div>
  //     <div className='connect'>
  //      <li><a href={'https://www.linkedin.com/in/shivam-mishra-a39820160/'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/ios-filled/45/000000/linkedin.png" alt='linkedin'/></a></li>
  //      <li><a href={'https://twitter.com/shivam0296'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/fluency-systems-filled/45/000000/twitter.png" alt='twitter'/></a></li>
  //      <li><a href={'https://github.com/shivam0296'} target={'_blank'} rel="noreferrer"><img src={"https://img.icons8.com/ios-filled/45/000000/github.png"} alt='github'/></a></li>
  //     </div>
  // </div>;
  return <React.Fragment>
    <div className='header'>
    <div className='name'>Shivam Mishra</div>
      <div className='tab'>
        <li><Link to="/">About</Link></li>
        <li><Link to="research">Research</Link></li>
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="experience">Experience</Link></li>
        <li><Link to="achievements">Achievements</Link></li>
        <li><Link to="hobbies">Hobbies</Link></li>
      </div>
      <div className='logo'>
        <a href={'https://www.linkedin.com/in/shivam-mishra-a39820160/'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/ios-filled/45/000000/linkedin.png" alt='linkedin'/></a>
        <a href={'https://twitter.com/shivam0296'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/fluency-systems-filled/45/000000/twitter.png" alt='twitter'/></a>
        <a href={'https://github.com/shivam0296'} target={'_blank'} rel="noreferrer"><img src={"https://img.icons8.com/ios-filled/45/000000/github.png"} alt='github'/></a>
      </div>
    </div>
  </React.Fragment>
};
