"use client";
import { useEffect, useState, useRef } from "react";

const SpaceCursor = () => {

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {

      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      ringPos.current.x += (targetX - ringPos.current.x) * 0.15;
      ringPos.current.y += (targetY - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targetX - 4}px, ${targetY - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

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

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen will-change-transform"
        style={{ transform: 'translate(-100px, -100px)' }}
      />

      <div
        ref={ringRef}
        className={`fixed top-0 left-0 border border-cyan-500 rounded-full pointer-events-none z-[9998] transition-all duration-100 ease-out mix-blend-screen flex items-center justify-center will-change-transform
                    ${isHovering ? "w-12 h-12 border-2 bg-cyan-900/30" : "w-8 h-8 border-1"}
                    ${isClicking ? "scale-75 bg-cyan-400/50" : "scale-100"}
                `}
        style={{ transform: 'translate(-100px, -100px)' }}
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