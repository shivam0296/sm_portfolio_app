import React from 'react';
import './experience.css'


const Experience = () => {
  return <div className='exp_box'>
    <div className='exp_head'>Professional Experience [ 2+ Years]</div>
    <div className='exp_header'><div className='job_name'>Ericsson</div> <div className='job_date'>Jun 2021 to Present</div></div>
    <div className='exp_sub_header'> Developer - Cloud Container Distribution</div>
    <div className='exp_content'>
        <li>- Managing and orchestrating all containerized applications deployed in Ericsson products using Kubernetes, Helm, and open stack heat deployments.</li>
        <li>- Handling Splunk Data for a platform for analyzing and managing data related to a project using open-source tools
              such as Kube state metrics and Node Exporter and adding efficient Python code for various analytics.</li>
        <li>- Adding Golang code components to manage ingress, networking, storage, monitoring using Kubernetes.</li>
        <li>- Developing projects to automate version update process on large set of yaml and json files using efficient
              algorithms in Python/Golang programming languages.</li>
      </div>
    <div className='exp_header'><div className='job_name'>Blackrock</div> <div className='job_date'>Jul-2019 to Jun-2021</div></div>
    <div className='exp_sub_header'>Analyst - Data & AI</div>
    <div className='exp_content'>
       <li>- Built data monitoring tools to analyze and read the data coming from the files of various Aladdin clients by using
              Python and Angular for Blackrock’s Green package teams for Analytics and track the service level agreements.</li>
       <li>- Performed predictive analysis on financial data for proper delivery of Green Package reports to Blackrock’s clients.</li>
       <li>- Created a file monitoring tool to manage the data coming from the large set of files of various Index vendors to
              perform benchmark analytics by designing efficient algorithm and coding the same in Python.</li>
       <li>- Automated the Impact Analysis reports generation process to analyze production failures by collecting large set of
              information from various databases to create an informative report make the Green Package Production efficient.</li>
      </div>
      <div className='exp_header'><div className='job_name'>Blackrock</div> <div className='job_date'>Jan-2019 to Jul-2019</div></div>
      <div className='exp_sub_header'>Technology Intern - Data & AI</div>
      <div className='exp_content'>
          <li>- Converted old code bases in Perl language to more efficient Python language to improve productions efficiency.</li>
          <li>- Explored various tools and languages such as Python, Angular, Git, Tableau to implement on financial data such as
              Portfolios, Securities, and risk analytics.</li>
        </div>
      <div className='exp_header'><div className='job_name'>Nokia Solutions</div> <div className='job_date'>May-2018 to Jul-2018</div></div>
      <div className='exp_sub_header'>Intern - Technology Team</div>
      <div className='exp_content'>
          <li>- Programmed a smart image to text converter for Nokia’s logistics using various frameworks and languages such as
                Python, Pandas, NumPy and scikit-learn.</li>
        </div>
      <div className='exp_header'><div className='job_name'>VIT University</div> <div className='job_date'>Jun-2017 to Nov-2017</div></div>
      <div className='exp_sub_header'>Teaching Assistant - Data Structures and Algorithms</div>
      <div className='exp_content'>
          <li>- Designed Assignments of Programming and Data structures for the junior students and helped students with their
                academic projects by discussing their ideas and by providing them necessary references.</li>
          <li>- Organized Doubt solving sessions for the students of Programming and Data structures.</li>
        </div>
  </div>;
};

export default Experience;
