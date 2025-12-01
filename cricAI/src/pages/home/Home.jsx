import './Home.css';
import Header from "../../components/header/Header";
import Vector from '../../assets/Vector.svg';
import phoneinHand from '../../assets/phoneinHand.png';

import usergroup from '../../assets/usergroup.svg';

import person from  '../../assets/person.svg';
import logo from   '../../assets/logo.svg';

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
const Home = () =>{
    const isMobile = window.innerWidth < 768 ? true : false;
    return(
       <>
 <div className="glow-wrapper">
       <div className="glow glow-left" onClick={() => console.log("Left glow clicked")}></div>
<div className="glow glow-right" onClick={() => console.log("Right glow clicked")}></div>

        <Header />
      
      <div className="center-card">
  <span className="main-title">
              “AI-Powered DRS for Every Player, Match, Decision”
          </span>
          <span className="second-title">
            Crik.ai brings professional-level Decision Review Systems to clubs, tournaments, and everyday players — delivering precision, fairness, and insights powered by cutting-edge AI.
          </span>
        
              <button className="crik-button"> 
              <span className="button-title">Get Crik.ai Access</span>
              <div className="circle">
               <img src={Vector} alt="logo" className="circle__img" />
                </div>
          </button>
          
         
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
          <span className="customers-no">4000</span>
          <span className="customers-text">Happy Customers</span>
        </div>
        <div><img
        src={usergroup} /></div>
      </div>
      <div className="left-card2">
          <span className="card-title">Crick.ai Highlights</span>
          
         <div className="card2-content">
          <div className="card-rows">
              <span className="card2-text">User Feedback: </span>
            <span className="card2-text">DRS Reviews Processed: </span>
            <span className="card2-text">Average Review Time: </span>
            <span className="card2-text">Accuracy Rate: </span>
          </div>
           <div className="card-rows">
              <span className="card2-texts">8.8/10 </span>
            <span className="card2-texts">143 </span>
            <span className="card2-texts">2.3 Sec</span>
            <span className="card2-texts">%92</span>
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
  <img src={person} />
 <img src={person} />
 <img src={person} />
 <img src={person} />

</div>
      </div>
      <div className="right-card2">
        <span className="umpiretext">Hi Umpire,</span>
        <span className="umpiretext2">
          Ready to Try Next Gen DRS  ?
        </span>
         <div class="stack">
  <img src={person} />
 <img src={person} />
 <img src={person} />
 <img src={person} />

</div>
      </div>
    </div>
</div> }
</>
<div className="section">
   <span className="section-title">
     Trusted by Several Cricket Associations
   </span>
   <span className="section-text">
    Chosen by cricket authorities who value precision, fairness, and innovation.
   </span>
   
    <div className="logos">
    <img
    src={logo}
    className="logo-image"/>
     <img
    src={logo}
    className="logo-image"/>
     <img
    src={logo}
    className="logo-image"/>
     <img
    src={logo}
    className="logo-image"/>
     <img
    src={logo}
    className="logo-image"/>
    
     
    </div>
    

</div>
<div style={{marginTop:isMobile ? '23px' : '80px'}}>
<Section1

image= {section1video}
/>
</div>
{/* <Section2/> */}
<MainSection2/>
<Section1 image={sectionvideo3}/>
<div className="section">
   <span className="section-title">
    Features
   </span>
   <span className="section-text">
Features that Makes Cricket  faster, fairer, and smarter.   </span>
   

</div>
<Section3/>
      <div className="section">
   <span className="section-title">
     How Crik.ai Works
   </span>
   <span className="section-text">
Crik.ai makes every decision faster, fairer, and smarter.   </span>
   

</div>
<Section4/>
 <div className="section back-color">
   <span className="section-title">
    Testimonials
   </span>
   <span className="section-text">
What Players and Umpires Say About Crik.ai </span>
   

</div>
<Testinomial/>
   {!isMobile && <div className="foot-image">
  <div className="footer-content">
    <span className="footer-title">
      “Give Every Ground the Power of Professional DRS.”
    </span>
    <span className="footer-desc">
      Take the first step toward a  new experience of DRS System
    </span>
    <img src={playstore} className="playstore-image"/>
  </div>
  </div>}
  <Section5/>

      </div>
         
      </>
    )
}
export default Home;