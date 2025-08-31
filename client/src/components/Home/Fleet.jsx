import React from "react";
import { fleet } from "../../lib/data";



export default function FleetSection() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Fleet, <span className="text-black">Your Ultimate Ride</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of vehicles, designed to meet every need —
            from daily commutes to luxury travel. Impeccably maintained, driven
            by professional chauffeurs.
          </p>
        </div>

        {/* Fleet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fleet.map((car, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="overflow-hidden ">
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full  object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-5 flex flex-col justify-between ">
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
      <div className=" text-white">
        <div className="max-w-[90%] rounded-md bg-black mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              Book Your Ride Today
            </h3>
            <p className="text-gray-300 mb-4">
              Experience the difference with Crawley Gatwick Taxis — where every
              ride is a journey in luxury and comfort. Whether you need a quick
              ride across town or an extended excursion, we’re ready to serve
              you.
            </p>
            <p className="text-gray-300 mb-6">
              We’re more than just chauffeurs; we’re your trusted travel
              partner. Reliable, stylish, and safe. Let us redefine the way you
              move.
            </p>
            <a
              href="#booking"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-100 transition"
            >
              Learn More →
            </a>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://source.unsplash.com/800x500/?luxury,interior"
              alt="Luxury ride interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
