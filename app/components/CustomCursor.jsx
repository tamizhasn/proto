'use client';
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // Framer Motion values for smooth tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring physics for the trailing ring (smooth delay)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Detect when hovering over clickable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 1. Main Dot (Follows exactly) */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#111827] rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* 2. Trailing Ring (Spring physics + Hover Expansion) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-[#111827]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          backgroundColor: isHovering ? "rgba(17, 24, 39, 0.1)" : "rgba(17, 24, 39, 0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </>
  );
}