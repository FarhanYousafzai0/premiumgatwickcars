// components/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import GlassButton from "./GlassButton";

export default function PrivacyPolicy() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6 py-12">
      <div className="bg-white max-w-4xl w-full rounded-xl shadow-lg border border-gray-200 p-8 md:p-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-6">
          At <span className="font-semibold text-blue-600">Premium Booking</span>, 
          we value your privacy and are committed to protecting your personal 
          information. This Privacy Policy explains how we collect, use, disclose, 
          and safeguard your information when you use our booking platform, whether 
          via our website, mobile app, or related services.
        </p>

        {/* Section 1 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We may collect the following types of information when you interact with 
          our platform:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Personal details such as name, email, phone number, and address</li>
          <li>Booking details including pick-up/drop-off locations and times</li>
          <li>Payment information (processed securely via third-party gateways)</li>
          <li>Device, browser, and usage data for improving our services</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>To process and confirm your bookings</li>
          <li>To provide customer support and service updates</li>
          <li>To improve platform functionality and user experience</li>
          <li>To comply with legal obligations and prevent fraud</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Sharing of Information
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We do not sell your personal data. Your information may be shared only 
          with trusted partners, such as drivers, payment providers, and technical 
          support teams, strictly for the purpose of fulfilling your booking and 
          improving our services.
        </p>

        {/* Section 4 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Data Security
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          We implement industry-standard encryption and security measures to 
          safeguard your data. Regular audits and compliance checks are conducted 
          to ensure your information remains protected.
        </p>

        {/* Section 5 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Your Rights
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li>Access and request a copy of your personal data</li>
          <li>Request corrections or updates to your data</li>
          <li>Withdraw consent or request deletion of your data</li>
          <li>Opt-out of marketing communications anytime</li>
        </ul>

        {/* Closing */}
        <p className="text-gray-600 leading-relaxed mb-8">
          By using our booking platform, you consent to this Privacy Policy. 
          We may update this policy from time to time, and any changes will be 
          posted here with an updated “Last Revised” date.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
          Back
          </Link>
          <GlassButton className="cursor-pointer">
              <span className="inline-flex items-center gap-1">
            
              I Understand
              </span>
            </GlassButton>
        </div>
      </div>
    </section>
  );
}
