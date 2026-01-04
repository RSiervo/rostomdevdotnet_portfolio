
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sets visible when in view, invisible when out of view (triggering fade out)
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% visibility triggers the change
        rootMargin: "-20px 0px" // Slight offset so it triggers nicely within view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out will-change-transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-none' 
          : 'opacity-0 translate-y-10 scale-95 blur-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
