import React, { useState } from 'react';

const GoogleMapEmbed = () => {
  const [selectedLocation, setSelectedLocation] = useState('gatwick');

  // Location data with coordinates and embed URLs
  const locations = {
    gatwick: {
      name: 'London Gatwick Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8426905370834!2d-0.1902436845944444!3d51.14803997958089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d98a5d8a7c85%3A0x5b7c4c0f0b7a8b2!2sGatwick%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    heathrow: {
      name: 'London Heathrow Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.2!2d-0.454295!3d51.4700223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767605c56ca65f%3A0x3ac3b0a7ac5ba1c!2sHeathrow%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    stansted: {
      name: 'London Stansted Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.8!2d0.235!3d51.885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7834c2d2bf7%3A0x7c2d6c8f6b8c9d0!2sStansted%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    luton: {
      name: 'London Luton Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.1!2d-0.368333!3d51.874611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876194842d4b5a7%3A0x6b7f8d9e2c3f4a5!2sLuton%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    canaryWharf: {
      name: 'Canary Wharf',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9!2d-0.0235!3d51.5045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602a4edc3c36d%3A0x71a6f7c8b8d2e5a!2sCanary%20Wharf!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    londonBridge: {
      name: 'London Bridge Station',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4!2d-0.0865!3d51.5049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603439de6a5bd%3A0x4c1d7b8a8b2e3f4!2sLondon%20Bridge%20Station!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Location Selector */}
      <div className="max-w-[90%] mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Location to View:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {Object.entries(locations).map(([key, location]) => (
              <button
                key={key}
                onClick={() => setSelectedLocation(key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedLocation === key
                    ? 'bg-black text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm'
                }`}
              >
                {location.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-[90%] mx-auto h-96 rounded-xl border border-neutral-200 overflow-hidden shadow-lg">
        <iframe
          key={selectedLocation} // Force re-render when location changes
          title={`Google Map - ${locations[selectedLocation].name}`}
          src={locations[selectedLocation].embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Current Location Display */}
      <div className="max-w-[90%] mx-auto text-center">
        <p className="text-sm text-gray-600">
          Currently viewing: <span className="font-semibold text-gray-900">{locations[selectedLocation].name}</span>
        </p>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;