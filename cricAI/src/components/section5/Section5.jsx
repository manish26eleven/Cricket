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
                <span className='footer-last-texts'>Resourse</span>
                <span className='footer-last-text'>Integration</span>
                 <span className='footer-last-text'>Integration Detail</span>
                  <span className='footer-last-text'>Sign Up</span>
                   <span className='footer-last-text'>404</span>
                </div>
                 <div className='footer-items'>
                <span className='footer-last-texts'>Contact</span>
                <a 
        href="https://www.instagram.com/crik_ai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
      
        
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a> {/* <span className='footer-last-text'>Instagram</span> */}
                 {/* <span className='footer-last-text'>Dribbble</span> */}
                  <a 
        href="https://www.youtube.com/@khel.ai.cricket" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                </a>
                   <a 
        href="https://www.linkedin.com/company/khel-ai/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  {/* <span className='footer-last-text'>Behance</span> */}
                   {/* <span className='footer-last-text'>Twitter</span> */}
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
