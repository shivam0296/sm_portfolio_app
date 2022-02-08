import React from 'react';
import { Header } from './Header';
import './achievements.css'
import view_cert from './Documents/Achievements-mishra-shivam.pdf'

const Achievements = () => {
  return <div>
      <Header/>
      <div className='a_box'>
        <div className='a_head'>
          <div className='a_head_text'>Achievements</div>
          <div className='a_view'><a href={view_cert} target='_blank'>View Certificates</a></div>
        </div>
        <div className='diff_box'>
          <div className='a_details'>Best Project Based Learning Award for Smart Farming using IoT </div>
          <div className='a_org'>Issued by VITC · Mar 2018</div>
          <div className='a_work'>
            <li>PBL(project based learning) awards are given by VIT 
            Chennai to the projects with innovative ideas and good social and economic factors.</li>
            <li>Received PBL award for "Smart Farming Using IoT"</li>
            </div>
        </div>
        <div className='diff_box'>
          <div className='a_details'>Winners of IoT Makeathon V5.0</div>
          <div className='a_org'>Issued by VITC- NOKIA · Mar 2018</div>
          <div className='a_work'>
            <li>IoT Makeathon is organized by School of Electronics And communication Engineering VITC every year to encourage students to come up with the best solutions of real Industrial problems. This was the 5 edition of the competition in association with NOKIA.</li>
            <li>Won the Makeathon for "Smart Production and Logistics System"</li>
            </div>
        </div>
        <div className='diff_box'>
          <div className='a_details'>Winners of Microwave and Photonics Makeathon</div>
          <div className='a_org'>Issued by SENSE-VITC · Feb 2018</div>
          <div className='a_work'>
            <li>Microwave and Photonics Makeathon is organized by SENSE-VITC every year to encourage students to solve challenging problems in field of microwave and optical communication and networks.</li>
            <li>Won the Makeathon for designing efficient optical network using various topologies.</li>
            </div>
        </div>
        <div className='diff_box'>
          <div className='a_details'>3rd Prize - VLSI Makeathon 2</div>
          <div className='a_org'>Issued by SENSE-VERIFAST · Oct 2017</div>
          <div className='a_work'>
            <li>Designed Efficient VLSI circuits on Cadence Virtuoso</li>
            </div>
        </div>
        <div className='diff_box'>
          <div className='a_details'>3rd Prize - Signal processing codathon</div>
          <div className='a_org'>Issued by VITC-SENSE · Sep 2017</div>
          <div className='a_work'>
            <li>Won 3rd Place for designing "Home Autimation and security system".</li>
            </div>
        </div>
        <div className='diff_box'>
          <div className='a_details'>Novel Idea award- IoT Makeathon V3.0</div>
          <div className='a_org'>Issued by SENSE-VITC · Apr 2017</div>
          <div className='a_work'>
            <li>IoT Makeathon is organized by School of Electronics And communication Engineering VITC every year to encourage students to come up with the best solutions of real Industrial problems. This was the 3 edition of the competition.</li>
            <li>Won Novel idea award for "Smart Anallytics for farming"</li>
            </div>
        </div>
      </div>
      <div className='certificates'>
        <div className='a_head'>Certificates</div>
      </div>
  </div>;
};

export default Achievements;
