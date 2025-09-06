import React from "react";
import { fleet } from "../../lib/data";
import { RiArrowRightUpLine } from "react-icons/ri";
import GlassButton from "./GlassButton";

export default function FleetSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Fleet, <span className="text-black">Your Ultimate Ride</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-black">Premium Gatwick Cars</span>, 
            we offer more than vehicles — we provide experiences. 
            From airport transfers and business meetings to weddings, tours, and events, 
            our fleet is designed to match your journey with comfort, style, and reliability.
          </p>

          <GlassButton as="a" to="/fleet" className="mt-2">
            <span className="inline-flex items-center gap-1">
              Explore Fleet
              <RiArrowRightUpLine size={25} />
            </span>
          </GlassButton>
        </div>

        {/* Fleet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {fleet.map((car, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={car.img}
                  loading="lazy"
                  alt={car.name}
                  className="w-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-black">
                  {car.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{car.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Ride Highlight */}
      <div className="text-black">
        <div className="max-w-[90%] rounded-md border border-neutral-200 bg-white/40 mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Book Your Ride Today
            </h3>
            <p className="mb-4">
              With <span className="font-semibold text-black">Premium Gatwick Cars</span>, 
              every ride is more than transportation — it’s a promise of 
              reliability, comfort, and style. Whether it’s a quick airport run 
              or a full-day tour, our chauffeurs and luxury fleet are ready to serve you.
            </p>
            <p className="mb-6">
              We pride ourselves on being more than just drivers. 
              We’re your trusted travel partners — professional, punctual, and focused on making 
              your journey stress-free from start to finish.
            </p>
            <GlassButton as="a" to="/contact" className="ml-2">
              <span className="inline-flex items-center gap-1">
                Contact Us
                <RiArrowRightUpLine size={25} />
              </span>
            </GlassButton>
          </div>

          {/* Image */}
          <div className="rounded-2xl w-full overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src="/Fleet1.png"
                alt="Premium Gatwick Cars Luxury Fleet 1"
                loading="lazy"
                className="w-full h-50 object-cover rounded-xl"
              />
              <img
                src="/Fleet2.png"
                alt="Premium Gatwick Cars Luxury Fleet 2"
                loading="lazy"
                className="w-full h-50 object-cover rounded-xl"
              />
              <img
                src="/Fleet3.png"
                alt="Premium Gatwick Cars Luxury Fleet 3"
                loading="lazy"
                className="w-full h-50 object-cover rounded-xl"
              />
              <img
                src="/services/Fleet4.png"
                alt="Premium Gatwick Cars Luxury Fleet 4"
                loading="lazy"
                className="w-full h-50 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
