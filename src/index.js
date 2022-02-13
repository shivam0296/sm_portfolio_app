import React from 'react';
import ReactDOM from 'react-dom';
import  Home from './components/Home';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Research from './components/Research'
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import './index.css'
import {Header} from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer';


  ReactDOM.render(
  <BrowserRouter>
  <Header/>
  <Menu/>
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/research" element={<Research></Research>} />
    <Route path="/experience" element={<Experience/>} />
    <Route path="/achievements" element={<Achievements/>} /> 
    <Route path="/hobbies" element={<Hobbies/>} />
    </Routes>
  <Footer/>
  </BrowserRouter>
   ,
    document.getElementById('root')
  );
