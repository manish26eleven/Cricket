import React, { useEffect, useRef } from "react";

 const ScrollRevealImage = ({ src }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300; // control scroll distance

      const progress = Math.min(scrollTop / maxScroll, 1);

      const scale = 1.8 - progress * 0.8;   // 1.8 → 1.0
      const translateY = -(progress * 40);  // slide slightly up

      if (imgRef.current) {
        imgRef.current.style.transform =
          `scale(${scale}) translateY(${translateY}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-container">
      <img ref={imgRef} src={src} alt="" className="hero-image" />
    </div>
    
  );
};

export default ScrollRevealImage;
