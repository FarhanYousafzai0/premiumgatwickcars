import React from "react";
import { fleets } from "../lib/data";

// Fleet data


// Fleet Card Component
function FleetCard({ image, title, description }) {
  return (
    <div
      className="rounded-xl shadow-lg bg-white border cursor-pointer border-neutral-200 
                  flex flex-col items-center text-center 
                 transition-transform duration-300 
                 hover:scale-105 hover:shadow-2xl hover:-rotate-x-2 hover:rotate-y-2"
    >
      <img src={image} loading="lazy" alt={title} className=" object-cover mb-4 p-2 rounded" />
  <div className="p-3">    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
  <p className="text-sm text-gray-600 leading-relaxed">{description}</p></div>
    </div>
  );
}

// Main Fleet Section
export default function Fleet() {
  return (
    <section className="py-20">
      <div className="max-w-7xl bg-white/40 border-neutral-200 border mx-auto p-2 px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Fleet, Your Ultimate Ride
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From luxurious sedans to eco-friendly rides and executive vans, we have
            the perfect option for every journey. Choose your ride and travel in style.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {fleets.map((fleet, i) => (
            <FleetCard
              key={i}
              image={fleet.image}
              title={fleet.title}
              description={fleet.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
