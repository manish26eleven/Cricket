import React, { useEffect, useRef } from "react";
import reglInit from "regl";
import DRSPANEL from "./assets/DRSpanel.png";
import rose from "./assets/rose.jpg";
import phone1 from "./assets/phone1.png";
export default function ProgressiveWarpImage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = phone1;
    img.onload = () => startRegl(img);
  }, []);

  function startRegl(imageObj) {
    const regl = reglInit({
      canvas: canvasRef.current,
      attributes: { antialias: true }
    });

    const texture = regl.texture(imageObj);

    const drawImage = regl({
      frag: `
    precision mediump float;
uniform sampler2D tex;
varying vec2 uv;

void main() {
  gl_FragColor = texture2D(tex, uv);
}
      `,
      vert: `
      precision mediump float;
attribute vec2 position;
varying vec2 uv;

void main() {
  uv = 0.5 * (position + 1.0);

  float t = uv.y;         // 0 = top, 1 = bottom
  float bend = 1.0 + t*0.8;  // adjust warping strength

  vec2 warped = vec2(position.x * bend, position.y);
  gl_Position = vec4(warped, 0.0, 1.0);
}
      `,
      attributes: {
        position: [
          -1, -1,
           1, -1,
          -1,  1,
           1,  1
        ]
      },
      elements: [
        [0, 1, 2],
        [2, 1, 3]
      ],
      uniforms: {
        tex: texture
      }
    });

    regl.frame(() => drawImage());
  }

  return (
     <div style={{ display: "flex", justifyContent: "center" }}>
    <canvas
      ref={canvasRef}
      width={800}
      height={800}
      style={{
        width: "800px",
        height: "800px",
        display: "block"
      }}
    />
  </div>
  );
}
