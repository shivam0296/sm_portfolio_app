import React from 'react';
import './home.css'

const Home = () => {
  return <div className='home_box'>
    <div className='home_left'>
     <div className='home_header'>About Me</div>
     <div className='home_content'>
     <div className='intro'>Hi, I'm an MS DS grad student at Luddy School of Informatics, Indiana University.</div>
     <div className='intro_content'>
        <div>💼 Currently I’m working as a graduate research assistant at O'Neill School of Public & Environmental Affairs.</div>
        <div>🌎I love to solve real world problems using technology , and always challenge myself to learn about emerging problems and ways to solve them.</div>
        <div>👨🏻‍💻I have 3 years of work experience where I got opportunities to design efficient solutions for various problems at team and organization level and helped the firm improve the product delivery efficiency and reduce the errors in the reports.</div>
        <div>💻 My skillsets are as below:</div>
        <div className='skills'>
            <div>🖥 <mark>Programming languages:</mark> C, C++, Python, Golang, Java, SQL</div>
            <div>📚<mark>Libraries/Frameworks:</mark> Pandas, Scikit-learn, Flask, NumPy, Spark, Hadoop</div>
            <div>⚙️<mark>Other Tools & Databases:</mark> MATLAB, Tableau, Splunk, Git bash, Grafana, Kubernetes, MySQL, AWS</div>
    </div>
    <div>
    🔎Currently I'm looking for Summer Internships for Data Scientist and Software Engineer roles.
    </div>
    <div>
    🏆 I'm confident and highly motivated and I believe that my professional experience and skills will enable me to perform all the responsibilities diligently and help the organization solve business problems efficiently.
    </div>
    </div>
      </div>
    </div>
    <div className='home_right'>
    <div className='home_header'>Tech Stack</div>
    <div className='home_content_logos'>
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
    <li>
       <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt='react'/>
       <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt='javascript'/>
    </li>
    <li>
       <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt='html'/>
       <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" alt='javascript'/>
    </li>
    </div>
    <div className='home_header'>Interests</div>
      <div className='home_content_interest'> 
        <li>Machine Learning</li>
        <li>Data Science and Analytics</li>
        <li>Software development</li>
        <li>Cloud and Big Data</li>
      </div>
    </div>
  </div>
      
};

export default Home;
