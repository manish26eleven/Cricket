import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import phone1 from "./assets/phone1.png";

// Shader-based warp: displaces vertices in the vertex shader using a `uProgress` uniform.
// Framer Motion drives `uProgress` for smooth, springy scroll-driven animation.

export default function ShaderWarpThree({ width = 800, height = 1200 }) {
  const mountRef = useRef(null);
  const scrollProgressRef = useRef(0);

  // Framer: get scrollY and map to 0..1 over chosen range
  const { scrollY } = useScroll();
  // tune these to match previous behavior
  const START = 700;
  const END = 1100; // START + RANGE (400)
  const progress = useTransform(scrollY, [START, END], [0, 1], { clamp: true });

  // Convert to a spring for smooth easing
  const eased = useSpring(progress, { stiffness: 140, damping: 28 });

  // update our ref whenever eased changes so the render loop can read it
  useMotionValueEvent(eased, "change", (v) => {
    scrollProgressRef.current = v;
  });

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Scene + camera (orthographic so image doesn't perspective-distort)
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    // Load texture
    const loader = new THREE.TextureLoader();

    // Plane geometry with decent subdivisions for vertex displacement
    // We'll create geometry after texture loads to match aspect
    loader.load(
      phone1,
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;

        const imgAspect = texture.image.width / texture.image.height;
        const planeH = 1.8; // world units
        const planeW = planeH * imgAspect;

        const geometry = new THREE.PlaneGeometry(planeW, planeH, 120, 240);

        // Shader material
        const material = new THREE.ShaderMaterial({
          uniforms: {
            uTexture: { value: texture },
            uProgress: { value: 0.0 },
            uWarpAmount: { value: 0.65 },
            uShiftAmount: { value: -0.35 },
            uPlaneH: { value: planeH },
            uTime: { value: 0.0 },
            uResolution: { value: new THREE.Vector2(width, height) },
          },
          vertexShader: `
         precision mediump float;

uniform float uProgress;
uniform float uWarpAmount;
uniform float uShiftAmount;
uniform float uPlaneH;

varying vec2 vUv;

void main() {
  vUv = uv;

  vec3 pos = position;

  // map y from [-h/2, +h/2] -> [0,1]
  float t = 1.0 - ((pos.y - (-uPlaneH / 2.0)) / uPlaneH);

  // warp
  float warpedX = pos.x * (1.0 + uWarpAmount * t) + uShiftAmount * t;

  pos.x = mix(warpedX, pos.x, uProgress);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

          `,
          fragmentShader: `
            precision mediump float;
            uniform sampler2D uTexture;
            varying vec2 vUv;

            void main() {
              vec4 c = texture2D(uTexture, vUv);
              // output texture color (support transparency)
              gl_FragColor = c;
            }
          `,
          transparent: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Responsive handling (keeps camera plane fixed to -1..1 coord space)
        function resize() {
          const w = mount.clientWidth;
          const h = mount.clientHeight;
          renderer.setSize(w, h);
          material.uniforms.uResolution.value.set(w, h);
        }

        // initial resize in case container size differs from props
        resize();
        window.addEventListener("resize", resize);

        // Animation loop
        let rafId = null;
        let lastTime = performance.now();

        function renderLoop(now) {
          rafId = requestAnimationFrame(renderLoop);

          const dt = (now - lastTime) * 0.001;
          lastTime = now;

          // update uniforms from motion-driven ref
          material.uniforms.uProgress.value = scrollProgressRef.current;
          material.uniforms.uTime.value += dt;

          renderer.render(scene, camera);
        }

        rafId = requestAnimationFrame(renderLoop);

        // cleanup when texture-loaded scope ends
        const cleanup = () => {
          cancelAnimationFrame(rafId);
          window.removeEventListener("resize", resize);
          geometry.dispose();
          material.dispose();
          texture.dispose();
        };

        // attach cleanup to outer cleanup via closure
        mountRef.current._cleanupShader = cleanup;
      },
      undefined,
      (err) => {
        console.error("Texture load error:", err);
      }
    );

    // outer cleanup
    return () => {
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // call inner cleanup if present
      try {
        mountRef.current?._cleanupShader?.();
      } catch (e) {}

      renderer.dispose();
    };
  }, [width, height]);

  return (
    <div
      ref={mountRef}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        margin: "0 auto",
        overflow: "hidden",
      }}
    />
  );
}
