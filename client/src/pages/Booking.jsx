import React, { useState, useEffect } from 'react';
import { ChevronLeft, Users, Briefcase, Hand, Car, Phone, User, Calendar, Clock, MapPin } from 'lucide-react';
import { locations } from '../lib/data';
import GlassButton from '../components/Home/GlassButton';

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

const BookingForm = () => {
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
    // Step 2
    name: '',
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
    return formData.from && formData.to && formData.selectedCar && formData.date && formData.time;
  };

  const isStep2Complete = () => {
    return formData.name && formData.phone && formData.passengers && formData.luggage && formData.handLuggage;
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

    // Template parameters that will be sent to your email template
    const templateParams = {
      // Customer information
      customer_name: formData.name,
      customer_phone: formData.phone,
      
      // Journey details
      pickup_location: formData.from,
      destination: formData.to,
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
Phone: ${formData.phone}

JOURNEY DETAILS:
From: ${formData.from}
To: ${formData.to}
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
          name: '',
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
    <div className="min-h-screen bg-gray-50 py-8 px-4 mt-10 border-neutral-200">
      <div className="max-w-4xl mx-auto rounded-md">
        {/* Success/Error Messages */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-lg ${
            submitStatus === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {submitStatus === 'success' ? (
              <div>
                <h3 className="font-semibold">Booking Submitted Successfully! ✅</h3>
                <p>Thank you for your booking. We will contact you shortly to confirm your reservation.</p>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold">Booking Failed ❌</h3>
                <p>Sorry, there was an error submitting your booking. Please try again or contact us directly.</p>
              </div>
            )}
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Book Your Ride</h1>
          <div className="flex justify-center items-center space-x-4">
            <div className={`flex items-center ${currentStep >= 1 ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-black text-white' : 'bg-gray-200'}`}>1</div>
              <span className="ml-2 font-medium">Journey Details</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className={`flex items-center ${currentStep >= 2 ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-black text-white' : 'bg-gray-200'}`}>2</div>
              <span className="ml-2 font-medium">Personal Details</span>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentStep - 1) * 100}%)` }}
          >
            {/* Step 1 */}
            <div className="w-full flex-shrink-0">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">Journey Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* From */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      From
                    </label>
                    <select 
                      value={formData.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    >
                      <option value="">Select pickup location</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  {/* To */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      To
                    </label>
                    <select 
                      value={formData.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    >
                      <option value="">Select destination</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Time
                    </label>
                    <select 
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    <Car className="w-4 h-4 inline mr-1" />
                    Select Car
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {cars.map(car => (
                      <div 
                        key={car.id}
                        onClick={() => handleInputChange('selectedCar', car.name)}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          formData.selectedCar === car.name 
                            ? 'border-black bg-gray-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center mb-2">
                          <input
                            type="radio"
                            checked={formData.selectedCar === car.name}
                            onChange={() => handleInputChange('selectedCar', car.name)}
                            className="mr-2"
                          />
                          <h3 className="font-medium text-gray-900">{car.name}</h3>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {car.passengers} passengers
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {car.luggage} luggage
                          </div>
                          {car.handLuggage > 0 && (
                            <div className="flex items-center">
                              <Hand className="w-3 h-3 mr-1" />
                              {car.handLuggage} hand luggage
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end">
                  <GlassButton
                  className=' cursor-pointer'
                    onClick={handleNextStep}
                    disabled={!isStep1Complete()}
                  >
                    Nearly There &rarr;
                  </GlassButton>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="w-full flex-shrink-0">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <GlassButton
                    onClick={handlePreviousStep}
                    className="mr-4 p-2"
                    style={{ minWidth: '2.5rem', minHeight: '2.5rem', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </GlassButton>
                  <h2 className="text-2xl font-semibold text-gray-900">Personal Details</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Number of Passengers */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
                      Number of Passengers
                    </label>
                    <select 
                      value={formData.passengers}
                      onChange={(e) => handleInputChange('passengers', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    >
                      <option value="">Select passengers</option>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  {/* Luggage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Briefcase className="w-4 h-4 inline mr-1" />
                      Luggage
                    </label>
                    <select 
                      value={formData.luggage}
                      onChange={(e) => handleInputChange('luggage', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    >
                      <option value="">Select luggage</option>
                      {[0,1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} luggage{num !== 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  {/* Hand Luggage */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Hand className="w-4 h-4 inline mr-1" />
                      Hand Luggage
                    </label>
                    <select 
                      value={formData.handLuggage}
                      onChange={(e) => handleInputChange('handLuggage', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      required
                    >
                      <option value="">Select hand luggage</option>
                      {[0,1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} hand luggage{num !== 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Meet & Greet */}
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.meetGreet}
                      onChange={(e) => handleInputChange('meetGreet', e.target.checked)}
                      className="mr-2 h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">Meet & Greet </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <GlassButton
                    onClick={handleSubmit}
                    disabled={!isStep2Complete() || isSubmitting}
                    className="flex items-center cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2  border-white border-t-transparent rounded-full animate-spin mr-2"></div>
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

        {/* Cars We Have Section - Only show on step 1 */}
        

        {/* How to Book Guide - Only show on step 2 */}
        {currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">How to Book</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</div>
                <p>Fill in your journey details including pickup location, destination, date, and time.</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</div>
                <p>Select your preferred vehicle based on the number of passengers and luggage requirements.</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</div>
                <p>Provide your personal details and specify passenger count and luggage information.</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">4</div>
                <p>Review all details and click "Book Now" to submit your booking request.</p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">5</div>
                <p>You will receive a confirmation email with all booking details and further instructions.</p>
              </div>
            </div>
          </div>
        )}

     
      </div>
    </div>
  );
};

export default BookingForm;