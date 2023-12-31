import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <main>
    <div className='exp_box'>
      <h2 className='exp_head'>Professional Experience [4+ Years]</h2>


      <div className='exp_entry'>
        <div>
          <div className='exp_header'>
            <div className='job_name'>Rocket Central</div>
            <div className='job_date'>May 2023 to Aug 2023</div>
          </div>
          <div className='exp_sub_header'>Data Engineer Intern, Detroit, Michigan, United States</div>
          <ul className='exp_content'>
          <p>• Designed efficient ETL pipelines with AWS Glue, leading to substantial cost savings while managing large datasets.</p>
         <p>• Leveraged PySpark to expertly process and analyze substantial customer datasets, delivering impactful insights through informative dashboards.</p>
         <p>• Engineered robust CI/CD pipelines utilizing Jenkins, CircleCI, and Git to automate and ensure the reliability of job deployments.</p>
          </ul>
        </div>
      </div>
      
      <div className='exp_entry'>
        <div>
          <div className='exp_header'>
            <div className='job_name'>Indiana University Bloomington</div>
            <div className='job_date'>Aug 2022 to May 2023</div>
          </div>
          <div className='exp_sub_header'>Research Assistant, Bloomington, IN, United States</div>
          <ul className='exp_content'>
          <p>• Worked As a Graduate Research Assistant at O’Neill School of Public & Environmental Affairs under professor Kosali Simon and Analyzed transparency in coverage data for health insurers across United States.</p>
         <p>• Proficiently designed and implemented Python-based data wrangling code, enabling the extraction of extensive insurance data from diverse online sources.</p>
         <p>• Performed extensive data cleaning, aggregation, transformation, and visualization tasks on transparency in coverage data collected from various health insurers, supporting research goals with precision and efficiency</p>
          </ul>
        </div>
      </div>

      <div className='exp_entry'>
        <div>
          <div className='exp_header'>
            <div className='job_name'>Ericsson</div>
            <div className='job_date'>Jun 2021 to Aug 2022</div>
          </div>
          <div className='exp_sub_header'>Developer - Cloud Container Distribution, Bangalore, Inida</div>
          <ul className='exp_content'>
          <p>• Effectively oversaw the management of containerized applications within Ericsson products through Kubernetes and OpenStack deployments and bolstered the software reliability.</p>
         <p>• Spearheaded automation initiatives utilizing Python and Golang to efficiently update versions across extensive YAML and JSON file sets. Achieved an outstanding 80% enhancement in process efficiency.</p>
          </ul>
        </div>
      </div>
      
      <div className='exp_entry'>
        <div>
          <div className='exp_header'>
            <div className='job_name'>Blackrock</div>
            <div className='job_date'>Jun 2019 to Jul 2021</div>
          </div>
          <div className='exp_sub_header'> Data Analyst - Data & AI, Mumbai, India</div>
          <ul className='exp_content'>
          <p>• Developed a file monitoring tool using Python, enabling seamless data management from a diverse range of Index vendors. Through the implementation of efficient algorithms, achieved an impressive 60% boost in process efficiency.</p>
         <p>• Employed Spark and SQL to meticulously analyze production errors within clients' analytics reports, resulting in a substantial reduction in data errors and enhanced data quality and reliability.</p>
          <p>• Developed and managed data pipelines for the extraction of extensive client portfolio data, seamlessly transferring it to BlackRock's database for advanced risk analytics.</p>
          </ul>
        </div>
      </div>

    </div>
    </main>
  );
};

export default Experience;
