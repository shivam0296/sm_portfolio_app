import React from 'react';
import './hobbies.css'

const Hobbies = () => {
  return <div className='h_box'>
    <div className='h_header'>Reading Books</div>
    <div className='h_content'>I like reading books. Its like meditation for me. Some of my recommendations are:
    <li>IKIGAI by Hector Garcia and Francesc Miralles</li>
    <li>Atomatic Habits by James Clear</li>
    <li>5 AM Club by Robin Sharma</li>
    <li>Tipping Point By Malcolm Gladwell</li>
    </div>
    <div className='h_header'>Cooking</div>
    <div className='h_content'>I love cooking in my free time. I like to invent new dishes.</div>
    <div className='h_header'>Playing Football</div>
    <div className='h_content'>I'm playing football since my 6th standard. I was in my school's and college's football team.</div>
    <div className='h_header'>Travelling</div>
    <div className='h_content'>I like to visit new places and experience new cultures and cuisines.</div>
  </div>;
};

export default Hobbies;
