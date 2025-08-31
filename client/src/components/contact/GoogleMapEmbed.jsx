import React from 'react'

const GoogleMapEmbed = () => {
  return (
    <div className="max-w-[90%] mx-auto   h-90 rounded-xl border border-neutral-200 overflow-hidden shadow-lg">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.459680756737!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d6f31f8a72f%3A0x123456789abcdef!2sKarachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  )
}

export default GoogleMapEmbed