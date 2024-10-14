import React, { useEffect, useRef, useState } from "react";
import MeImage from "../../assets/images/me.png";
import "./herosection.css"; 

const roles = [
  "Graphic Designer",
  "Web Developer",
  "UI/UX Designer",
  "Programmer",
  "Video Editor",
];

const HeroSection = () => {
  const circlesRef = useRef([]);
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const circles = circlesRef.current;

    const circleOrigins = circles.map((circle) => ({
      x: circle.offsetLeft,
      y: circle.offsetTop,
    }));

    const handleMouseMove = (event) => {
      circles.forEach((circle, index) => {
        const origin = circleOrigins[index];
        const rect = circle.getBoundingClientRect();

        const circleCenterX = rect.left + rect.width / 2;
        const circleCenterY = rect.top + rect.height / 2;

        const dx = event.clientX - circleCenterX;
        const dy = event.clientY - circleCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const maxMoveDistance = 50;

        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const moveDistance = Math.min(maxMoveDistance, 150 - distance); 
          const newX = origin.x - Math.cos(angle) * moveDistance;
          const newY = origin.y - Math.sin(angle) * moveDistance;

          const boundingRect = {
            left: 0,
            right: window.innerWidth - rect.width,
            top: 0,
            bottom: window.innerHeight - rect.height,
          };

          const adjustedX = Math.max(boundingRect.left, Math.min(newX, boundingRect.right));
          const adjustedY = Math.max(boundingRect.top, Math.min(newY, boundingRect.bottom));

          circle.style.transform = `translate(${adjustedX - origin.x}px, ${adjustedY - origin.y}px)`;
        } else {
          circle.style.transform = `translate(0px, 0px)`;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let typingTimeout;
    let currentText = "";
    let index = 0;

    const type = () => {
      if (index < roles[roleIndex].length) {
        currentText += roles[roleIndex][index];
        setCurrentRole(currentText);
        index++;
        typingTimeout = setTimeout(type, 100);
      } else {
        setTimeout(() => {
          erase();
        }, 2000);
      }
    };

    const erase = () => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setCurrentRole(currentText);
        typingTimeout = setTimeout(erase, 50); 
      } else {
        index = 0;
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        type();
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [roleIndex]);

  return (
    <div className="relative flex items-center justify-center h-[700px] overflow-hidden">
      {/* Animated Circles */}
      <div className="circle circle-1" ref={(el) => (circlesRef.current[0] = el)}></div>
      <div className="circle circle-2" ref={(el) => (circlesRef.current[1] = el)}></div>
      <div className="circle circle-3" ref={(el) => (circlesRef.current[2] = el)}></div>
      <div className="circle circle-4" ref={(el) => (circlesRef.current[3] = el)}></div>

      <div className="circle-center"></div>

      {/* Hero Content */}
      <div className="flex flex-col items-center md:items-start md:ml-24 relative z-10 mb-10">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-end mb-2">
          <div className="flex mt-4 flex-col items-center md:items-start ">
            <div className="flex flex-row items-end md:items-start gap-2 md:gap-0 md:flex-col">
              <div className="text-lg sm:text-2xl lg:text-3xl font-Kiwi text-nowrap transition-all duration-300">
                Hi, I'm
              </div>
              <div className="text-gradient text-4xl sm:text-5xl lg:text-7xl font-semibold transition-all duration-300">
                Nishant
              </div>
            </div>
            <div className="text-lg sm:text-2xl lg:text-3xl font-Kiwi text-nowrap transition-all duration-300">
              a passionate
            </div>
          </div>
          <img src={MeImage} alt="Profile" className="w-72 h-72 lg:w-96 lg:h-96 transition-all duration-300" />
        </div>
        <div className="h-16 md:h-24 text-gradient text-4xl sm:text-5xl lg:text-7xl font-semibold transition-all duration-300">
          {currentRole}
          <span className="blinking-cursor">|</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
