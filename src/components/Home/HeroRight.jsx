import React, { useState, useEffect } from 'react';
import { ChevronLeft, Users, Briefcase, Hand, Car, Phone, User, Calendar, Clock, MapPin, Mail } from 'lucide-react';
import GlassButton from "./GlassButton";
import { locations } from '../../lib/data';

// Email.js configuration - Replace these with your actual values
const EMAILJS_CONFIG = {
  serviceId: 'service_u6442nk', // Replace with your Email.js service ID
  templateId: 'template_ggre88n', // Replace with your Email.js template ID
  publicKey: '6Mp9lqUto7ix4_I3O' // Replace with your Email.js public key
};

const timeSlots = [
  '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
  '22:00', '22:30', '23:00', '23:30'
];

const HeroRight = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [formData, setFormData] = useState({
    // Step 1
    from: '',
    to: '',
    selectedCar: '',
    date: '',
    time: '',
    address: '',
    // Step 2
    name: '',
    email: '',
    phone: '',
    passengers: '',
    luggage: '',
    handLuggage: '',
    meetGreet: false
  });

  const cars = [
    {
      id: 'saloon',
      name: 'Saloon',
      passengers: 4,
      luggage: 2,
      handLuggage: 0
    },
    {
      id: 'executive-vip-van',
      name: 'Executive VIP Van',
      passengers: 8,
      luggage: 8,
      handLuggage: 8
    },
    {
      id: 'mercedes-executive',
      name: 'Mercedes Executive',
      passengers: 3,
      luggage: 3,
      handLuggage: 3
    }
  ];

  // Load Email.js script
  useEffect(() => {
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
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isStep1Complete = () => {
    // Allow step 1 to be complete if either (from and to) or address is filled
    return (formData.from && formData.to || formData.address) && formData.selectedCar && formData.date && formData.time;
  };

  const isStep2Complete = () => {
    return formData.name && formData.email && formData.phone && formData.passengers && formData.luggage && formData.handLuggage;
  };

  const handleNextStep = () => {
    if (isStep1Complete()) {
      setCurrentStep(2);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  const sendEmail = async () => {
    if (!window.emailjs) {
      throw new Error('Email.js not loaded');
    }

    // Template parameters for Email.js
    const templateParams = {
      // Customer information
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      
      // Journey details
      pickup_location: formData.address ? null : formData.from, // Set to null if address is provided
      destination: formData.address ? null : formData.to, // Set to null if address is provided
      custom_address: formData.address || null, // Include custom address if provided
      travel_date: formData.date,
      travel_time: formData.time,
      selected_vehicle: formData.selectedCar,
      
      // Booking details
      passenger_count: formData.passengers,
      luggage_count: formData.luggage,
      hand_luggage_count: formData.handLuggage,
      meet_greet: formData.meetGreet ? 'Yes' : 'No',
      
      // Additional info
      booking_date: new Date().toLocaleDateString(),
      booking_time: new Date().toLocaleTimeString(),
      
      // Formatted message for email body
      message: `
New Booking Request

CUSTOMER INFORMATION:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

JOURNEY DETAILS:
${formData.address ? `Custom Address: ${formData.address}` : `From: ${formData.from}\nTo: ${formData.to}`}
Date: ${formData.date}
Time: ${formData.time}
Vehicle: ${formData.selectedCar}

BOOKING DETAILS:
Passengers: ${formData.passengers}
Luggage: ${formData.luggage}
Hand Luggage: ${formData.handLuggage}
Meet & Greet: ${formData.meetGreet ? 'Yes' : 'No'}

Booking submitted on: ${new Date().toLocaleString()}
      `
    };

    try {
      const response = await window.emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );
      
      console.log('Email sent successfully:', response);
      return response;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!isStep2Complete()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await sendEmail();
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          from: '',
          to: '',
          selectedCar: '',
          date: '',
          time: '',
          address: '',
          name: '',
          email: '',
          phone: '',
          passengers: '',
          luggage: '',
          handLuggage: '',
          meetGreet: false
        });
        setCurrentStep(1);
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Booking submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="z-10 flex items-center justify-center mt-8 lg:mt-20">
      <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Success/Error Messages */}
        {submitStatus && (
          <div
            className={`mb-4 flex items-center gap-3 p-4 rounded-xl text-sm shadow-md transition-all duration-300 ${
              submitStatus === 'success'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
            role="alert"
            aria-live="polite"
          >
            <div className="flex-shrink-0">
              {submitStatus === 'success' ? (
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6m0-6l6 6" />
                </svg>
              )}
            </div>
            <div>
              <h3 className="font-semibold">
                {submitStatus === 'success'
                  ? 'Booking Submitted Successfully!'
                  : 'Booking Failed'}
              </h3>
              <p className="text-xs mt-1">
                {submitStatus === 'success'
                  ? 'Thank you for your booking. We will contact you shortly to confirm your reservation.'
                  : 'Sorry, there was an error submitting your booking. Please try again or contact us directly.'}
              </p>
            </div>
          </div>
        )}

        {/* Form Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentStep - 1) * 100}%)` }}
          >
            {/* Step 1 */}
            <div className="w-full flex-shrink-0">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Journey Details</h3>
                
                <div className="space-y-3">
                  {/* From & To */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        From
                      </label>
                      <select 
                        value={formData.from}
                        onChange={(e) => handleInputChange('from', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select pickup</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        To
                      </label>
                      <select 
                        value={formData.to}
                        onChange={(e) => handleInputChange('to', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                      >
                        <option value="">Select destination</option>
                        {locations.map(location => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Other Address */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      Other Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                      placeholder="Enter custom address (if not in dropdown)"
                    />
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <Calendar className="w-3 h-3 inline mr-1" />
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <Clock className="w-3 h-3 inline mr-1" />
                        Time
                      </label>
                      <select 
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                        required
                      >
                        <option value="">Select time</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Car Selection */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">
                      <Car className="w-3 h-3 inline mr-1" />
                      Select Car
                    </label>
                    <div className="space-y-2">
                      {cars.map(car => (
                        <div 
                          key={car.id}
                          onClick={() => handleInputChange('selectedCar', car.name)}
                          className={`border-2 rounded-lg p-2 cursor-pointer transition-all ${
                            formData.selectedCar === car.name 
                              ? 'border-black bg-gray-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center mb-1">
                            <input
                              type="radio"
                              checked={formData.selectedCar === car.name}
                              onChange={() => handleInputChange('selectedCar', car.name)}
                              className="mr-2"
                            />
                            <h4 className="font-medium text-gray-900 text-sm">{car.name}</h4>
                          </div>
                          <div className="text-xs text-gray-600 flex flex-wrap gap-2">
                            <span className="flex items-center">
                              <Users className="w-3 h-3 mr-1" />
                              {car.passengers}p
                            </span>
                            <span className="flex items-center">
                              <Briefcase className="w-3 h-3 mr-1" />
                              {car.luggage}L
                            </span>
                            {car.handLuggage > 0 && (
                              <span className="flex items-center">
                                <Hand className="w-3 h-3 mr-1" />
                                {car.handLuggage}H
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Button */}
                  <div className="flex justify-end pt-2">
                    <GlassButton
                      className="cursor-pointer text-sm px-4 py-2"
                      onClick={handleNextStep}
                      disabled={!isStep1Complete()}
                    >
                      Next &rarr;
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="w-full flex-shrink-0">
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4">
                <div className="flex items-center mb-4">
                  <GlassButton
                    onClick={handlePreviousStep}
                    className="mr-3 p-1 cursor-pointer"
                    style={{ minWidth: '2rem', minHeight: '2rem', padding: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </GlassButton>
                  <h3 className="text-lg font-semibold text-gray-900">Personal Details</h3>
                </div>
                
                <div className="space-y-3">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <User className="w-3 h-3 inline mr-1" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <Mail className="w-3 h-3 inline mr-1" />
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <Phone className="w-3 h-3 inline mr-1" />
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>

                  {/* Passengers, Luggage, Hand Luggage */}
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <Users className="w-3 h-3 inline mr-1" />
                        Passengers
                      </label>
                      <select 
                        value={formData.passengers}
                        onChange={(e) => handleInputChange('passengers', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                        required
                      >
                        <option value="">0</option>
                        {[1,2,3,4,5,6,7,8].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <Briefcase className="w-3 h-3 inline mr-1" />
                        Luggage
                      </label>
                      <select 
                        value={formData.luggage}
                        onChange={(e) => handleInputChange('luggage', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                        required
                      >
                        <option value="">0</option>
                        {[0,1,2,3,4,5,6,7,8].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        <Hand className="w-3 h-3 inline mr-1" />
                        Hand Luggage
                      </label>
                      <select 
                        value={formData.handLuggage}
                        onChange={(e) => handleInputChange('handLuggage', e.target.value)}
                        className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
                        required
                      >
                        <option value="">0</option>
                        {[0,1,2,3,4,5,6,7,8].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Meet & Greet */}
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.meetGreet}
                        onChange={(e) => handleInputChange('meetGreet', e.target.checked)}
                        className="mr-2 h-3 w-3 text-black focus:ring-black border-gray-300 rounded"
                      />
                      <span className="text-xs font-medium text-gray-700">Meet & Greet</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <GlassButton
                      onClick={handleSubmit}
                      disabled={!isStep2Complete() || isSubmitting}
                      className="flex items-center cursor-pointer text-sm px-4 py-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block"></span>
                          Submitting...
                        </>
                      ) : (
                        'Book Now'
                      )}
                    </GlassButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;