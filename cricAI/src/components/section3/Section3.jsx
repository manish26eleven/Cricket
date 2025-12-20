import './Section3.css';
import card1video from '../../assets/card1video.mp4';
import card2video from '../../assets/card2video.mp4';
import card3video from '../../assets/card3video.mp4';
import card4video from '../../assets/card4video.mp4';
import card5video from '../../assets/card5video.mp4';
import mobileCard1 from '../../assets/mobile/mobileCard1.svg';
import mobileCard2 from '../../assets/mobile/mobileCard2.svg';
import mobileCard3 from '../../assets/mobile/mobileCard3.svg';
import mobileCard4 from '../../assets/mobile/mobileCard4.svg';
import mobileCard5 from '../../assets/mobile/mobileCard5.svg';
import mobileCard6 from '../../assets/mobile/mobileCard6.svg';
const Section3 = () => {
  const isMobile = window.innerWidth < 768 ? true : false;
  const cards = [
  {
    image: mobileCard1,
    title: "AI Powered DRS System",
    desc: "Get accurate LBW and edge decisions instantly with AI-driven analysis. Designed to make professional review technology accessible on any ground."
  },
  {
    image: mobileCard2,
    title: "Ultra Slow Motion Analysis",
    desc: "Review crucial moments frame-by-frame with high-precision slow motion. Perfect for umpires, coaches, and analysts needing clear visual breakdowns."
   },
  {
     image: mobileCard3,
    title: "Ai-Powered Ball Tracking",
    desc: "Track ball path, swing, seam movement, and impact points with automated accuracy. No expensive hardware — just powerful AI."
   },
   {
    image: mobileCard4,
    title: "Real Time Decision Making",
    desc: "Make on-field calls faster with instant AI insights and automated clip generation. Reduce confusion and improve match fairness."
  },
  {
    image: mobileCard5,
    title: "Seamless Ground Integration",
    desc: "Set up Crick.ai on any ground within minutes, with no special cameras or tech staff. Works indoors, outdoors, turf, or matting wickets."
   },
  {
     image: mobileCard6,
    title: "Personalized Scoring App",
    desc: "Score matches effortlessly with real-time syncing, auto-highlight generation, and player stats. Built for clubs, academies, and tournaments."
   }
];
    return(
      <>{isMobile ? <div style={{marginTop:'20px'}} >
        
         {cards.map((item)  => {
          return(
          <div className='mobile-cards'>
              <img src={item.image}/>
               <span className='mobile-cards-title'>{item.title}</span>
                <span className='mobile-cards-desc'>{item.desc}</span>
          </div>);
         
         })}
      </div> :
        <>
        <div className='section-container'>
                 <div className="cards-layout">

  <div className="left-column">
    <div className="small-card" 
     onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
       onMouseLeave={(e) => {
    const v = e.currentTarget.querySelector("video");
    v.pause();
    v.currentTime = 0;
  }}
    >
      <div className='card-context'>
        <span className='text-card'>
             AI Powered DRS System
        </span>
        {/* <span className='desc-card'> */}
          {/* Get accurate LBW and edge decisions instantly with AI-driven analysis. Designed to make professional review technology accessible on any ground. */}
        {/* </span> */}
       {/* <ul className="mobile-cards-list">
        <li>First feature or point</li>
        <li>Second feature or point</li>
        <li>Third feature or point</li>
      </ul> */}
     {/* <ul className="modern-list">
    <li>Real-time trajectory tracking</li>
    <li>Predictive impact analysis</li>
    <li>Integrated multi-angle sync</li>
  </ul> */}
  <span>
  <ul className="blue-dot-list">
        <li>Real-time trajectory and swing analysis</li>
        <li>Automated impact point detection</li>
        <li>High-precision visual rendering</li>
      </ul>
      </span>
        
      </div>
      <div className='video-container'
      
      >
         <video
      className="videoes"
      src={card1video}
     autoPlay
  muted
  loop
  playsInline
  preload="auto"
    />
      </div>
    </div>
    <div className="small-card"
     onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
       onMouseLeave={(e) => {
    const v = e.currentTarget.querySelector("video");
    v.pause();
    v.currentTime = 0;
  }}
    >
       <div className='video-containers'>
         <video
      className="videoes"
      src={card2video}
     autoPlay
  muted
  loop
  playsInline
  preload="auto"
    />
      </div>
         <div className='card-context'>
        <span className='text-card'>
             Ultra Slow Motion Analysis
        </span>
        {/* <span className='desc-card'>
         Review crucial moments frame-by-frame with high-precision slow motion. Perfect for umpires, coaches, and analysts needing clear visual breakdowns.
        </span> */}
        <span>
       <ul className="blue-dot-list">
    <li>High-Precision Frame-by-Frame Review</li>
    <li>Clear Visual Performance Breakdowns</li>
    <li>Enhanced Critical Moment Analysis</li>
  </ul>
  </span>
      </div>
     
    </div>
  </div>

  <div className="big-card"
       onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
       onMouseLeave={(e) => {
    const v = e.currentTarget.querySelector("video");
    v.pause();
    v.currentTime = 0;
  }}
  >
    <div className='card-context-right'>
        <span className='text-card-right'>
Ai-Powered Ball {'            '}Tracking        </span>
        {/* <span className='desc-card-right'>
          Track ball path, swing, seam movement, and impact points with automated accuracy. No expensive hardware — just powerful AI.
        </span> */}
        <span>
         <ul className="blue-dot-list">
    <li>Dynamic Path and Swing Analysis</li>
    <li>Automated High-Precision Impact Detection</li>
    <li>Advanced Hardware-Free AI Processing</li>
  </ul>
  </span>
        
      </div>
      <div className='video-container-right'>
         <video
      className="videoes-right"
      src={card3video}
     autoPlay
  muted
  loop
  playsInline
  preload="auto"
    />
      </div>
  </div>

</div>
        </div>
         <div className='section-containers'>
                 <div className="cards-layout">
<div className="big-card"
     onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
       onMouseLeave={(e) => {
    const v = e.currentTarget.querySelector("video");
    v.pause();
    v.currentTime = 0;
  }}
>
    <div className='card-context-right'>
        <span className='text-card-right'>
Real Time Decision Making    </span>
        {/* <span className='desc-card-right'>
Make on-field calls faster with instant AI insights and automated clip generation. Reduce confusion and improve match fairness.        </span>
         */}
         <span>
         <ul className="blue-dot-list">
    <li>Instant AI-Driven Field Insights</li>
    <li>Automated Instant Clip Generation</li>
    <li>Enhanced Match Fairness and Clarity</li>
  </ul>
  </span>
      </div>
      <div className='video-container-right'>
         <video
      className="videoes-right"
      src={card4video}
     autoPlay
  muted
  loop
  playsInline
  preload="auto"
    />
      </div>
  </div>
  <div className="left-column">
    <div className="small-card" 
     onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
       onMouseLeave={(e) => {
    const v = e.currentTarget.querySelector("video");
    v.pause();
    v.currentTime = 0;
  }}
    >
       <div className='video-containers'>
         <video
      className="videoes"
      src={card5video}
     autoPlay
  muted
  loop
  playsInline
  preload="auto"
    />
      </div>
         <div className='card-context'>
        <span className='text-card'>
             Personalized Scoring App
        </span>
        {/* <span className='desc-card'>
         Score matches effortlessly with real-time syncing, auto-highlight generation, and player stats. Built for clubs, academies, and tournaments.
        </span> */}
        <span>
        <ul className="blue-dot-list">
    <li>Effortless Real-Time Match Syncing</li>
    <li>Automated Player Statistics and Insights</li>
    <li>Advanced Auto-Highlight Generation System</li>
  </ul>
  </span>
        
      </div>
     
    </div>
    <div className="small-card"
        onMouseEnter={(e) => e.currentTarget.querySelector("video").play()}
       onMouseLeave={(e) => {
    const v = e.currentTarget.querySelector("video");
    v.pause();
    v.currentTime = 0;
  }}
    
    >
      <div className='card-context'>
        <span className='text-card'>
            Seamless Ground Integration
        </span>
        {/* <span className='desc-card'>
Set up Crick.ai on any ground within minutes, with no special cameras or tech staff. Works indoors, outdoors, turf, or matting wickets.        </span>
         */}
         <span>
         <ul className="blue-dot-list">
    <li>Rapid Multi-Environment Deployment</li>
    <li>Zero-Staff Technical Configuration</li>
    <li>Universal Camera Compatibility</li>
  </ul>
  </span>
      </div>
      <div className='video-container'>
         <video
      className="videoes"
      src={card5video}
     autoPlay
  muted
  loop
  playsInline
  preload="auto"
    />
      </div>
    </div>
    
  </div>

  

</div>
        </div>
        </>}
        </>
    )
}

export default Section3;