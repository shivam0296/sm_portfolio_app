import React from 'react';
import Footer from './Footer';
import {Header} from './Header'
import './home.css'

const Home = () => {
  return <React.Fragment>
     <Header/>
     <div className='intro_box'>
       <div className='intro_head'>About Me</div>
       <div className='intro_text'>
     Hi There, I'm a prospective student for masters in computer Science.
     After my undergraduate studies, I'm active in Indian software industry and got the opportunity 
     to work for renowned companies. I continued my research along with my professional experience. 
     My aim is to continue my research by enrolling in masters in Computer Science Program.
     I'm currently working as a developer at Ericsson R&D Bangalore, in Cloud Container Distribution team.
       </div>
     </div>
     <div className='edu_box'>
     <div className='edu_head'>Education</div>
     <div className='edu_content'>I have completed my Bachelors in Electronics and Communication from VIT University, India.</div>
     </div>
     <div className='project_box'>
       <div className='project_head'>
      Latest Projects and Updates
      </div>
      <div className='project_content'>
        <li>Have applied for masters program in computer Science</li>
        <li>Submitted research paper in ETJRI Publication</li>
        <li>Started working as a Software Developer</li>
      </div>
     </div>
     <div className='tech_box'>
       <div className='project_head'>
         Latest in Tech
       </div>
     </div>
  </React.Fragment>
      
};

export default Home;
