// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import phone1 from "./assets/phone1.png";
// import DRSPANEL from "./assets/DRSpanel.png";
// export default function MeshWarpThree() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(800, 1200);
//     mountRef.current.appendChild(renderer.domElement);

//     const scene = new THREE.Scene();
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.0, 10);
//     camera.position.z = 1;

//     const SCROLL_START = 330;
//      // scrollY threshold
//     const SCROLL_RANGE = 400; 
//     const FREEZE_START = 900;
// const FREEZE_END = 1100;    // sensitivity (smaller = more sensitive)

//     const loader = new THREE.TextureLoader();
//     loader.load(phone1, (texture) => {
//       texture.minFilter = THREE.LinearFilter;
//       texture.magFilter = THREE.LinearFilter;

//       const imgAspect = texture.image.width / texture.image.height;
//       const planeH = 1.8;
//       const planeW = planeH * imgAspect;

//       const geometry = new THREE.PlaneGeometry(planeW, planeH, 60, 120);

//       const origPositions = geometry.attributes.position.array.slice();
//       const pos = geometry.attributes.position;

//       const warpAmount = 0.65;
//       const shiftAmount = -0.35;

//       const material = new THREE.MeshBasicMaterial({
//         map: texture,
//         transparent: true,
//       });

//       const mesh = new THREE.Mesh(geometry, material);
//       scene.add(mesh);

//       let scrollProgress = 0;

//       function animate() {
//         const y = window.scrollY;
//         console.log(y);

//         // ---- NEW SCROLL LOGIC (more sensitive, starts at y=700) ----
//         let rawProgress = (y - SCROLL_START) / SCROLL_RANGE;
// rawProgress = Math.min(1, Math.max(0, rawProgress));

// /* --- NEW SMART FREEZE LOGIC --- */
// if (y >= FREEZE_START && rawProgress < 1) {
//   // image STAYS STICKY until scale becomes normal (progress = 1)
//   scrollProgress = (FREEZE_START - SCROLL_START) / SCROLL_RANGE;
// } else {
//   scrollProgress = rawProgress; 
// }
// ;

// // clamp 0 → 1
// // rawProgress = Math.min(1, Math.max(0, rawProgress));

// /* --- FREEZE LOGIC --- */

// if (y >= FREEZE_START && y <= FREEZE_END) {
//   // lock the progress at the position where freeze starts
//   scrollProgress = (FREEZE_START - SCROLL_START) / SCROLL_RANGE;
// } else {
//   scrollProgress = rawProgress;
// }

//         for (let i = 0; i < pos.count; i++) {
//           const ox = origPositions[i * 3 + 0];
//           const oy = origPositions[i * 3 + 1];

//           const t = 1.0 - ((oy - -planeH / 2) / planeH);

//           const warpedX = ox * (1 + warpAmount * t) + shiftAmount * t;

//           const finalX = THREE.MathUtils.lerp(warpedX, ox, scrollProgress);

//           pos.setX(i, finalX);
//         }

//         pos.needsUpdate = true;

//         renderer.render(scene, camera);
//         requestAnimationFrame(animate);
//       }

//       animate();
//     });

//     return () => {
//       if (mountRef.current?.contains(renderer.domElement)) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         width: "800px",
//         height: "1200px",
//         margin: "0 auto",
//         overflow: "hidden",
//       }}
//     />
//   );
// }

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import phone1 from "./assets/phone1.png";

export default function MeshWarpThree() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(800, 1200);
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const SCROLL_START = 700;     // scrollY threshold
    const SCROLL_RANGE = 400;     // sensitivity (smaller = more sensitive)

    const loader = new THREE.TextureLoader();
    loader.load(phone1, (texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      const imgAspect = texture.image.width / texture.image.height;
      const planeH = 1.8;
      const planeW = planeH * imgAspect;

      const geometry = new THREE.PlaneGeometry(planeW, planeH, 60, 120);

      const origPositions = geometry.attributes.position.array.slice();
      const pos = geometry.attributes.position;

      const warpAmount = 0.65;
      const shiftAmount = -0.45;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      let scrollProgress = 0;

      function animate() {
        const y = window.scrollY;

        // ---- NEW SCROLL LOGIC (more sensitive, starts at y=700) ----
        scrollProgress = Math.min(
          1,
          Math.max(0, (y - SCROLL_START) / SCROLL_RANGE)
        );

        for (let i = 0; i < pos.count; i++) {
          const ox = origPositions[i * 3 + 0];
          const oy = origPositions[i * 3 + 1];

          const t = 1.0 - ((oy - -planeH / 2) / planeH);

          const warpedX = ox * (1 + warpAmount * t) + shiftAmount * t;

          const finalX = THREE.MathUtils.lerp(warpedX, ox, scrollProgress);

          pos.setX(i, finalX);
        }

        pos.needsUpdate = true;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      animate();
    });

    return () => {
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "800px",
        height: "1200px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    />
  );
}
