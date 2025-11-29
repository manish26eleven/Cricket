import { FaDeaf } from 'react-icons/fa';
import './Section1.css';
import section1video from  '../../assets/section1video.mp4';
import tick from  '../../assets/tick.svg';
import arrow from  '../../assets/arrow.svg';
const  Section1 = ({image}) => {
    return (
        <>
      <div className='container'>
  <div className='left-content'>
    <div className='content'>
    <span className='title'>
      Bring Smart DRS to Your Ground in Minutes.
    </span>
    <span className='description'>Crik.ai gives local cricket grounds access to professional-grade review technology with a simple, portable setup</span>
    <div className='item-list'>
        <div className='list'>
             <div className='tick-div'>
               <img src={tick}/>
             </div>
             <span className='card-text'>Quick, portable setup for any ground</span>

        </div>
         <div className='list'>
             <div className='tick-div'>
               <img src={tick}/>
             </div>
             <span className='card-text'>AI-powered LBW & impact analysis</span>

        </div>
         <div className='list'>
             <div className='tick-div'>
               <img src={tick}/>
             </div>
             <span className='card-text'>Clear, fast decisions for umpires</span>

        </div>

    </div>
    <button className='card-button'>
    <span className='button-text'>DRS for Ground</span>
    <div className='arrow-div'>
   <img
   src={arrow}/>
    </div>

    </button>
    </div>
  </div>

  <div className='right-content'>
    <video
      className="video"
      src={image}
     autoPlay
  muted
  loop
  playsInline
  preload="auto"
    />
     <div className="floating-card">
    <span className='card-texts'>27%</span>
    <span className='card-desc'>Productivity increase on <br /> average</span>
  </div>
  </div>
</div>

        </>
    )
}

export default Section1;