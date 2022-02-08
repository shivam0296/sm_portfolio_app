import React from 'react';
import ReactDOM from 'react-dom';
import  Home from './components/Home';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Research from './components/Research'
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Blogs from './components/Blogs';
import Hobbies from './components/Hobbies';


  ReactDOM.render(
    <React.Fragment><BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/research" element={<Research></Research>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/achievements" element={<Achievements/>} /> 
            <Route path="/hobbies" element={<Hobbies/>} />
            <Route path="/blogs" element={<Blogs/>} />
          </Routes>
    </BrowserRouter></React.Fragment>
   ,
    document.getElementById('root')
  );
