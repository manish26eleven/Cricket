import React, { useEffect, useRef } from "react";
import "./App.css";

const ScrollStretchImage = ({ src }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight * 0.8;

      const progress = Math.min(scrollY / maxScroll, 1);

      // scale: 1.8 → 1.0
      const scale = 1.8 - progress * 0.8;

      if (imgRef.current) {
        imgRef.current.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="stretch-container">
      <img ref={imgRef} src={src} alt="" className="stretch-image" />
    </div>
  );
};

export default ScrollStretchImage;
