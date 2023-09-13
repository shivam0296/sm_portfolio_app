import React from 'react';
import './home.css'
import img1 from './images/tw.gif'
import img2 from './images/tw2.png'
import img3 from './images/tw3.gif'
import img4 from './images/tw4.png'
import profile from './images/profile4.jpg'
import resume from './Documents/Shivam_Mishra_Resume.pdf'

const Home = () => {
  
  return <>
  <div className='home_box'>
    <div className='intro'>
      <div className='left_tab'>
        <img src={profile} alt=''></img>
        <a href={resume} target={'balnk'}>Resume</a>
      </div>
      <div className='middle'>
        <h1>Hi There,<br/>I'm Shivam Mishra<br/>Data Science Grad Student at IUB</h1>
        <h1>Software and Data professional</h1>
        <h1>I'm looking for full time Data Analyst, <br/>Data Engineer positions, starting May 24</h1>
      </div>
      <div className='right_tab'>
        <li>
          <img src="https://img.icons8.com/fluency/55/000000/python.png" alt='python'/>
        </li>
        <li>
          <img src="https://img.icons8.com/ios-filled/55/000000/flask.png" alt='flask'/>
        </li>
        <li>
          <img src="https://img.icons8.com/color/55/000000/docker.png" alt='docker'/>
        </li>
        <li>
          <img src="https://img.icons8.com/color/55/000000/kubernetes.png" alt='kubernetes'/>
        </li>
        <li>
          <img src="https://img.icons8.com/dotty/55/000000/react.png" alt='react'/>
        </li>
       <li>
          <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt='javascript'/>
       </li>
       <li>
          <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt='react'/>
       </li>
       <li>
          <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt='javascript'/>
       </li>
       <li>
         <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='html'/>
       </li>
       <li>
         <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" alt='javascript'/>
       </li>
      </div>
    </div>
    <div className='about'>
      <h1>Known for my exceptional teamwork and strong communication skills, I thrive in collaborative environments.</h1>
      <h1>Passionate Data Science master’s student at Indiana University Bloomington dedicated to leveraging data to drive strategic business decisions.</h1>
      <h1>With over 3 years of industry experience, I excel in both software development and data analytics, offering expertise in Python scripting for application development, automation, and data analysis.</h1>
      <h1>Proficient in writing SQL scripts to generate insightful analytics reports for stakeholders, facilitating data-driven decision-making.</h1>
      <h1>Hands-on experience in React for creating user-friendly front-end tools that enhance user experiences.</h1>
      <h1>Well-versed in a range of tools and frameworks, including AWS S3, Spark, Hadoop, Postgres, Tableau, and Kubernetes, ensuring robust and scalable solutions.</h1>
      <h1>Adept at understanding complex business operations, effectively collaborating with stakeholders, and crafting comprehensive software documentation.</h1>
      
    </div>
    < div className='pic_box'>
      <li><img src={img4}  alt=''></img></li>
      <li><img src={img1}  alt=''></img></li>
      <li><img src={img2}  alt=''></img></li>
      <li><img src={img3}  alt=''></img></li>
  </div>
  </div>
  
  </>
      
};

export default Home;
