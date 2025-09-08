import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../lib/servicesdata";

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <p className="text-gray-600 mt-2">
          The service you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <section className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-gray-50 py-30 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {service.shortDesc}
        </p>
      </section>

      {/* Overview with Image */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Overview</h2>
          {service.overview.split("\n").map((para, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-4">
              {para.trim()}
            </p>
          ))}
        </div>

        {/* Image */}
        {service.heroImage && (
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={service.heroImage}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </section>

      {/* Features */}
      {service.features && service.features.length > 0 && (
        <section className="max-w-5xl mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold mb-6">Why Choose This Service?</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, idx) => (
              <li
                key={idx}
                className="rounded-xl shadow-lg bg-white border border-neutral-200 p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <span className="block font-medium text-gray-900">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQs */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          {service.faqs && service.faqs.length > 0 ? (
            <div className="space-y-6">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              Have questions? Contact our team and we’ll be happy to help.
            </p>
          )}
        </div>
      </section>
    </section>
  );
}
