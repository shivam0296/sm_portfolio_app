import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer';
import Main from './components/Main'


  ReactDOM.render(<div className='site-container'>
  <div className='content-wrap'>
    <Main></Main>
  </div>
  <Footer/>
  </div>
   ,
    document.getElementById('root')
  );
