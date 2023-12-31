import React from 'react';
import './home.css';
import profile from './images/profile.jpg';


const Home = () => {
  return (
    <main className='home'>
      <section className='profile_section'>
        <img src={profile} alt='Shivam Mishra' className='profile_image'/>
      </section>
      <section className='intro_section'>
        <h1>Hi There, I'm Shivam Mishra</h1>
        <h2>Data Science Grad Student at Indiana University Bloomington</h2>
        <h3>Software and Data professional having 4+ years of experience</h3>
        <h3>Seeking full-time Data Analyst, Data Engineer positions, starting May 24.</h3>
      </section>
      <section className='tech_stack_section'>
        <h2>Top Skills</h2>
        <ul className='tech_icons'>
          {<img src="https://img.icons8.com/fluency/55/000000/python.png" alt='python'/>}
          {<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_spark_logo_icon_170561.png" alt='spark'/>}
          {<img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/apache_cassandra_logo_icon_169590.png" alt='flask'/>}
          {<img src="https://img.icons8.com/ios-filled/55/000000/flask.png" alt='flask'/>}
          {<img src="https://img.icons8.com/color/55/000000/docker.png" alt='docker'/>}
          {<img src="https://img.icons8.com/color/55/000000/kubernetes.png" alt='kubernetes'/>}
          {<img src="https://img.icons8.com/dotty/55/000000/react.png" alt='react'/>}
          {<img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt='javascript'/>}
          {<img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt='react'/>}
          {<img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt='javascript'/>}
          {<img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='html'/>}
          { <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" alt='javascript'/>}
          { <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/jenkins_logo_icon_170552.png" alt='javascript'/>}
        </ul>
      </section>
    </main>
  );
};

export default Home;
