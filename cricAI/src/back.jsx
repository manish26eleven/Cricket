export default back => () =>  {
  return (
     <div>
          {/* Background Video */}
          <BackgroundVideo />
    
          {/* Header (MOVED HERE) */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: "88px",
              display: "flex",
              backgroundColor: "rgba(255,255,255,0.2)",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            <div style={{ fontSize: "27px", fontWeight: "700", marginLeft: "20px" }}>
              Crik.ai
            </div>
    
            <div style={{ display: "flex", gap: "72px" }}>
              <span style={{ fontSize: "25px" , fontFamily: '"Arial Narrow", "Helvetica Condensed", sans-serif', fontWeight: 500 }}>Home</span>
              <span style={{ fontSize: "25px" , fontFamily: '"Arial Narrow", "Helvetica Condensed", sans-serif' }}>About</span>
              <span style={{ fontSize: "25px" , fontFamily: '"Arial Narrow", "Helvetica Condensed", sans-serif' }}>Features</span>
              <span style={{ fontSize: "25px" , fontFamily: '"Arial Narrow", "Helvetica Condensed", sans-serif' }}>How It Works</span>
              <span style={{ fontSize: "25px" , fontFamily: '"Arial Narrow", "Helvetica Condensed", sans-serif' }}>Support</span>
            </div>
    
            <button
              style={{
                background: "#2B4BA8",
                color: "white",
                fontFamily: '"Arial Narrow", "Helvetica Condensed", sans-serif',
                height: "56px",
                borderRadius: "10px",
                border: "none",
                fontSize: "20px",
                fontWeight: 500,
                marginRight: "20px",
              }}
            >
              Get Cric
            </button>
          </div>
    
          {/* CONTENT */}
          <div
            style={{
              paddingTop: "40px", // push below header
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
    
            }}
          >
            <div style={{ textAlign: "center" , gap:'8px' ,  display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <span style={{ fontSize: "26px" , fontWeight: 600 }}>Trusted by Several Cricket Associations</span>
              <span style={{fontSize:'18px' , fontWeight:400}}>Chosen by cricket authorities who value precision, fairness, and innovation.</span>
            </div>
          </div>
          {/* <PhoneScrollAnimation/> */}
          {/* <ProgressiveScaleImage/> */}
          {/* <ProgressiveWarpImage/> */}
          {/* <MeshWarp/> */}
         {/* <ShaderWarpThree/> */}
         {/* <ScrollVelocity
      texts={['React Bits', 'Scroll Down']} 
      velocity='50' 
      className="custom-scroll-text"
    /> */}
         <PhoneWarp/>
       <div
      style={{
        display: "flex",
        width: "100%",
        // height: "500px",
      }}
    >
      {/* LEFT DIV (empty space for image) */}
      <div
        style={{
          flex: 1,        // takes 50% width
          // background: "#f0f0f0", // just to show area (optional)
        }}
      ></div>
    
      {/* RIGHT DIV (content) */}
      <div
        style={{
          flex: 1,        // takes 50% width
          padding: "32px",
          background: "white",
          marginTop: '150px',
          height:'730px',
           border:'1px' , borderRadius:'15px' , border: "1px solid #DFE2ED", 
          
        }}
      >
       
        <div style={{paddingTop: '24px' , paddingBottom : '24px' ,  paddingRight: '16px' , paddingLeft: '16px' , display:'flex', flexDirection:'column' , justifyContent:'center' , alignItems:'flex-start' , border:'1px' , borderRadius:'15px' , border: "1px solid #DFE2ED",  }}>
              <div style={{display:'flex', flexDirection:'row', gap: '10px' , height:'29px'}}>
                  <FaHome size={30} color="blue" />
                  <span style={{ fontSize: "22px", fontWeight: 600, color: "#4667C9"  }}>
                    DRS For Match
                  </span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 400, color: "#66718C", marginTop: '16px' }}>
                Give your Cricket Ground instant DRS capabilities with Crik.ai's simple camera + app setup.Enable fair decisions and quick AI reviews for every local match.
              </span>
              <button style={{
                marginTop: "24px",
                height:'56px',
                width:'192px',
                borderRadius: "10px",
                border: "none",
                color:'#FFFFFF',
                backgroundColor: "#2B4BA8",
                }}>
                Get DRS for Match
              </button>
        </div>
        <div style={{paddingTop: '24px' ,marginTop: '30px' , paddingBottom : '24px' ,  paddingRight: '16px' , paddingLeft: '16px' , display:'flex', flexDirection:'column' , justifyContent:'center' , alignItems:'flex-start' , border:'1px' , borderRadius:'15px' , border: "1px solid #DFE2ED",  }}>
              <div style={{display:'flex', flexDirection:'row', gap: '10px' , height:'29px'}}>
                  <FaHome size={30} color="blue" />
                  <span style={{ fontSize: "22px", fontWeight: 600, color: "#4667C9"  }}>
                    DRS For Ground
                  </span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 400, color: "#66718C", marginTop: '16px' }}>
                Give your Cricket Ground instant DRS capabilities with Crik.ai's simple camera + app setup.Enable fair decisions and quick AI reviews for every local match.
              </span>
              <button style={{
                marginTop: "24px",
                height:'56px',
                width:'192px',
                borderRadius: "10px",
                border: "none",
                color:'#FFFFFF',
                backgroundColor: "#2B4BA8",
                }}>
                Get DRS for Ground
              </button>
        </div>
       <div style={{paddingTop: '24px' ,marginTop: '30px' , paddingBottom : '24px' ,  paddingRight: '16px' , paddingLeft: '16px' , display:'flex', flexDirection:'column' , justifyContent:'center' , alignItems:'flex-start' , border:'1px' , borderRadius:'15px' , border: "1px solid #DFE2ED",  }}>
              <div style={{display:'flex', flexDirection:'row', gap: '10px' , height:'29px'}}>
                  <FaHome size={30} color="blue" />
                  <span style={{ fontSize: "22px", fontWeight: 600, color: "#4667C9"  }}>
                    DRS For Tournament
                  </span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 400, color: "#66718C", marginTop: '16px' }}>
                Give your Cricket Ground instant DRS capabilities with Crik.ai's simple camera + app setup.Enable fair decisions and quick AI reviews for every local match.
              </span>
              <button style={{
                marginTop: "24px",
                height:'56px',
                width:'230px',
                borderRadius: "10px",
                border: "none",
                color:'#FFFFFF',
                backgroundColor: "#2B4BA8",
                }}>
                Get DRS for Tournament
              </button>
        </div>
      </div>
      
    </div>
    
    
      <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        marginTop: "70px",   // adjust to push it down
      }}
    >
      <span style={{ fontSize: "40px", fontWeight: 600, color: "#052977" , fontFamily: "Roboto Condensed, sans-serif"  }}>
        Features
      </span>
    
      <span style={{ fontSize: "24px", fontWeight: 400, color: "#052977" , fontFamily: "Roboto Condensed, sans-serif"  }}>
        Features that Makes Cricket faster, fairer, and smarter.
      </span>
    </div>
       <div
      style={{
        display: "flex",
        width: "100%",
        // height: "500px",
      }}
    >
      {/* LEFT DIV (empty space for image) */}
     
    
      {/* RIGHT DIV (content) */}
      <div
        style={{
          flex: 1,        // takes 50% width
          padding: "32px",
          background: "white",
          marginTop: '80px',
          height:'730px',
           border:'1px' , borderRadius:'15px' , border: "1px solid #DFE2ED", 
          
        }}
      >
       
        <div style={{paddingTop: '24px' , paddingBottom : '24px' ,  paddingRight: '16px' , paddingLeft: '16px' , display:'flex', flexDirection:'column' , justifyContent:'center' , alignItems:'flex-start' , border:'1px' , borderRadius:'15px' , border: "1px solid #DFE2ED",  }}>
              <div style={{display:'flex', flexDirection:'row', gap: '10px' , height:'29px'}}>
                  <FaHome size={30} color="blue" />
                  <span style={{ fontSize: "22px", fontWeight: 600, color: "#4667C9"  }}>
                    DRS For Match
                  </span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 400, color: "#66718C", marginTop: '16px' }}>
                Give your Cricket Ground instant DRS capabilities with Crik.ai's simple camera + app setup.Enable fair decisions and quick AI reviews for every local match.
              </span>
              <button style={{
                marginTop: "24px",
                height:'56px',
                width:'192px',
                borderRadius: "10px",
                border: "none",
                color:'#FFFFFF',
                backgroundColor: "#2B4BA8",
                }}>
                Get DRS for Match
              </button>
        </div>
        <div style={{paddingTop: '24px' ,marginTop: '30px' , paddingBottom : '24px' ,  paddingRight: '16px' , paddingLeft: '16px' , display:'flex', flexDirection:'column' , justifyContent:'center' , alignItems:'flex-start' , border:'1px' , borderRadius:'15px' , border: "1px solid #DFE2ED",  }}>
              <div style={{display:'flex', flexDirection:'row', gap: '10px' , height:'29px'}}>
                  <FaHome size={30} color="blue" />
                  <span style={{ fontSize: "22px", fontWeight: 600, color: "#4667C9"  }}>
                    DRS For Ground
                  </span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 400, color: "#66718C", marginTop: '16px' }}>
                Give your Cricket Ground instant DRS capabilities with Crik.ai's simple camera + app setup.Enable fair decisions and quick AI reviews for every local match.
              </span>
              <button style={{
                marginTop: "24px",
                height:'56px',
                width:'192px',
                borderRadius: "10px",
                border: "none",
                color:'#FFFFFF',
                backgroundColor: "#2B4BA8",
                }}>
                Get DRS for Ground
              </button>
        </div>
       <div style={{paddingTop: '24px' ,marginTop: '30px' , paddingBottom : '24px' ,  paddingRight: '16px' , paddingLeft: '16px' , display:'flex', flexDirection:'column' , justifyContent:'center' , alignItems:'flex-start' , border:'1px' , borderRadius:'15px' , border: "1px solid #DFE2ED",  }}>
              <div style={{display:'flex', flexDirection:'row', gap: '10px' , height:'29px'}}>
                  <FaHome size={30} color="blue" />
                  <span style={{ fontSize: "22px", fontWeight: 600, color: "#4667C9"  }}>
                    DRS For Tournament
                  </span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: 400, color: "#66718C", marginTop: '16px' }}>
                Give your Cricket Ground instant DRS capabilities with Crik.ai's simple camera + app setup.Enable fair decisions and quick AI reviews for every local match.
              </span>
              <button style={{
                marginTop: "24px",
                height:'56px',
                width:'230px',
                borderRadius: "10px",
                border: "none",
                color:'#FFFFFF',
                backgroundColor: "#2B4BA8",
                }}>
                Get DRS for Tournament
              </button>
        </div>
      </div>
       <div
        style={{
          flex: 1,        // takes 50% width
          // background: "#f0f0f0", // just to show area (optional)
        }}
      ></div>
      
    </div>
    
    
        </div>
  )
}