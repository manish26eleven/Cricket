import './MainSection2.css';
import section2video from '../../assets/section2video.mp4';
import tick from  '../../assets/tick.svg';
import arrow from  '../../assets/arrow.svg';
const MainSection2 = () => {
    return (
        <>
          <div className='containers'>
              <div className='main-container'>
                   <div className='left-contents'>
                          <video
                               className="videos"
                               src={section2video}
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
                   <div className='right-contents'>
                    <div className='contents'>
                            <span className='title'>
      Upgrade Every Match With AI-Powered Accuracy.
    </span>
    <span className='description'>Whether it’s a friendly game or a competitive league, Crik.ai ensures fair, unbiased, and transparent decisions with real-time video analysis.</span>
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
              <span className='button-text'>Get DRS for Match</span>
              <div className='arrow-div'>
             <img
             src={arrow}
             className='arrow-section1'/>
              </div>
          
              </button>
       </div>
                   </div>
                   
              </div>

            </div>
        </>
    )
}

export default MainSection2