import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Vector from '../src/assets/Vector.svg';
import hero from '../src/assets/hero.png';
import phoneinHand from '../src/assets/phoneinHand.png';
import usergroup from '../src/assets/usergroup.svg';
import vectorline  from '../src/assets/vectorline.svg';
// import person from  '../src/assets/person.svg';
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
import Ground from "./pages/ground/Ground";
import Match from "./pages/match/Match";
import Demo from "./pages/demo/Demo";
import Tournament from "./pages/tournament/Tournament";
import Thanksyou from "./pages/thanks/Thanksyou";

const App = () => {
  const isMobile = window.innerWidth < 768 ? true : false;
  console.log(isMobile);
  useEffect(() => {
    // This finds every span on the page and makes it editable
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
      span.contentEditable = "true";
      // Optional: Add a subtle visual cue so the user knows they can click it
      span.style.outline = "none";
      span.style.cursor = "text";
    });
  }, []);
  return (
  <>
  
   {/* <CatchAllRoute/> */}
   <div className="App">
       {/* Your existing components */}
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ground" element={<Ground />} />
        <Route path="/match" element={<Match />} />
         <Route path="/tournament" element={<Tournament />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/thanks" element={<Thanksyou />} />
      </Routes>
    </BrowserRouter>
    </div>
   
     
  </>
 

   
  );
};

export default App;
