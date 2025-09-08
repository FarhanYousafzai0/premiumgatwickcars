import React from "react";

export default function ChauffeurSection() {
  return (
    <div className="py-16">
      <div className="w-[95%] mx-auto px-4 bg-white/40 shadow border-neutral-200 border rounded-md py-2 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Premium Gatwick Cars – Your Chauffeur, Your Journey
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold text-black">Premium Gatwick Cars</span>, 
            we believe travel should feel effortless. That’s why we offer more than just a ride — 
            we provide a premium experience every time you step into one of our vehicles.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you’re catching a flight, heading to a business meeting, celebrating a wedding, 
            enjoying a London tour, or attending a special event, our chauffeurs make sure you arrive 
            on time and in comfort. Every journey is tailored around you.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From spotless cars and polite drivers to fair, transparent pricing discussed directly with you, 
            we’re here to make travel simple, stress-free, and enjoyable. With 
            <span className="font-semibold text-black"> Premium Gatwick Cars</span>, 
            you’re not just booking a taxi — you’re choosing reliability, style, and peace of mind.
          </p>
        </div>

        {/* Right: Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/Busniessman.webp"
              alt="Business traveler using Premium Gatwick Cars"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/Girl.webp"
              loading="lazy"
              alt="Happy passenger arriving with Premium Gatwick Cars"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
