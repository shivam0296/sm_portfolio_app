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
        <li>Developed an RNN-powered stocks recommendation system, utilizing sentiment analysis and user input parameters to guide beginners in achieving their investment goals efficiently.</li><br/>
        <li>Key Features<br/><br/>
            1. Predictive analysis of stock prices using ARIMA and LSTM models.<br/>
            2. Sentiment analysis using VADER on social media and news data.<br/>
            3. Web-based platform for insightful stock investment decisions.</li><br/>
        <a href={"https://github.com/shivam0296/stocks-recommendation-system?tab=readme-ov-file"} target='_blank' rel='noopener noreferrer'>Project's Github</a>
        {<img src="https://i.imgur.com/9hYIVFF.png" alt='Stocks'/>}
        {<img src="https://i.imgur.com/4fxMs6J.png" alt='Stocks'/>}
        {<img src="https://i.imgur.com/RvfwYIT.png" alt='Stocks'/>}
        </ul>
      </div>
    
      <div className='project'>
        <h3 className='project_title'>
        Netflix Movie Data Analysis on Tableau
        </h3>
        <ul className='project_details'>
          <li>Developed a comprehensive dashboard for Netflix movies and TV shows, featuring a range of metrics and detailed information.</li>
          <li>This dashboard is designed to provide an insightful overview of content trends, viewer preferences, and other key data points.</li><br/>
        <a href={"https://public.tableau.com/views/Netflix_Dashboard_17051211627420/Netflix?:language=en-GB&:display_count=n&:origin=viz_share_link"} target='_blank' rel='noopener noreferrer'>Link to Dashboard</a>
        <br/>
        {<img src="https://i.imgur.com/Z0SFvA8.png" alt='Netflix Dashboard'/>}
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
        </ul><br/>
        <a href={"https://onlinelibrary.wiley.com/doi/full/10.4218/etrij.2021-0182"} target='_blank' rel='noopener noreferrer'>Download Paper</a> 
        {<img src="https://i.imgur.com/WtYPHCa.png" alt='ML'/>}
        {<img src="https://i.imgur.com/5Fa7w7S.png" alt='ML'/>}
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
    

    </div>
  )
}

export default Projects;
