import './Home.css';
import Header from "../../components/header/Header";
import Vector from '../../assets/Vector.svg';
import phoneinHand from '../../assets/phoneinHand.png';

import usergroup from '../../assets/usergroup.svg';

// import person from  '../../assets/person.svg';
import logo from   '../../assets/logo.svg';
import logo1 from '../../assets/sponsors/logo1.png';
import logo2 from '../../assets/sponsors/logo2.png';
import logo3 from '../../assets/sponsors/logo3.png';
import logo4 from '../../assets/sponsors/logo4.png';
import logo5 from '../../assets/sponsors/logo5.jpeg';
import logo6 from '../../assets/sponsors/logo6.png';
import logo7 from '../../assets/sponsors/logo7.png';
import logo8 from '../../assets/sponsors/logo8.png';
import Section1 from "../../components/section1/Section1";
import MainSection2 from "../../components/mainSection2/MainSection2";
import section1video from  '../../assets/section1video.mp4';
import sectionvideo3 from  '../../assets/sectionvideo3.mp4';
import Section3 from "../../components/section3/Section3";
import Section4 from "../../components/section4/Section4";
import Section5 from "../../components/section5/Section5";
import Testinomial from '../../components/testinomial/Testinomial'
import phoneImage from '../../assets/phoneImage.png';
import playstore from '../../assets/playstore.svg';
import { useNavigate } from 'react-router-dom';
// import Drawer from '../tournament/drawer';
import arrowcard from '../../assets/arrowcard.svg';
import person1 from '../../assets/organizers/person1.svg';
import person2 from '../../assets/organizers/person2.png';
import person3 from '../../assets/organizers/person3.png';
import person4 from '../../assets/organizers/person4.png';
import ball from '../../assets/ball.svg';

