import './Header.css';
import criklogo from '../../assets/criklogo.svg';
import MenuButton from '../../assets/MenuButton.svg';
const Header = () => {
   const isMobile = window.innerWidth  < 768 ? true : false;
  console.log(isMobile);
  return (
    <>
      <div className="head-container">
        <div className="logo-container">
          <img 
            src={criklogo}
            className="logo-img"

          />
          <span className='logo-text'>
            Crik.
          </span>
          <span className='logo-text1'>ai</span>
        </div>
        

        { isMobile ? <>
         <div className='mobile-options'>
          <img src={MenuButton} style={{height:'45px'}}/>
         </div>
        </> : 
          <><div className="header-titles">
            <span className='selected-title'>Home</span>
            <span className='titles'>Features</span>
            <span className='titles'>How Crik.ai works</span>
            <span className='titles'>Testinomials</span>
        </div>

        <div className="header-crikbutton">
            <button className='crik-ai-button'>
              Get Crik.ai
            </button>
        </div>
        </>}
      </div>
    </>
  );
};

export default Header;
