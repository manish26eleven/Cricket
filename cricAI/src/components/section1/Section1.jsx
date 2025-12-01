import { FaDeaf } from 'react-icons/fa';
import './Section1.css';
import section1video from  '../../assets/section1video.mp4';
import tick from  '../../assets/tick.svg';
import arrow from  '../../assets/arrow.svg';
import { useNavigate, useNavigation } from 'react-router-dom';
const  Section1 = ({image , obj, type , navigation}) => {
     const navigate = useNavigate();
    return (
      
        <>
      <div className='container'>
  <div className='left-content'>
    <div className='content'>
    <span className='title'>
     {obj?.title}
    </span>
    <span className='description'>{obj?.desc}</span>
    <div className='item-list'>
        <div className='list'>
             <div className='tick-div'>
               <img src={tick}/>
             </div>
             <span className='card-text'>{obj?.points[0]}</span>

        </div>
         <div className='list'>
             <div className='tick-div'>
               <img src={tick}/>
             </div>
             <span className='card-text'>{obj?.points[1]}</span>

        </div>
         <div className='list'>
             <div className='tick-div'>
               <img src={tick}/>
             </div>
             <span className='card-text'>{obj?.points[2]}</span>

        </div>

    </div>
     <button className={type == 1 ?'card-button' : 'card-button2'}
      onClick={() =>
                navigate(type == 1 ? '/ground' : '/tournament')
              }>
    <span className='button-text'>{obj?.buttonname}</span>
    <div className='arrow-div'>
   <img
   src={arrow} className='arrow-section1'/>
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