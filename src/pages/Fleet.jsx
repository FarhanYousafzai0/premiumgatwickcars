import React from "react";
import { fleets } from "../lib/data";

// Fleet Card Component
function FleetCard({ img, title, description }) {
  return (
    <div
      className="rounded-xl shadow-lg bg-white border cursor-pointer border-neutral-200 
                  flex flex-col items-center text-center 
                  transition-transform duration-300 
                  hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={img}
        loading="lazy"
        alt={title}
        className="object-cover mb-4 p-2 rounded"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Main Fleet Section
export default function Fleet() {
  return (
    <section className="py-25">
      <div className="max-w-7xl bg-white/40 border-neutral-200 border mx-auto p-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Fleet, <span className="text-black">Your Ultimate Ride</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-black">Premium Gatwick Cars</span>, 
            we keep it simple and premium. Whether you need a stylish Saloon, 
            a luxury Mercedes Executive, or a spacious VIP Van, 
            our fleet is designed to make every journey reliable and comfortable.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleets.map((fleet, i) => (
            <FleetCard
              key={i}
              img={fleet.img}
              title={fleet.title}
              description={fleet.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
