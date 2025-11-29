import React, { useEffect, useRef } from "react";

const ScrollZoomImage = ({ src }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 300; // control zoom speed

      const progress = Math.min(scrollTop / maxScroll, 1);

      if (imgRef.current) {
        
          imgRef.current.style.transform =
  `scale(${1.1 + progress * 0.4}) translateY(${0 - progress * 90}%)`;

      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={styles.container}>
      <img ref={imgRef} src={src} alt="" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    left : '500px',
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "30%",
    height: "auto",
    transformOrigin: "bottom",
    transform: "scale(1.1) translateY(90%)",
    transition: "transform 0.3s",
    willChange: "transform",
  },
};

export default ScrollZoomImage;
