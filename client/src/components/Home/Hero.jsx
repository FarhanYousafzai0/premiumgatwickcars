import React from 'react';
import GlassButton from './GlassButton';
import { MdStart } from "react-icons/md";


const Hero = () => {
  return (
    <>
      <div
        className="relative  md:h-screen h-auto grid grid-cols-1 md:grid-cols-2"
        style={{
          backgroundImage: "url('/Aero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 z-0 " aria-hidden="true"></div>

        {/* Left: Text */}
        <div className="flex flex-col items-start p-30 gap-5  z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg">
            Instant Airport Taxi Quotes.
            <br className="hidden sm:block" />
            Simple. Transparent. 24/7.
          </h1>
          <p className="text-base sm:text-lg max-w-xl text-white/90 drop-shadow">
            Book your journey with confidence. Premium cars, licensed drivers, and clear pricing, discussed directly with you, no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <GlassButton as="a" to="/fleet" className="">
              <span className="inline-flex items-center gap-2">
                View
                <MdStart />
              </span>
            </GlassButton>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Hero;
