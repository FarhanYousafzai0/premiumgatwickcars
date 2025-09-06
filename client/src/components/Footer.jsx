import React from 'react'

const Footer = () => {
  return (
    <footer className="w-[95%] mx-auto px-4 bg-white/40 shadow border-neutral-200 border rounded-md py-6 sm:px-6 lg:px-8 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Website Name & Description */}
        <div>
          <h2 className="text-xl font-bold text-black mb-2">Premium Gatwick Cars</h2>
          <p className="text-gray-700 text-sm">
            Your trusted partner for airport transfers, business travel, weddings, tours, 
            and special events. With licensed drivers, clean vehicles, and transparent pricing, 
            <span className="font-semibold text-black"> Premium Gatwick Cars</span> makes every journey 
            reliable, comfortable, and stress-free.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+441234567890" className="hover:underline">
                +44 1234 567890
              </a>
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@premiumgatwickcars.com" className="hover:underline">
                info@premiumgatwickcars.com
              </a>
            </li>
            <li>
              <span className="font-medium">Address:</span> Crawley, West Sussex, UK
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/fleet" className="hover:underline">Our Fleet</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white/80 focus:ring-2 focus:ring-black/20 outline-none"
            />
            <textarea
              placeholder="Your message"
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white/80 focus:ring-2 focus:ring-black/20 outline-none resize-none"
              rows={2}
            />
            <button
              type="submit"
              className="rounded-lg bg-black text-white py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
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
