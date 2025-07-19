"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Position = {
  x: "left" | "right";
  y: number; // percentage from top
};

export default function StickyCat() {
  const [position, setPosition] = useState<Position>({ x: "right", y: 60 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInitialSlideIn, setIsInitialSlideIn] = useState(false);
  const [lastPositions, setLastPositions] = useState<("left" | "right")[]>([]);

  useEffect(() => {
    // Check mobile immediately on mount
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice =
        /mobile|android|iphone|ipad|phone/i.test(userAgent) ||
        window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();

    // Add 1 second delay before showing the cat
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Start initial slide-in animation
      setTimeout(() => {
        setIsInitialSlideIn(true);
      }, 100);
    }, 1000);

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const getRandomPosition = (): Position => {
    // Check if we've been on the same side twice in a row
    const lastTwo = lastPositions.slice(-2);
    const sameSideTwice = lastTwo.length === 2 && lastTwo[0] === lastTwo[1];

    let x: "left" | "right";
    if (sameSideTwice) {
      // Force the opposite side
      x = lastTwo[0] === "right" ? "left" : "right";
    } else {
      // Random choice
      x = Math.random() > 0.5 ? "left" : "right";
    }

    // Calculate safe vertical range considering image height
    // Image is 80px, so we need to ensure it doesn't go below viewport height - 80px
    const imageHeight = 80; // px
    const viewportHeight = window.innerHeight;
    const maxY = ((viewportHeight - imageHeight) / viewportHeight) * 100;

    // Ensure minimum 10% from top and maximum safe distance from bottom
    const minY = 10;
    const safeMaxY = Math.max(minY + 10, Math.min(85, maxY));

    const y = Math.random() * (safeMaxY - minY) + minY;
    return { x, y };
  };

  const handleInteraction = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation

    setIsAnimating(true);

    // Slide out animation
    setTimeout(() => {
      const newPosition = getRandomPosition();
      setPosition(newPosition);

      // Update last positions history
      setLastPositions((prev) => [...prev, newPosition.x].slice(-2));

      // Slide in animation
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const slideDirection =
    position.x === "right" ? "translateX(100px)" : "translateX(-100px)";
  const initialSlideDirection =
    position.x === "right" ? "translateX(100px)" : "translateX(-100px)";

  if (!isLoaded) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-in-out ${
        position.x === "right" ? "right-0" : "left-0"
      } ${isAnimating ? "opacity-0 scale-75" : "opacity-100 scale-100"}`}
      style={{
        top: `${position.y}%`,
        transform: isAnimating
          ? slideDirection
          : isInitialSlideIn
          ? "translateX(0)"
          : initialSlideDirection,
      }}
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
    >
      <Image
        src={isMobile ? "/proto-m.png" : "/proto.png"}
        alt="Sticky Cat Head"
        width={isMobile ? 65 : 80}
        height={isMobile ? 65 : 80}
        className="cursor-pointer"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
          transform: position.x === "left" ? "scaleX(-1)" : "scaleX(1)",
        }}
      />
    </div>
  );
}
