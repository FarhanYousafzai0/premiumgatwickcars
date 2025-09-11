import React, { useState } from 'react';


const GoogleMapEmbed = () => {
  const [selectedLocation, setSelectedLocation] = useState('gatwick_south');

  // Updated location data with new entries
  const locations = {
    gatwick_south: {
      name: 'LGW - Gatwick Airport - South Terminal',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8426905370834!2d-0.1902436845944444!3d51.14803997958089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d98a5d8a7c85%3A0x5b7c4c0f0b7a8b2!2sGatwick%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    gatwick_north: {
      name: 'LGW - Gatwick Airport - North Terminal',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8426905370834!2d-0.1902436845944444!3d51.14803997958089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d98a5d8a7c85%3A0x5b7c4c0f0b7a8b2!2sGatwick%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    heathrow_t1: {
      name: 'LHR - London Heathrow - T1',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.2!2d-0.454295!3d51.4700223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767605c56ca65f%3A0x3ac3b0a7ac5ba1c!2sHeathrow%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    heathrow_t2: {
      name: 'LHR - London Heathrow - T2',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.2!2d-0.454295!3d51.4700223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767605c56ca65f%3A0x3ac3b0a7ac5ba1c!2sHeathrow%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    heathrow_t3: {
      name: 'LHR - London Heathrow - T3',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.2!2d-0.454295!3d51.4700223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767605c56ca65f%3A0x3ac3b0a7ac5ba1c!2sHeathrow%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    heathrow_t4: {
      name: 'LHR - London Heathrow - T4',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.2!2d-0.454295!3d51.4700223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767605c56ca65f%3A0x3ac3b0a7ac5ba1c!2sHeathrow%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    heathrow_t5: {
      name: 'LHR - London Heathrow - T5',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.2!2d-0.454295!3d51.4700223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48767605c56ca65f%3A0x3ac3b0a7ac5ba1c!2sHeathrow%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    stansted: {
      name: 'STN - Stansted Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.8!2d0.235!3d51.885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7834c2d2bf7%3A0x7c2d6c8f6b8c9d0!2sStansted%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    luton: {
      name: 'LTN - Luton Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.1!2d-0.368333!3d51.874611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876194842d4b5a7%3A0x6b7f8d9e2c3f4a5!2sLuton%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    city: {
      name: 'LCY - City Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7!2d0.055278!3d51.505167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602cc3c4b7b7b%3A0x5e7f0b8c2f7e6b1!2sLondon%20City%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    biggin_hill: {
      name: 'BQH - Biggin Hill Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.6!2d0.0325!3d51.3308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b7e5b5e5b5b5%3A0x4c7f0b9c2c3d4e2!2sBiggin%20Hill%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    bristol: {
      name: 'BRS - Bristol Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.3!2d-2.719089!3d51.382589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718e2b7e7b7b7b%3A0x3e7f0b8c2c3e4f3!2sBristol%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    manchester: {
      name: 'MAN - Manchester Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.5!2d-2.2725!3d53.3537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c3c3c3c3c3%3A0x2e7f0b9c2c3e4f4!2sManchester%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    birmingham: {
      name: 'BHX - Birmingham Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.2!2d-1.748108!3d52.453856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b3b3b3b3b3b3%3A0x1e7f0b9c2c3e4f5!2sBirmingham%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    southend: {
      name: 'SEN - Southend Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.5!2d0.695556!3d51.571389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c3c3c3c3c3c3%3A0x2e7f0b9c2c3e4f6!2sSouthend%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    cardiff: {
      name: 'CWL - Cardiff Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.7!2d-3.343333!3d51.396667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e5e5e5e5e5e5e%3A0x3e7f0b9c2c3e4f7!2sCardiff%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    liverpool: {
      name: 'LPL - Liverpool Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.8!2d-2.849722!3d53.337167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b1f1f1f1f1f1f%3A0x4e7f0b9c2c3e4f8!2sLiverpool%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    bournemouth: {
      name: 'BOH - Bournemouth Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.3!2d-1.8425!3d50.779667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4873a3a3a3a3a3a3%3A0x5e7f0b9c2c3e4f9!2sBournemouth%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    exeter: {
      name: 'EXT - Exeter Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.1!2d-3.413889!3d50.734444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486d9d9d9d9d9d9d%3A0x6e7f0b9c2c3e4fa!2sExeter%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    newquay: {
      name: 'NQY - Newquay Airport',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.3!2d-4.995408!3d50.440558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486b0b0b0b0b0b0b%3A0x7e7f0b9c2c3e4fb!2sNewquay%20Airport!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    london: {
      name: 'London',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    london_east: {
      name: 'London - East',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9!2d-0.0235!3d51.5045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602a4edc3c36d%3A0x71a6f7c8b8d2e5a!2sCanary%20Wharf!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    london_west: {
      name: 'London - West',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0!2d-0.208137!3d51.514112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f0f0f0f0f0f%3A0x8e7f0b9c2c3e4fc!2sWest%20End%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    london_north: {
      name: 'London - North',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.5!2d-0.127758!3d51.560058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1b1b1b1b1b%3A0x9e7f0b9c2c3e4fd!2sNorth%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    london_south: {
      name: 'London - South',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2!2d-0.112029!3d51.465305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c3c3c3c3c3%3A0xae7f0b9c2c3e4fe!2sSouth%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    southampton_port: {
      name: 'Southampton Port',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.8!2d-1.404351!3d50.896966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874765e5e5e5e5e%3A0xbe7f0b9c2c3e4ff!2sSouthampton%20Port!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    portsmouth_port: {
      name: 'Portsmouth Port',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.7!2d-1.090556!3d50.812778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874656e6e6e6e6e%3A0xce7f0b9c2c3e500!2sPortsmouth%20Port!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    harwich_port: {
      name: 'Harwich Port',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2461.5!2d1.254167!3d51.947222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9056f6f6f6f6f%3A0xde7f0b9c2c3e501!2sHarwich%20Port!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    canary_wharf: {
      name: 'Canary Wharf',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9!2d-0.0235!3d51.5045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602a4edc3c36d%3A0x71a6f7c8b8d2e5a!2sCanary%20Wharf!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    },
    london_bridge: {
      name: 'London Bridge Station',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4!2d-0.0865!3d51.5049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603439de6a5bd%3A0x4c1d7b8a8b2e3f4!2sLondon%20Bridge%20Station!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk'
    }
  };

  return (
    <div className="w-full space-y-4 p-4">
      {/* Location Selector */}
      <div className="max-w-[90%] mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Location to View:
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="block w-full max-w-md mx-auto p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            {Object.entries(locations).map(([key, location]) => (
              <option key={key} value={key}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Map Container */}
      <div className="max-w-[90%] mx-auto h-96 rounded-xl border border-neutral-200 overflow-hidden shadow-lg">
        <iframe
          key={selectedLocation}
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

export default GoogleMapEmbed 