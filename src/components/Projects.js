import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <div className='projects_container'>
      <h2 className='project_head'>Academic Projects</h2>
      
      <div className='project'>
        <h3 className='project_title'>
        Stocks Recommendation System
        </h3>
        <ul className='project_details'>
        <li>Developed an RNN-powered stocks recommendation system, utilizing sentiment analysis and user input parameters to guide beginners in achieving their investment goals efficiently.</li>
        </ul>
      </div>

      <div className='project'>
        <h3 className='project_title'>
        Data Tracker for Blackrock’s Green Package (Internship Project)
        </h3>
        <ul className='project_details'>
        <li>Devised a data tracker for Blackrock’s Green Package to streamline the reports generation process.</li>
        <li>Wrote Python parsers to onboard data from client’s files to various Databases.</li>
       <li>Ran various analytics on financial data using financial models. Verified and checked the financial data at various
        steps of Analytics Process as well as the data errors as per the Blackrock’s data models.</li>
       <li>Created a JSON response of the final data and sent it to various servers for reports generation.</li>
        </ul>
      </div>

      <div className='project'>
        <h3 className='project_title'>
          A Machine Learning Assisted Optical Multistage Interconnection Network
        </h3>
        <ul className='project_details'>
        <li>Increased high volumes of traffic demands at datacenters are handled by all-optical Multistage Interconnection
     Networks (MIN) which are implicitly designed to withstand the same.</li>
    <li>Analyzed Contention resolution mechanism in MINs which becomes a bottleneck to handle such data traffic.</li>
    <li>Electronic signal processing methods which are traditionally used to resolve contention in MIN is replaced with a
     select list of machine learning algorithms for contention resolution in this paper.</li>
   <li>Examined Performance of the entire network in terms of injection rate, average latency by using Machine Learning
     Algorithm and latency distribution is suitability accessed.</li>
   <li>Co-Authored the paper on the same in ETRIJ Publication and submitted it for publication, Manuscript ID etrij-20210182, Jun 2021 – Present.</li>
        </ul>
      </div>

      <div className='project'>
        <h3 className='project_title'>
        Home Automation and Security System
        </h3>
        <ul className='project_details'>
        <li>Created a user specific smart lock and voice assisted system using Raspberry – pi and MATLAB for smart homes.
       Collected voice samples through raspberry – pi and converted it in data metrices in MATLAB.</li>
   <li>Programmed the system in a way, when user says “Open the door” the voice is compared with already stored
       metrics and a mean square error is calculated. The doors unlocks if the error is less than 0.2, else the owner is
        alerted.</li>
    <li>Employed the same technique for commands such as “Switch on lights” to switch on the lights.</li>
    <li>Won 3rd place for the same in Signal Processing Code-a-thon at VIT Chennai in the year 2017.</li>

        </ul>
      </div>

    </div>
  )
}

export default Projects;
