import React from 'react';
import './footer.css'

const Footer = () => {
  return <div className='bottom_tab'>
    <div className='connect_logo'>
      <a href='https://www.linkedin.com/in/shivam-mishra-a39820160/' target={'_blank'}><img src="https://img.icons8.com/ios-filled/30/000000/linkedin.png"/></a>
      <a><img src="https://img.icons8.com/fluency-systems-filled/30/000000/twitter.png"/></a>
      <a><img src="https://img.icons8.com/fluency-systems-filled/30/000000/instagram-new.png"/></a>
      <a><img src="https://img.icons8.com/material/30/000000/facebook-new.png"/></a>
      </div>
      <div className='footer_text'>
      Website designed and Maintained by Shivam Mishra
      </div>
      </div>;
};

export default Footer;
