import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Rope = () => {
  const ropeRef = useRef(null);
  const controlPoint = { x: 600, y: 100 }; // Initial control point

  useEffect(() => {
    gsap.set(ropeRef.current, { attr: { d: pathString(controlPoint) } });
  }, []);

  const pathString = ({ x, y }) =>
    `M 50 100 Q ${x} ${y} 1150 100`; // Dynamic path

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    gsap.to(ropeRef.current, {
      attr: { d: pathString({ x: mouseX, y: mouseY }) },
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(ropeRef.current, {
      attr: { d: pathString(controlPoint) },
      duration: 1,
      ease: "elastic.out(1, 0.2)",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ width: "100%", maxWidth: "1200px", margin: "auto", height: "200px" }}
    >
      <svg
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <path
          ref={ropeRef}
          stroke="white"
          fill="transparent"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default Rope;
