import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate for non-touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth lerp for trailing ring
  useEffect(() => {
    let animId: number;
    const follow = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
      animId = requestAnimationFrame(follow);
    };
    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  // Check hover on interactive elements
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.closest('[role="button"]') ||
        target?.closest('.interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Center sharp gold dot */}
      <div
        className="cursor-dot hidden md:block"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Soft trailing gold aura ring */}
      <div
        className="cursor-ring hidden md:block"
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%) scale(${
            isHovered ? 1.6 : 1
          })`,
          borderColor: isHovered ? '#F5D77A' : 'rgba(212, 175, 55, 0.45)',
          backgroundColor: isHovered ? 'rgba(245, 215, 122, 0.08)' : 'transparent',
        }}
      />
    </>
  );
};
