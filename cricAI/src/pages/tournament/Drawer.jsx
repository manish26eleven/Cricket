import React, { useState } from "react";
import "./Drawer.css"; // ← pure CSS file

  const Drawer = ({open , setOpen , onScroll})  => {
  // const [open, setOpen] = useState(false);
  const goToHome = (i) => {
     setOpen(false);
     {i != 0 && onScroll(i) }
  }
  return (
    <>
   {open &&  <>
     
     

      
      <div className={`overlay mobile-only ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

  
      <aside className={`drawer mobile-only ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <span className="titles">Menu</span>
          <button className="close-btn" onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="drawer-nav">
          <a href="#home" className='selected-title' onClick={() => goToHome('0')}>Home</a>
          <a href="#profile" className='titles' onClick={() => goToHome('1')}>Features</a>
          <a href="#settings" className='titles' onClick={() => goToHome('2')}>How crik.ai Works</a>
          <a href="#logout" className='titles' onClick={() => goToHome('3')}>Testinomial</a>
        </nav>
      </aside>
    </>}
    </>
  );
}
export default Drawer;
