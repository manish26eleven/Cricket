import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Vector from '../src/assets/Vector.svg';
import hero from '../src/assets/hero.png';
import phoneinHand from '../src/assets/phoneinHand.png';
import usergroup from '../src/assets/usergroup.svg';
import vectorline  from '../src/assets/vectorline.svg';
import person from  '../src/assets/person.svg';
import logo from   '../src/assets/logo.svg';
import {  FiUser } from "react-icons/fi";
import Section1 from "./components/section1/Section1";
import MainSection2 from "./components/mainSection2/MainSection2";
import section1video from  './assets/section1video.mp4';
import sectionvideo3 from  './assets/sectionvideo3.mp4';
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Section5 from "./components/section5/Section5";
import Testinomial from './components/testinomial/Testinomial'
import phoneImage from './assets/phoneImage.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import playstore from '../src/assets/playstore.svg';
import Home from "./pages/home/Home";
const App = () => {
  const isMobile = window.innerWidth < 768 ? true : false;
  console.log(isMobile);
  return (
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  </>

   
  );
};

export default App;
