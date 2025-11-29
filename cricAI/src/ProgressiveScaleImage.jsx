import { useEffect, useRef } from "react";
import phone1 from "./assets/phone1.png";
import DRSPANEL from "./assets/DRSpanel.png";
export default function ProgressiveScaleImage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = DRSPANEL;

    img.onload = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const w = img.width;
      const h = img.height;

      canvas.width = w * 2;
      canvas.height = h;

      // enable smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const rowHeight = 3; // smoother

      for (let y = 0; y < h; y += rowHeight) {
        const t = y / h;
        const scaleX = 1.2 + (2.0 - 1.2) * t;

        ctx.drawImage(
          img,
          0, y, w, rowHeight,                                   // source
          (canvas.width - w * scaleX) / 2, y,                  // target x,y
          w * scaleX, rowHeight                                // scaled row
        );
      }
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <canvas ref={canvasRef} style={{ width: "400px" }} />
    </div>
  );
}
