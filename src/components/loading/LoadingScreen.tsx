
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(progressBarRef.current, { width: "0%" });

    // Animation sequence
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out"
    }, "-=0.5")
    .to(logoRef.current, {
      scale: 1.1,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    }, "-=0.5")
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    }, "+=0.3");

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      {/* Animated Logo */}
      <div 
        ref={logoRef}
        className="mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider">
          <span className="inline-block animate-glow">PBMX</span>
        </h1>
        <p className="text-center text-gray-400 text-lg mt-4 tracking-wide">
          Premium Pickleball Experience
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
        />
      </div>

      {/* Loading dots */}
      <div className="flex space-x-2 mt-8">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
