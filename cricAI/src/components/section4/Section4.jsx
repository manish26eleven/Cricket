import './Section4.css';
import Vector from '../../assets/Vector.svg';
import arrow from '../../assets/arrow.svg';
import cardContainer from '../../assets/cardContainer.png';
import mobileContainer from '../../assets/mobile/mobileContainer.png';
import { useNavigate } from 'react-router-dom';
const Section4 = () => {
  const isMobile = window.innerWidth < 768 ? true : false;
  const navigate = useNavigate();
    return(
        <>
        <div className='section4-container'>
           <div className="grid-container">

  
  

  <div className="card">
    <span className='cards-texts'>How it works</span>
    {/* <span className='cards-desc'>When an umpire initiates a review, our system instantly captures and analyzes the match clip using advanced computer vision.<br/> Within seconds, the analyzed video appears on the umpire’s screen — enabling faster, fairer, and smarter decisions.</span> */}
    <span  style={{marginTop:'5px'}}>
      {/* <ul className="blue-dot-list">
    <li>Players Ask for DRS</li>
    <li>Umpire Initiates DRS</li>
    <li>AI Analyzes the Clip & Decision on Mobile</li>
  </ul> */}
  
  <ul className="blue-dot-list" >
    <li><strong>Players Ask for DRS:</strong> Capture and transition to formal reviews </li>
    <li><strong>Umpire Initiates DRS:</strong> Activate automated clip analysis via computer vision immediately.</li>
    <li><strong>Decision on Mobile:</strong> Deliver high-accuracy AI results to   device in seconds.</li>
  </ul>
    </span>
  <button className='cards-button' onClick={() => navigate('/demo')}>

    <span>Book Demo</span>
     <div className="circles">
                   <img
                     src={arrow}/>
                      
                    </div>
  </button>
  </div>
    <div className="big-image">
    <img src={isMobile ? mobileContainer : cardContainer}alt="image"/>
  </div>
  
  <div className="card">
            <div className='card-numbers'>
                <span >1</span>
            </div>
            <span className='card1-title'>
              Umpire Initiates DRS
            </span>
            {/* <span className="card1-desc">
When a player challenges a decision, the umpire simply taps “Take DRS” on the Crik.ai mobile app.The system instantly marks the timestamp and captures the video clip of the delivery from connected cameras.
            </span> */}
            <span>
              <ul style={{textAlign:'left' ,marginRight:'25px'}}>
    <li>Umpire taps “Take DRS” on the mobile app instantly.</li>
    <li>System marks the exact delivery timestamp automatically.</li>
    <li>Connected cameras capture and sync the match clip.</li>
  </ul>
            </span>
           
   
  </div>
  <div className="card">
    <div className='card-numbers'>
                <span >2</span>
            </div>
             <span className='card1-title'>
              AI Analyzes the Clip
            </span>
            {/* <span className="card1-desc">
 Crik.ai’s AI engine automatically processes the video using advanced computer vision and ball-tracking algorithms.It detects ball trajectory, impact zone, and path prediction — delivering a precise visual review within seconds.
            </span> */}
            <span>
            <ul className="blue-dot-list">
    <li>AI engine processes video using computer vision algorithms.</li>
    <li>Detects ball trajectory, impact zones, and path prediction.</li>
    <li>Delivers a precise visual review within seconds.</li>
  </ul>
  </span>
            </div>
  <div className="card">
    <div className='card-numbers'>
                <span >3</span>
            </div>
             <span className='card1-title'>
              Decision on Mobile
            </span>
            {/* <span className="card1-desc"> */}
{/* Once the analysis is complete, the umpire receives the reviewed clip directly on their mobile screen.The app highlights key moments (impact, bounce, and trajectory) so the umpire can make Right Decision.            </span> */}
 <span>
  <ul className="blue-dot-list">
    <li>Umpire receives the reviewed clip directly on their screen.</li>
    <li>App highlights impact, bounce, and ball trajectory.</li>
    <li>Real-time visual data ensures the right decision is made.</li>
  </ul>
 </span>
 
  </div>

</div>
        </div>
        </>
    );
}
export default Section4;