import React from 'react';
import ReactDOM from 'react-dom';
import  Home from './components/Home';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Research from './components/Research'
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import {Header} from './components/Header'
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Projects from './components/Projects';


  ReactDOM.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/research" element={<Research></Research>} />
    <Route path="/experience" element={<Experience/>} />
    <Route path="/achievements" element={<Achievements/>} /> 
    <Route path="/hobbies" element={<Hobbies/>} />
    <Route path="/blogs" element={<Blogs/>} />
    <Route path="/projects" element={<Projects/>} />
    </Routes>
  <Footer/>
  </BrowserRouter>
   ,
    document.getElementById('root')
  );
