import './Section3.css';
import card1video from '../../assets/card1video.mp4';
import card2video from '../../assets/card2video.mp4';
import card3video from '../../assets/card3video.mp4';
import card4video from '../../assets/card4video.mp4';
import card5video from '../../assets/card5video.mp4';
const Section3 = () => {
    return(
        <>
        <div className='section-container'>
                 <div className="cards-layout">

  <div className="left-column">
    <div className="small-card">
      <div className='card-context'>
        <span className='text-card'>
             AI Powered DRS System
        </span>
        <span className='desc-card'>
          Get accurate LBW and edge decisions instantly with AI-driven analysis. Designed to make professional review technology accessible on any ground.
        </span>
        
      </div>
      <div className='video-container'>
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
    <div className="small-card">
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
        <span className='desc-card'>
         Review crucial moments frame-by-frame with high-precision slow motion. Perfect for umpires, coaches, and analysts needing clear visual breakdowns.
        </span>
        
      </div>
     
    </div>
  </div>

  <div className="big-card">
    <div className='card-context-right'>
        <span className='text-card-right'>
Ai-Powered Ball {'            '}Tracking        </span>
        <span className='desc-card-right'>
          Track ball path, swing, seam movement, and impact points with automated accuracy. No expensive hardware — just powerful AI.
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
<div className="big-card">
    <div className='card-context-right'>
        <span className='text-card-right'>
Real Time Decision Making    </span>
        <span className='desc-card-right'>
Make on-field calls faster with instant AI insights and automated clip generation. Reduce confusion and improve match fairness.        </span>
        
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
    <div className="small-card">
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
        <span className='desc-card'>
         Score matches effortlessly with real-time syncing, auto-highlight generation, and player stats. Built for clubs, academies, and tournaments.
        </span>
        
      </div>
     
    </div>
    <div className="small-card">
      <div className='card-context'>
        <span className='text-card'>
            Seamless Ground Integration
        </span>
        <span className='desc-card'>
Set up Crick.ai on any ground within minutes, with no special cameras or tech staff. Works indoors, outdoors, turf, or matting wickets.        </span>
        
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
        </>
    )
}

export default Section3;