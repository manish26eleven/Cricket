import React, { useEffect, useState } from "react";
import phone1 from './assets/phone1.png';

export default function PhoneScrollAnimation() {
  const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScroll(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Scroll ranges
  const animEnd = 800;     // end of animation
  const freezeEnd = 1800;  // end of freeze section

  // let rotateY = 0;
  // let rotateZ = 0;
  // let scale = 1;
  // let translateY = 0;
  // let position = "sticky";
  // let top = "200px";  // where it freezes

  // if (scroll < animEnd) {
  //   // --- PHASE 1: ANIMATION ---
  //   const t = scroll / animEnd;

  //   rotateY = -20 + 20 * t;
  //   rotateZ = 8 - 8 * t;
  //   scale = 1.9 - 0.9 * t;
  // } else if (scroll < freezeEnd) {
  //   // --- PHASE 2: FREEZE ---
  //   rotateY = 0;
  //   rotateZ = 0;
  //   scale = 1;
  // } else {
  //   // --- PHASE 3: NORMAL SCROLL (after freeze)
  //   position = "relative";
  //   top = "0px";
  // }

   return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f0f0"
      }}
    >
      <img
        src={phone1}
        alt="phone"
        style={{
          width: "400px",
          transformOrigin: "top center", // VERY IMPORTANT
          transform: `
            scaleY(1.15)
            scaleX(0.95)
          `,
          transition: "transform 0.4s ease",
        }}
      />
    </div>
  );
}