"use client";
import { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = 0;
    let height = 0;
    let cx = 0;
    let cy = 0;

    let mouse = { x: 0, y: 0 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cx = width / 2;
      cy = height / 2;
    };

    const handleMouseMove = (e) => {
      mouse.x = (e.clientX - cx) / cx;
      mouse.y = (e.clientY - cy) / cy;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    const stars = [];
    const starCount = 800;

    class Star {
      constructor() {
        this.init(true);
      }

      init(randomZ = false) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * width;

        this.x = Math.cos(angle) * radius;
        this.y = Math.sin(angle) * radius;

        this.z = randomZ ? Math.random() * 2000 : 2000;

        this.speedZ = Math.random() * 25 + 10;
      }

      update() {
        this.z -= this.speedZ;

        const parallaxX = mouse.x * 30;
        const parallaxY = mouse.y * 30;

        if (this.z <= 1) {
          this.init(false);
          return;
        }

        const fov = 300;
        const scale = fov / (fov + this.z);

        const screenX = cx + (this.x - parallaxX) * scale;
        const screenY = cy + (this.y - parallaxY) * scale;

        const prevZ = this.z + (this.speedZ * 2);
        const prevScale = fov / (fov + prevZ);
        const prevScreenX = cx + (this.x - parallaxX) * prevScale;
        const prevScreenY = cy + (this.y - parallaxY) * prevScale;

        if (screenX > 0 && screenX < width && screenY > 0 && screenY < height) {
          this.draw(prevScreenX, prevScreenY, screenX, screenY, scale);
        }
      }

      draw(x1, y1, x2, y2, scale) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        const alpha = Math.max(0, 1 - this.z / 1500);

        ctx.strokeStyle = `rgba(220, 240, 255, ${alpha})`;
        ctx.lineWidth = 2 * scale;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      // fillStyle not working for bgcolor
      // ctx.fillStyle = "black"; 
      ctx.fillRect(0, 0, width, height);

      stars.sort((a, b) => b.z - a.z);
      stars.forEach((star) => star.update());

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed w-full f-full -z-1 top-0 left-0 pointer-event-none bg-radial bg-[radial-gradient(circle_at_center,#1e293b_0%,#000000_100%)] "
    />
  );
};

export default Starfield;