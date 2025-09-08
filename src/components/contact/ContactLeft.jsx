import React, { useState, useEffect } from 'react';
import { IoIosSend } from 'react-icons/io';
import GlassButton from '../Home/GlassButton';

// Spinner for loading indication
const SpinnerDotted = ({ size = 20, color = "#fff" }) => (
  <span
    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block"
    style={{ width: size, height: size, borderColor: color, borderTopColor: "transparent" }}
  ></span>
);

const EMAILJS_CONFIG = {
  serviceId: 'service_g8b27g8', // Replace with your EmailJS service ID
  templateId: 'template_3mwxgxn', // Replace with your EmailJS template ID
  publicKey: 'IMjsy3lH3ovpWCMwg' // Replace with your EmailJS public key
};

const ContactLeft = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    queryReason: "",
    bookingNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Load EmailJS script and initialize
  useEffect(() => {
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      script.onload = () => {
        if (window.emailjs) {
          window.emailjs.init(EMAILJS_CONFIG.publicKey);
        }
      };
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    } else {
      window.emailjs.init(EMAILJS_CONFIG.publicKey);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // When user clicks submit, this will submit the data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        query_reason: formData.queryReason,
        booking_number: formData.bookingNumber,
        message: formData.message,
      };

      // Ensure emailjs is loaded
      if (!window.emailjs) {
        throw new Error("EmailJS is not loaded.");
      }

      const response = await window.emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      // EmailJS returns status 200 for success
      if (response.status === 200) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          queryReason: "",
          bookingNumber: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:w-1/2 w-full">
      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="p-4 bg-green-100 text-green-800 rounded-lg">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-100 text-red-800 rounded-lg">
          Oops! Something went wrong. Please try again or contact us directly.
        </div>
      )}

      {/* First Name */}
      <div>
        <p className="text-xs text-neutral-400 font-light">01</p>
        <label className="text-lg mb-1 block" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          placeholder="John"
          className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
          value={formData.firstName}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Last Name */}
      <div>
        <p className="text-xs text-neutral-400 font-light">02</p>
        <label className="text-lg mb-1 block" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          required
          placeholder="Doe"
          className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
          value={formData.lastName}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Email */}
      <div>
        <p className="text-xs text-neutral-400 font-light">03</p>
        <label className="text-lg mb-1 block" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="john@doe.com"
          className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Phone */}
      <div>
        <p className="text-xs text-neutral-400 font-light">04</p>
        <label className="text-lg mb-1 block" htmlFor="phone">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+92 300 0000000"
          className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Query Reason */}
      <div>
        <p className="text-xs text-neutral-400 font-light">05</p>
        <label className="text-lg mb-1 block" htmlFor="queryReason">
          Query Reason
        </label>
        <input
          type="text"
          id="queryReason"
          name="queryReason"
          placeholder="Booking, Refund, Complaint, Lost item, Fleet Inquiry..."
          className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
          value={formData.queryReason}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Booking Number */}
      <div>
        <p className="text-xs text-neutral-400 font-light">06</p>
        <label className="text-lg mb-1 block" htmlFor="bookingNumber">
          Booking Number
        </label>
        <input
          type="text"
          id="bookingNumber"
          name="bookingNumber"
          placeholder="ABC12345"
          className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600"
          value={formData.bookingNumber}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      {/* Message */}
      <div>
        <p className="text-xs text-neutral-400 font-light">07</p>
        <label className="text-lg mb-1 block" htmlFor="message">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Hello, I’d like to inquire about..."
          className="w-full border-b border-neutral-300 bg-transparent py-2 outline-none text-neutral-600 resize-none"
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <GlassButton disabled={isSubmitting} type="submit" className="ml-2">
        <span className="inline-flex items-center gap-1">
          {isSubmitting ? (
            <SpinnerDotted size={20} color="#fff" />
          ) : (
            <>
              Submit
              <IoIosSend size={25} />
            </>
          )}
        </span>
      </GlassButton>
    </form>
  );
};

export default ContactLeft;