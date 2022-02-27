import React from 'react';
import './research.css';
import opt1 from './Documents/Hardware_implementation_of_optical_switching_node_for_data_center_networks.pdf'
import opt2 from './Documents/Hardware_implementation_of_contention_aware_optical_switching_node_for_data_center_networks.pdf'
import iot from './Documents/IOT_ENABLED_FARMING_ASSIST_AND_SECURITY_USING_MACHINE_LEARNING.pdf'
import sangeetha_maam from './images/professors/sangeetha_maam.png'
import hemanth_sir from './images/professors/hemanth_sir.png'
import muthu_maam from './images/professors/muthulakshmi_maam.png'

function Research() {
  return<div className='research_box'>
      <div className='home_left'>
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
      </div>
      <div className='home_right'>
       <div className='re_head'>Research Professors</div>
       <div className='prof'>
       <img src={sangeetha_maam} className='imgp' alt='Dr. Sangeetha R G'/><br/>
       <a href={'https://chennai.vit.ac.in/member/dr-sangeetha-r-g/'} target={'_blank'} rel="noreferrer">Dr. Sangeetha R G</a><br/>
       </div>
       <div className='prof'>
       <img src={hemanth_sir} className='imgp' alt='Dr. Hemanth C'/><br/>
       <a href={'https://chennai.vit.ac.in/member/dr-hemanth-c/'} target={'_blank'} rel="noreferrer">Dr. Hemanth C</a><br/>
       </div>
       <div className='prof'>
       <img src={muthu_maam} className='imgp' alt='Dr. Muthulakshmi S'/><br/>
       <a href={'https://chennai.vit.ac.in/member/dr-muthulakshmi-s/'} target={'_blank'} rel="noreferrer">Dr. Muthulakshmi S</a><br/>
       </div>
       
      </div>
    </div>;
}

export default Research;