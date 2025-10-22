"use client"

import React, { Suspense, lazy, useState, useEffect } from 'react';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline/next'));

export function RobotSpline() {
  const [isVisible, setIsVisible] = useState(false);

  // Delay loading to prevent blocking initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Load after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return (
      <div className="absolute inset-0 w-full h-full bg-transparent" />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
        <Spline
          scene="https://prod.spline.design/EOEGQ1XNWGgyNjlh/scene.splinecode"
          style={{ pointerEvents: 'none' }}
        />
      </Suspense>
    </div>
  );
}
