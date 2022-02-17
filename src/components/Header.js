import React from 'react';
import './header.css'
import img from './images/profile4.jpg'
import resume from './Documents/Resume_Shivam_Mishra.pdf'


export const Header = () => {
  return<div className='side_tab'>
    <div className='left_tab'>
     <div className='img_align'><img src={img} className='img' alt='Shivam Mishra'/></div>
     <div className='name'>Shivam Mishra</div>
     <div className='dev'>Software Developer</div>
     <div className='contact_info'>shivam4dev@gmail.com</div>
     <div className='resume'><a href={resume} target='_blank' rel="noreferrer">Resume</a></div>
    </div>
    <div className='middle_tab1'>
     <div className='tech_head'>Tech Stack</div>
       <li>
         <img src="https://img.icons8.com/fluency/55/000000/python.png" alt='python'/>
         <img src="https://img.icons8.com/ios-filled/55/000000/flask.png" alt='flask'/>
        </li>
       <li>
         <img src="https://img.icons8.com/color/55/000000/docker.png" alt='docker'/>
         <img src="https://img.icons8.com/color/55/000000/kubernetes.png" alt='kubernetes'/>
        </li>
        <li>
         <img src="https://img.icons8.com/dotty/55/000000/react.png" alt='react'/>
         <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt='javascript'/>
        </li>
    </div>
    <div className='middle_tab2'>
      <div className='interests'>Interests</div>
      <div className='tech_text'> 
        <li>Machine Learning</li>
        <li>Data Analytics</li>
        <li>Internet of Things</li>
        <li>Computer Networks</li>
      </div>
    </div>
    <div className='right_tab'>
     <li><a href={'https://www.linkedin.com/in/shivam-mishra-a39820160/'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/ios-filled/30/000000/linkedin.png" alt='linkedin'/></a></li>
     <li><a href={'/'} target={'_blank'} rel="noreferrer"><img src="https://img.icons8.com/fluency-systems-filled/30/000000/twitter.png" alt='twitter'/></a></li>
     <li><a href={'/'} target={'_blank'} rel="noreferrer"><img src={"https://img.icons8.com/fluency-systems-filled/30/000000/instagram-new.png"} alt='instagram'/></a></li>
     <li><a href={'/'} target={'_blank'} rel="noreferrer"><img src={"https://img.icons8.com/material/30/000000/facebook-new.png"} alt='fb'/></a></li>
    </div>
  </div>;
};
