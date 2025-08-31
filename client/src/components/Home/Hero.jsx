import React from 'react';
import BookingForm from './BookingForm';
import GlassButton from './GlassButton';
import { MdStart } from "react-icons/md";


const Hero = () => {
  return (
    <>
      <div className="relative w-[90%] mt-5 mx-auto md:h-screen h-auto    grid grid-cols-1 md:grid-cols-2">
        {/* Left: Text */}
        <div className="flex flex-col items-start gap-5 p-5">
          <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Instant Airport Taxi Quotes.
            <br className="hidden sm:block" />
            Simple. Transparent. 24/7.
          </h1>
          <p className=" text-base sm:text-lg max-w-xl">
            Enter your route, choose your time, and get a price immediately. No hidden fees. Premium service in a clean, modern fleet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          

            <GlassButton as="a" to="#fleet" className="ml-2">
              <span className="inline-flex items-center gap-2">
               
                View
                <MdStart/>
              </span>
            </GlassButton>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div className=" p-4">
          <BookingForm className="max-w-lg mx-auto md:ml-auto" defaultTab="instant" />
        </div>
      </div>
    </>
  );
};

export default Hero;
