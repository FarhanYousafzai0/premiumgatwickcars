import React from "react";

export default function ChauffeurSection() {
  return (
    <div className="py-16 ">
      <div className="w-[95%]  mx-auto px-4 bg-white/40 shadow border-neutral-200 border rounded-md py-2 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Crawley Gatwick Taxis – Your Premier Chauffeurs Service
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Crawley Gatwick Taxis stands as a premium private luxury car hire company, 
            based in Essex, boasting an extensive array of transportation services for our clients. 
            Our executive vehicles are curated to provide a top-tier travel experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you need airport transfers, corporate meetings, sporting events, weddings, 
            or business conferences, our skilled chauffeurs are here to ensure a seamless journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Discover the epitome of luxury, convenience, and reliability with Crawley Gatwick Taxis. 
            Whether you’re a business traveler, tourist, or local resident, our fleet of 
            meticulously maintained vehicles and professional chauffeurs are here to serve you.
          </p>
        </div>

        {/* Right: Image grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/Busniessman.webp"
              alt="Business person booking taxi"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm">
            <img
              src="/Girl.webp"
              loading="lazy"
              alt="Traveler using booking app"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
