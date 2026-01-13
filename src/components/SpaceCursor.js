"use client";
import { useEffect, useState, useRef } from "react";

const SpaceCursor = () => {
 
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

 
  useEffect(() => {
    let animationFrameId;
    
    const animateRing = () => {
      setRingPos((prev) => {
 
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.15, 
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(animateRing);
    };
    
    animationFrameId = requestAnimationFrame(animateRing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

 
  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      

      const target = e.target;
      const isClickable = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("cursor-pointer");
        
      setIsHovering(isClickable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
 
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          transform: `translate(${mousePos.x - 4}px, ${mousePos.y - 4}px)`,
        }}
      />
 
      <div
        className={`fixed top-0 left-0 border border-cyan-500 rounded-full pointer-events-none z-[9998] transition-all duration-100 ease-out mix-blend-screen flex items-center justify-center
          ${isHovering ? "w-12 h-12 border-2 bg-cyan-900/30" : "w-8 h-8 border-1"}
          ${isClicking ? "scale-75 bg-cyan-400/50" : "scale-100"}
        `}
        style={{
          transform: `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`,
        }}
      >
 
        {isHovering && (
          <>
            <div className="absolute w-full h-[1px] bg-cyan-400/50" />
            <div className="absolute h-full w-[1px] bg-cyan-400/50" />
          </>
        )}
      </div>
    </>
  );
};

export default SpaceCursor;