import './Section4.css';
import Vector from '../../assets/Vector.svg';
import arrow from '../../assets/arrow.svg';
import cardContainer from '../../assets/cardContainer.png';
const Section4 = () => {
    return(
        <>
        <div className='section4-container'>
           <div className="grid-container">

  
  

  <div className="card">
    <span className='cards-texts'>How it works</span>
    <span className='cards-desc'>When an umpire initiates a review, our system instantly captures and analyzes the match clip using advanced computer vision.Within seconds, the analyzed video appears on the umpire’s screen — enabling faster, fairer, and smarter decisions.</span>
  <button className='cards-button'>

    <span>Book Demo</span>
     <div className="circles">
                   <img
                     src={arrow}/>
                      
                    </div>
  </button>
  </div>
    <div className="big-image">
    <img src={cardContainer}alt="image"/>
  </div>
  
  <div className="card">
            <div className='card-numbers'>
                <span >1</span>
            </div>
            <span className='card1-title'>
              Umpire Initiates DRS
            </span>
            <span className="card1-desc">
When a player challenges a decision, the umpire simply taps “Take DRS” on the Crik.ai mobile app.The system instantly marks the timestamp and captures the video clip of the delivery from connected cameras.
            </span>
           
   
  </div>
  <div className="card">
    <div className='card-numbers'>
                <span >2</span>
            </div>
             <span className='card1-title'>
              AI Analyzes the Clip
            </span>
            <span className="card1-desc">
 Crik.ai’s AI engine automatically processes the video using advanced computer vision and ball-tracking algorithms.It detects ball trajectory, impact zone, and path prediction — delivering a precise visual review within seconds.
            </span>
            </div>
  <div className="card">
    <div className='card-numbers'>
                <span >3</span>
            </div>
             <span className='card1-title'>
              Decision on Mobile
            </span>
            <span className="card1-desc">
Once the analysis is complete, the umpire receives the reviewed clip directly on their mobile screen.The app highlights key moments (impact, bounce, and trajectory) so the umpire can make Right Decision.            </span>
  </div>

</div>
        </div>
        </>
    );
}
export default Section4;