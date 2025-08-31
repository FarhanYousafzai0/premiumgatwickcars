
import React from 'react'
import GlassButton from './GlassButton'
import { RiArrowRightUpLine } from "react-icons/ri";
import { choices } from '../../lib/data';
import ChauffeurSection from './ChauffeurSection';

const WhyChoseUs = () => {
  return (
    <>
    

    <section className='relative w-[90%]  h-auto  mx-auto md:mt-0 mt-20 p-5'>


   <div className="flex flex-col items-center  justify-center w-full text-center gap-3 my-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Why Choose Us</h2>
      <p className="text-gray-600 max-w-xl text-sm sm:text-base">
        Experience seamless airport transfers with instant quotes, transparent pricing, and 24/7 support. Ride in comfort and style—every time.
      </p>

      <GlassButton as="a" to="/about" className="ml-2">
              <span className="inline-flex items-center gap-1">
            
                Explore
                <RiArrowRightUpLine size={25}/>
              </span>
            </GlassButton>
   </div>



<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
  {choices.map(({ title, des, icon: Icon, id }) => (
    <div
      key={id}
      className="flex flex-col items-center justify-center text-center p-6 rounded-xl shadow-lg bg-white border border-neutral-200 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-x-2 hover:rotate-y-2"
      style={{ minHeight: "320px", height: "100%" }}
    >
      <div className="flex items-center justify-center mb-4">
        <Icon size={40} className="text-white bg-black rounded p-1 drop-shadow-md" />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{des}</p>
    </div>
  ))}
</div>


    </section>

    
   
    
    
    
    </>
  )
}

export default WhyChoseUs