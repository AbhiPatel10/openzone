"use client";
import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => { 
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-900"></div>
        </div>
      )}
    </>
  );
};

export default Preloader;
