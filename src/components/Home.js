import React from 'react';
import './home.css'

const Home = () => {
  return <div className='home_box'>
    <div className='home_left'>
     <div className='home_header'>About Me</div>
     <div className='home_content'>
        Hi There, I'm a prospective student for masters in computer Science and looking for research opportunities
        in the areas of Machine Learning, Artificial Intelligence and Internet of Things. After my undergraduate studies, 
        I'm active in Indian software industry and got the opportunity to work for renowned companies. I continued my research 
        along with my professional career. My aim is to continue my research by pursuing a masters in Computer Science.
        I'm currently working as a developer at Ericsson R&D Bangalore, in Cloud Container Distribution team.
      </div>
      <div className='home_header'>Education</div>
      <div className='home_content'>I have completed my Bachelors in Electronics and Communication from VIT University, India.</div>
      <div className='home_header'>Latest Projects and Updates</div>
      <div className='home_content'>
        <li>Have applied for masters program in computer Science</li>
        <li>Submitted research paper in ETJRI Publication: <br/>A Machine Learning Assisted Optical Multistage Interconnection Network: 
        Performance Analysis and Hardware Demonstration</li>
      </div>
    </div>
    <div className='home_right'>
    <div className='home_header'>Tech Stack</div>
    <div className='home_content'>
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
    <div className='home_header'>Interests</div>
      <div className='home_content'> 
        <li>Machine Learning</li>
        <li>Data Analytics</li>
        <li>Internet of Things</li>
        <li>Computer Networks</li>
      </div>
    </div>
  </div>
      
};

export default Home;
