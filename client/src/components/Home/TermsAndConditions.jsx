// components/TermsOfService.jsx
import React from "react";
import GlassButton from "./GlassButton";

export default function TermsAndConditions() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="bg-white max-w-4xl w-full rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>

        {/* Agreement */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          AGREEMENT TO TERMS
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          These Terms of Service constitute a legally binding agreement made
          between you, whether personally or on behalf of an entity you and
          Space we, concerning your access to and use of our website as well as
          any other media form, media channel, mobile website or mobile
          application related, linked, or otherwise connected thereto
          (collectively, the "Site").
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          You agree that by accessing the Site, you have read, understood, and
          agree to be bound by all of these Terms of Service. If you do not
          agree with all of these Terms of Service, then you are expressly
          prohibited from using the Site and you must discontinue use
          immediately.
        </p>

        {/* User Representations */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          USER REPRESENTATIONS
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          By using the Site, you represent and warrant that:
        </p>

        <ul className="list-decimal list-inside text-gray-600 space-y-2 mb-6">
          <li>
            All registration information you submit will be true, accurate,
            current, and complete;
          </li>
          <li>
            You will maintain the accuracy of such information and promptly
            update such registration information as necessary;
          </li>
          <li>
            You have the legal capacity and you agree to comply with these Terms
            of Service;
          </li>
          <li>Not a minor in the jurisdiction in which you reside;</li>
          <li>
            You will not access the Site through automated or non-human means,
            whether through a bot, script, or otherwise;
          </li>
        </ul>

        <p className="text-gray-600 leading-relaxed mb-8">
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Site (or
          any portion thereof).
        </p>

        {/* Action buttons */}
        <div className="flex  gap-4 items-center">
          <button className="px-6 py-3 rounded-lg cursor-pointer bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition min-w-max">
            Not right now
          </button>
          <GlassButton className="cursor-pointer">            
              I agree with terms
  
            </GlassButton>


        </div>
      </div>
    </section>
  );
}