import { useRef, useState } from 'react';
const Home = () =>{
    const isMobile = window.innerWidth < 768 ? true : false;
    const navigation = useNavigate();
    const featuresRef = useRef(null);
    const worksRef = useRef(null);
    const testRef = useRef(null);
    const goToPricing = (i) => {
      console.log('goToPricing');
      if(i==1) {
          featuresRef.current.scrollIntoView({ behavior: "smooth" });
      } else if(i==2) {
          worksRef.current.scrollIntoView({ behavior: "smooth" });
      } else {
          testRef.current.scrollIntoView({ behavior: "smooth" });
      }
    
  };
  const [open , setOpen] = useState(false);
    const section1obj = {
      title : 'Bring Smart DRS to Your Ground in Minutes.',
      desc : 'Crik.ai gives local cricket grounds access to professional-grade review technology with a simple, portable setup',
      points : ['Quick, portable setup for any ground' ,'AI-powered LBW & impact analysis' ,'Clear, fast decisions for umpires'],
      buttonname: 'Get DRS for Ground'

    };
    const section3obj = {
      title : 'Give Your Entire Tournament Professional-Level DRS.',
      desc : 'Manage multiple matches with a centralized DRS dashboard, AI-based decision support, and consistent review standards for every game in the tournament.',
      points : ['Central panel for organizers' ,'Consistent, tournament-wide decisions' ,'AI review clips for archives & highlights'],
      buttonname: 'Get DRS for Tournament'

    };
    return(
       <>
        {/* glow towards header  */}
   <div className="glow-wrapper">
   <div className="glow glow-left" ></div>
<div className="glow glow-right" ></div>
    

       {/* drawer for phone */}
      {/* <Drawer open ={open} setOpen={setOpen} onScroll={goToPricing}/> */}


        <Header onScroll={goToPricing} setOpen={setOpen}/>
      
      <div className="center-card">
       <span className="main-title" >
              “AI-Powered DRS for Every Player, Match, Decision”
          </span>
          <span className="second-title" contentEditable="true">
            Crik.ai brings pro-level Remote Decision Review Systems to clubs, corporates, tournaments, and everyday players — delivering precision, fairness, and insights to cricket anywhere in the world.
          </span>
           <div class="crik-wrapper">
              <button className="crik-button"> 
              <span className="button-title" contentEditable="true">Get Crik.ai DRS</span>
              <div className="circle">
               <img src={Vector} alt="logo" className="circle__img" />
                </div>
          </button>
          </div>
          
          
         
</div>
<>
{isMobile ? 
<><img
src={phoneImage}
className="hero-img-phone"/> </>: 
<div className="phone-section">
    <div className="phone-section1">
      <div className="left-card1">
        <div className="card1-content">
          <span className="customers-no" contentEditable="true">150K+</span>
          <span className="customers-text" contentEditable="true">Balls Officiated</span>
        </div>
        <div><img style={{marginTop:'5px'}}
        src={ball} /></div>
      </div>
      <div className="left-card2">
          <span className="card-title" contentEditable="true">Crick.ai Highlights</span>
            <div className="line" />
         <div className="card2-content">
          <div className="card-rows">
              <span className="card2-text" contentEditable="true">User Feedback: </span>
            <span className="card2-text">DRS Reviews Processed: </span>
            <span className="card2-text">Average Review Time: </span>
            <span className="card2-text">Accuracy Rate: </span>
          </div>
           <div className="card-rows">
         
             
              <span className="card2-texts">   <img src={arrowcard}/>9/10 </span>
            
            <span className="card2-texts"><img src={arrowcard}/>10K+</span>
            <span className="card2-texts">&nbsp;&nbsp;&nbsp;&nbsp;1.9 min</span>
            <span className="card2-texts"> <img src={arrowcard}/> 92%</span>
          </div>
           
         </div>
      </div>
    </div>
    <div className="hero-img">
      <img
      src={phoneinHand}
      className="phone-style"/>
      

    </div>
    <div className="phone-section1">
      <div className="right-card1">
        <span className="right-cardtext">
          Match Organizers
        </span>
        <div class="stack">
    <div className="avatar-wrapper">
   <img src={person1} />
    <span className="avatar-count">+8</span>
  </div>
 <img src={person2} />
 <img src={person3} />
 <img src={person4} />

</div>
      </div>
      <div className="right-card2">
        <span className="umpiretext">Hi Umpire,</span>
        <span className="umpiretext2">
          Ready to Try Next Gen DRS  ?
        </span>
         <div class="stack">
          <div className="avatar-wrapper">
   <img src={person1} />
    <span className="avatar-count">+8</span>
  </div>
  <img src={person2} />
 <img src={person3} />
 <img src={person4} />
  
  

</div>
      </div>
    </div>
</div> }
</>
<div ref={featuresRef} className="section">
   <span className="section-title">
    Features
   </span>
   <span className="section-text">
Features that Makes Cricket  faster, fairer, and smarter.   </span>
   

</div>
<Section3/>
<div className="section">
   <span className="section-title">
     Trusted by Cricket Associations and Media
   </span>
   <span className="section-text">
    Chosen by cricket authorities who value precision, fairness, and innovation.
   </span>
   
    <div className="logos">
    <img
    src={logo1}
    className="logo-image"/>
     <img
    src={logo2}
    className="logo-image"/>
     <img
    src={logo3}
    className="logo-image"/>
     <img
    src={logo4}
    className="logo-image"/>
     <img
    src={logo5}
    className="logo-image"/>
     <img
    src={logo6}
    className="logo-image"/>
     <img
    src={logo7}
    className="logo-image"/>
     <img
    src={logo8}
    className="logo-image"/>
     
    </div>
    

</div>

<div style={{marginTop:isMobile ? '23px' : '80px'}}>
<Section1

image= {section1video}
obj = {section1obj}
navigation={navigation}
type='1'
/>
</div>
{/* <Section2/> */}
<MainSection2/>
<div style={isMobile ? {marginTop :'32px'} : {}}>
<Section1 image={sectionvideo3}
obj={section3obj}
type='3'/> 
</div>

      <div ref = {worksRef} className="section">
   <span className="section-title">
     How Crik.ai Works
   </span>
   <span className="section-text">
Crik.ai makes every decision faster, fairer, and smarter.   </span>
   

</div>
<Section4/>
 <div ref={testRef} className="section back-color">
   <span className="section-title">
    Testimonials
   </span>
   <span className="section-text">
What Players and Umpires Say About Crik.ai </span>
   

</div>
<Testinomial/>
   {!isMobile ? <div className="foot-image">
  <div className="footer-content">
    <span className="footer-title">
      “Give Every Match the Power of Professional DRS.”
    </span>
    <span className="footer-desc">
      Take the first step toward a  new experience of DRS System
    </span>
    <img src={playstore} className="playstore-image"/>
  </div>
  </div> : <div className='mobile-foot-image'>
      <div className="footer-content-mobile">
    <span className="footer-title-mobile">
      “Give Every Match the Power of Professional DRS.”
    </span>
    <span className="footer-desc-mobile">
      Take the first step toward a  new experience of DRS System
    </span>
    <img src={playstore} className="playstore-image-mobile"/>
  </div>
  </div>}
  <Section5/>

      </div>
         
      </>
    )
}
export default Home;