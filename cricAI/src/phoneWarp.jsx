import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import DRSPANEL from "./assets/DRSPANEL.png";
import phonemockup from "./assets/phonemockup.jpeg";

export default function PhoneWarp() {
  const { scrollY } = useScroll();

  const base = useTransform(scrollY, [500, 1100], [0, 1] , { clamp: true });

  const freezeStart = 0.35;
  const freezeEnd = 1;

  const eased = useTransform(base, (v) => {
    if (v < freezeStart) return v;
    if (v > freezeEnd) return v - (freezeEnd - freezeStart);
    return v;  // freeze point
  });

  const smooth = useSpring(eased, { stiffness: 150, damping: 90 });

 const slideToRight = useTransform(scrollY, [1100, 1500], [0, 1]);

// horizontal movement
const moveRight = useTransform(slideToRight, [0, 1], ["0px", "-390px"]);

// NEW: vertical movement
const moveDown = useTransform(slideToRight, [0, 1], ["0px", "970px"]);

const slideToLeft = useTransform(scrollY, [1800, 2300], [0, 1]);

  const rotateY = useTransform(smooth, [0, 1], ["22deg", "0deg"]);
  const perspectiveVal = useTransform(smooth, [0, 1], ["700px", "0px"]);
  const skew = useTransform(smooth, [0, 1], ["-10deg", "0deg"]);
  const scaleX = useTransform(smooth, [0, 1], [1.18, 1]);
  const translateX = useTransform(smooth, [0, 1], ["-50px", "0px"]);

  return (
  <div
  style={{
    width: "720px",
    height: "860px",    // content height so we can scroll
    margin: "40px auto",
  }}
>
  {/* Sticky Freeze Wrapper */}
  <div
    style={{
      position: "sticky",
      top: "40px",       // <-- Image freezes here
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "none",
    }}
  >
    <motion.div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        perspective: perspectiveVal,
        rotateY: rotateY,
         x: moveRight,  
          y: moveDown,  
      }}
    >
      <motion.img
        src={phonemockup}
        alt="phone"
        style={{
          width: "70%",
          height: "60%",
          skewX: skew,
          scaleX,
          x: translateX,
          borderRadius: "30px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.50)",
        }}
      />
    </motion.div>
  </div>
</div>

  );
}
