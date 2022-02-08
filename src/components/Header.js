import React from 'react';
import Menu from './Menu';
import './header.css'
import img from './images/profile4.jpg'
import resume from './Documents/Resume_Shivam_Mishra.pdf'
import Footer from './Footer'


export const Header = () => {
  return <React.Fragment>
 <div className='background_head'>
 <div className='border_tab'/>
  <div className='side_tab'>
    <div className='img_align'><img src={img} alt="Shivam" className='img' /></div>
    <div className='name'>Shivam Mishra</div>
    <div className='dev'>Software Developer</div>
    <div className='contact_info'>shivam.vit2015@gmail.com</div>
    <div className='contact_info'>+91 7338801060</div>
    <div className='resume'><a href={resume} target='_blank' rel="noreferrer">Resume [Pdf]</a></div>
    <hr/>
    <div className='tech_head'>Tech Stack</div>
    <div className='tech_logos'>
    <img src="https://img.icons8.com/fluency/55/000000/python.png"/>
    <img src="https://img.icons8.com/color/55/000000/kubernetes.png"/>
    <img src="https://img.icons8.com/dotty/55/000000/react.png"/>
    <img src="https://img.icons8.com/ios-filled/55/000000/flask.png"/>
    <img src="https://img.icons8.com/color/55/000000/docker.png"/>
    <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
    </div>
    <div className='tech_head'>Technologies</div>
    <div className='tech_text'> 
    <li>Machine Learning</li>
    <li>Data Analytics</li>
    <li>Internet of Things</li>
    <li>Computer Networks</li>
    </div>
     </div>
     </div>
  <Menu/>
  <Footer/>
  </React.Fragment>
};
