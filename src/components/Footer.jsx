import React from 'react'
 import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-[95%] mx-auto px-4 bg-white/40 shadow border-neutral-200 border rounded-md py-6 sm:px-6 lg:px-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Website Name & Description */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Premium Gatwick Cars</h2>
          <p className="text-gray-700 text-sm">
          Your trusted choice for airport transfers, business travel, weddings, tours, and events. Licensed drivers, clean vehicles, transparent pricing—reliable, comfortable, stress-free journeys.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+01293 310098" className="hover:underline">
                01293 310098
                
              </a>
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@premiumgatwickcars.com" className="hover:underline">
              info@premiumgatwickcars.com
              </a>
            </li>
            
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
         

<div className="text-gray-700 text-sm space-y-1">
  <div><Link to="/about" className="hover:underline">About Us</Link></div>
  <div><Link to="/fleet" className="hover:underline">Our Fleet</Link></div>
  <div><Link to="/contact" className="hover:underline">Contact</Link></div>
  <div><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></div>
  <div><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></div>
</div>
        </div>

        {/* Get in Touch */}
   
      </div>

      {/* Bottom Row */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-500">
        <span>✔ Licensed & Insured Drivers</span>
        <span>✔ Transparent Pricing</span>
        <span>✔ 24/7 Availability</span>
      </div>

      <div className="mt-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Premium Gatwick Cars. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
