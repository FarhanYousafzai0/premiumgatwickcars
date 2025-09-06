import React from 'react';
import GlassButton from './GlassButton';
import { MdStart } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <div
        className="relative min-h-screen md:h-screen overflow-hidden grid grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8 xl:px-10  sm:py-0 md:py-16 lg:py-30"
        style={{
          backgroundImage: "url('/Aero.png')",
          backgroundSize: "cover",
         
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-0 rounded-2xl" aria-hidden="true"></div>

        {/* Left: Text */}
        <div className="flex flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 z-10 pr-0 md:pr-8 lg:pr-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow-lg">
            Instant Airport Taxi Quotes.
            <br className="hidden sm:block" />
            Simple. Transparent. 24/7.
          </h1>

          <p className="text-sm sm:text-base lg:text-lg xl:text-xl max-w-xl text-white/90 drop-shadow leading-relaxed">
            Book your journey with confidence. Premium cars, licensed drivers, and clear pricing, discussed directly with you, no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-2 sm:mt-4">
            <GlassButton as="a" to="/fleet" className="w-full sm:w-auto">
              <span className="inline-flex items-center justify-center gap-2 px-2">
                View Fleet
                <MdStart />
              </span>
            </GlassButton>
          </div>
        </div>

        {/* Right: Centered Image */}
        
      </div>
    </>
  );
};

export default Hero;
