import './Section5.css';
import criklogo from '../../assets/criklogo.svg';

const Section5 = () => {
    return(
        <>
        <div className='section5-container'>
          <div className='footer-titles'>
              <div className='column1'>
                {/* <div className="logo-containers">
                          <img 
                            src={criklogo}
                            className="logo-imgs"
                
                          />
                          <span className='logo-texts'>
                            Crik.
                          </span>
                          <span className='logo-text1s'>ai</span>
                        </div> */}
                        <div className='footer-logo'>
                           <img 
                            src={criklogo}
                            className="crik-logo"
                
                          />
                           <span className='logo-criktext'>
                            Crik.
                          </span>
                           <span className='logo-text1'>ai</span>
                          <span>

                          </span>
                        </div>
                        <span className='footer-span'>
                        Elevate your Cricket Experience With Crik.ai
                        </span>
              </div>
              <div className='column-next'>
                <div className='footer-items'>
                <span className='footer-last-texts'>Page</span>
                <span className='footer-last-text'>Product</span>
                 <span className='footer-last-text'>About</span>
                  <span className='footer-last-text'>Pricing</span>
                   <span className='footer-last-text'>Blog</span>
                </div>
                 <div className='footer-items'>
                <span className='footer-last-texts'>Page</span>
                <span className='footer-last-text'>Product</span>
                 <span className='footer-last-text'>About</span>
                  <span className='footer-last-text'>Pricing</span>
                   <span className='footer-last-text'>Blog</span>
                </div>
                 <div className='footer-items'>
                <span className='footer-last-texts'>Page</span>
                <span className='footer-last-text'>Product</span>
                 <span className='footer-last-text'>About</span>
                  <span className='footer-last-text'>Pricing</span>
                   <span className='footer-last-text'>Blog</span>
                </div>
              </div>
          </div>
          <div className='copyright'>
            <span className='copyright-text'>
              Crik © 2025-2028  Manage Cookies
            </span>
            <div className='terms-cond'>
                  <span className='copyright-text'>
             Terms & Condition
            </span>
            <span className='copyright-text'>
             Privacy Policy
            </span>
            </div>
          </div>
        </div>
        </>
    )
}
export default Section5;
