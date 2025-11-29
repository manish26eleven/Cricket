import './Testinomial.css';
import testinomial1 from '../../assets/testinomial1.svg';
import testinomial2 from '../../assets/testinomial2.svg';
import testinomial3 from '../../assets/testinomial3.svg';
import Star from '../../assets/Star.svg';
const Testinomial= () => {
    return(
        <>
        <div className='test-container'>
          <div className='test-card'>
        <div className='card-row'>
            <img src={testinomial1} className='test-card-image'/>
            <div className='desc-card'>
                <span className='user-name'>Briana Patton</span>
                <span className='user-title'>Scorer</span>
            </div>
        </div>
        <span className='test-review'>
            A well designed, easy-to-use platform, that is more focused on pushing projects forward and maintaining cross-team communication. Technically part of Facebook, but the advertising opportunities here are very different. Great if you have a product best presented in image or video.
        </span>
         <div className='test-starts'>
             {[...Array(5)].map((_, i) => (
  <img key={i} src={Star} className="icon" />
))}
        </div>
          </div>
          <div className='test-card'>
        <div className='card-row'>
            <img src={testinomial1} className='test-card-image'/>
            <div className='desc-card'>
                <span className='user-name'>Briana Patton</span>
                <span className='user-title'>Scorer</span>
            </div>
        </div>
        <span className='test-review'>
            A well designed, easy-to-use platform, that is more focused on pushing projects forward and maintaining cross-team communication. Technically part of Facebook, but the advertising opportunities here are very different. Great if you have a product best presented in image or video.
        </span>
         <div className='test-starts'>
             {[...Array(5)].map((_, i) => (
  <img key={i} src={Star} className="icon" />
))}
        </div>
          </div>
          <div className='test-card'>
        <div className='card-row'>
            <img src={testinomial1} className='test-card-image'/>
            <div className='desc-card'>
                <span className='user-name'>Briana Patton</span>
                <span className='user-title'>Scorer</span>
            </div>
        </div>
        <span className='test-review'>
            A well designed, easy-to-use platform, that is more focused on pushing projects forward and maintaining cross-team communication. Technically part of Facebook, but the advertising opportunities here are very different. Great if you have a product best presented in image or video.
        </span>
        <div className='test-starts'>
             {[...Array(5)].map((_, i) => (
  <img key={i} src={Star} className="icon" />
))}
        </div>
          </div>
        </div>
        </>
    )
}
export default Testinomial;