import React from 'react';
import './header.css'
import img from './images/profile4.jpg'
import resume from './Documents/Resume_Shivam_Mishra.pdf'


export const Header = () => {
  return<div className='side_tab'>
    <div className='left_tab'>
     <img src={img} className='img' alt='Shivam Mishra'/>
     <div className='information'>
       <div className='name'>Shivam Mishra</div>
       <div className='dev'>Software Developer</div>
       <div className='contact_info'> shivam.vit2015@gmail.com</div>
       <div className='resume'><a href={resume} target='_blank' rel="noreferrer">Resume</a></div>
      </div>
      </div>
      <div className='connect'>
       <li><a href={'https://www.linkedin.com/in/shivam-mishra-a39820160/'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/ios-filled/30/000000/linkedin.png" alt='linkedin'/></a></li>
       <li><a href={'/'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/fluency-systems-filled/30/000000/twitter.png" alt='twitter'/></a></li>
       <li><a href={'https://www.instagram.com/shivam.m_7/'} target={'_blank'} rel="noreferrer"><img src={"https://img.icons8.com/fluency-systems-filled/30/000000/instagram-new.png"} alt='instagram'/></a></li>
       <li><a href={'https://www.facebook.com/profile.php?id=100070016875469'} target={'_blank'} rel="noreferrer"><img src={"https://img.icons8.com/material/30/000000/facebook-new.png"} alt='fb'/></a></li>
      </div>
  </div>;
};
