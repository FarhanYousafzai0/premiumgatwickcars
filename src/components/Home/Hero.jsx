import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero = () => {
  return (
    <>
      <div
        className="relative min-h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-8 xl:px-10 py-8 lg:py-16"
        style={{
          backgroundImage: "url('/Aero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-0 rounded-2xl" aria-hidden="true"></div>

 
        <HeroLeft />

       
        <HeroRight />
      </div>
    </>
  );
};

export default Hero;