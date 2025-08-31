import { Phone } from 'lucide-react'
import React from 'react'
import GlassButton from './GlassButton'

const WhyChoseUs = () => {
  return (
    <>
    

    <div className='relative w-[90%]  h-screen mx-auto md:mt-0 mt-20 p-5'>


   <div className="flex flex-col items-center justify-center w-full text-center gap-3">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Why Choose Us</h2>
      <p className="text-gray-600 max-w-xl text-sm sm:text-base">
        Experience seamless airport transfers with instant quotes, transparent pricing, and 24/7 support. Ride in comfort and style—every time.
      </p>

      <GlassButton as="a" href="/about" className="ml-2">
              <span className="inline-flex items-center gap-2">
                <Phone size={16} />
                Explore
              </span>
            </GlassButton>
   </div>


    </div>

    
    
    
    
    
    </>
  )
}

export default WhyChoseUs