import React from 'react';
import './research.css';
import opt1 from './Documents/Hardware_implementation_of_optical_switching_node_for_data_center_networks.pdf'
import opt2 from './Documents/Hardware_implementation_of_contention_aware_optical_switching_node_for_data_center_networks.pdf'
import iot from './Documents/IOT_ENABLED_FARMING_ASSIST_AND_SECURITY_USING_MACHINE_LEARNING.pdf'

function Research() {
  return<div className='research_box'>
      <div className='re_head'>Research Papers</div>

      <div className='re_header'>Hardware implementation of contention aware optical switching node for data center Networks</div>
      <div className='re_sub_header'>Vikas Yadav, Vijayan Nithin, Shivam Mishra, Chandran Hemanth, Rengachary Gopalan Sangeetha</div>
      <div className='pub_date'>[Jun 2019]</div>
      <div className='pub_name'><a href={'https://onlinelibrary.wiley.com/doi/10.1002/mop.31899'} target={'_blank'} rel="noreferrer"> Wiley Publication</a></div>
      <div className='pub_download'><a href={opt2} target={'_blank'} rel="noreferrer"> Download Paper</a></div>

      <div className='re_header'>IoT Enabled Farming Assist and Security Using Machine Learning </div>
      <div className='re_sub_header'>Nithin V., Shivam Mishra, P. Devarubiny and S. Muthulakshmi</div>
      <div className='pub_date'>[May 2019]</div>
      <div className='pub_name'><a href={iot} target={'_blank'} rel="noreferrer"> ARPN Journal</a></div>
      <div className='pub_download'><a href={iot} target={'_blank'} rel="noreferrer"> Download Paper</a></div>

      <div className='re_header'>Hardware implementation of optical switching node for data center networks</div>
      <div className='re_sub_header'>Shivam Mishra, Vikas Yadav, C. Hemanth, R. G. Sangeetha</div>
      <div className='pub_date'>[Nov 2018]</div>
      <div className='pub_name'><a href={'https://onlinelibrary.wiley.com/doi/10.1002/mop.31630'} target={'_blank'} rel="noreferrer"> Wiley Publication</a></div>
      <div className='pub_download'><a href={opt1} target={'_blank'} rel="noreferrer"> Download Paper</a></div>
      
      <div className='pro_head'>Academic Projects</div>

      <div className='re_header'>
       A Machine Learning Assisted Optical Multistage Interconnection Network: Performance Analysis and Hardware
       Demonstration
      </div>
      <div className='pro_content'>
       <li>Increased high volumes of traffic demands at datacenters are handled by all-optical Multistage Interconnection
           Networks (MIN) which are implicitly designed to withstand the same.</li>
       <li>Analyzed Contention resolution mechanism in MINs which becomes a bottleneck to handle such data traffic.</li>
       <li>Electronic signal processing methods which are traditionally used to resolve contention in MIN is replaced with a
           select list of machine learning algorithms for contention resolution in this paper.</li>
       <li>Examined Performance of the entire network in terms of injection rate, average latency by using Machine Learning
           Algorithm and latency distribution is suitability accessed.</li>
       <li>Co-Authored the paper on the same in ETRIJ Publication and submitted it for publication, Manuscript ID etrij-20210182, Jun 2021 – Present.</li>
      </div>

      <div className='re_header'>
         Data Tracker for Blackrock’s Green Package (Internship and Final Year Project)
        </div>
      <div className='pro_content'>
        <li>Devised a data tracker for Blackrock’s Green Package to streamline the reports generation process.</li>
        <li>Wrote Python parsers to onboard data from client’s files to various Databases.</li>
        <li>Ran various analytics on financial data using financial models. Verified and checked the financial data at various
            steps of Analytics Process as well as the data errors as per the Blackrock’s data models.</li>
        <li>Created a JSON response of the final data and sent it to various servers for reports generation.</li>
      </div>

      <div className='re_header'>
        Smart Production and Logistics System (Based on Machine Learning)
      </div>
      <div className='pro_content'>
        <li>Designed smart production and logistics system for efficient Production floor and transportation management.</li>
        <li>Smart Production: Analyzed and surveyed machines in a production line of Nokia Chennai factory.</li>
        <li>Collected the values of Power, voltage, and temperatures on a normal working condition. Trained the Machine
            Learning model (K – nearest neighbors) the collected values.</li>
        <li>Recorded same values for a particular day and was given as input to determine if any machine is behaving
            abnormally and therefore replace faulty machines as a preemptive measure to ensure normal functioning of the
            production line.</li>
        <li>Smart Logistics: Connected GPS and RFID modules on node MCU board and installed it to transport vehicles, where
            each package has RFID code which will automatically be read once the package is kept in vehicle.</li>
        <li>Enabled automated alerts to the manager as text message pertaining to vehicle location and package information
            once the vehicles start from factory as well as automatic scanning of package once the vehicle reach delivery
            location.</li>
        <li>Won IoT Make-a-thon organized by Nokia and availed an internship opportunity at Nokia in year 2018.</li>
        </div>

        <div className='re_header'>
          Home Automation and Security System
         </div>
        <div className='pro_content'>
          <li>Created a user specific smart lock and voice assisted system using Raspberry – pi and MATLAB for smart homes.
              Collected voice samples through raspberry – pi and converted it in data metrices in MATLAB.</li>
          <li>Programmed the system in a way, when user says “Open the door” the voice is compared with already stored
              metrics and a mean square error is calculated. The doors unlocks if the error is less than 0.2, else the owner is
              alerted.</li>
          <li>Employed the same technique for commands such as “Switch on lights” to switch on the lights.</li>
          <li>Won 3rd place for the same in Signal Processing Code-a-thon at VIT Chennai in the year 2017.</li>
         </div>
    </div>;
}

export default Research;