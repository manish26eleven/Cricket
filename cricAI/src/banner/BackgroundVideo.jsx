import bannervideo from '../assets/bannervideo.mp4';
import React from 'react';
export default function BackgroundVideo() {
  return (
    <div 
     style={{ width: "100%", height: "100vh", width:'100vw',overflow: "hidden" }}
    >
      <video
        src={bannervideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
       <div
        style={{
          position: "absolute",
          top: "46%",
          left: "160px",       // adjust as you like
          transform: "translateY(-50%)",
          color: "white",
          maxWidth: "400px",
        }}
      >
        <h1 style={{ fontSize: "56px", margin: 0 , fontWeight: 700 , color:'#FFFFFF' }}>“AI-Powered DRS for Every [Player | Match | Decision]”</h1>
        <p style={{ fontSize: "18px", marginTop: "10px"  , fontWeight: 400 , color:'#FFFFFF'}}>
         Crik.ai brings professional-level Decision Review Systems to clubs, tournaments, and everyday players — delivering precision, fairness, and insights powered by cutting-edge AI.<br />
         
        </p>
        <button style={{color : '#00195D', padding: '11px 26px', fontSize: '18px', fontWeight: 500, backgroundColor: '#FFFFFF', border: 'none', borderRadius: '10px', marginTop: '16px', cursor: 'pointer'}}>
          Get Crik.ai
        </button>
      </div>
    </div>
  );
}
