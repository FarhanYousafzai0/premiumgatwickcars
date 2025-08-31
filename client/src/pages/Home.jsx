import React from 'react'
import Hero from '../components/Home/Hero.jsx'

import WhyChoseUs from '../components/Home/WhyChoseUs.jsx'
import ChauffeurSection from '../components/Home/ChauffeurSection.jsx'
import Services from '../components/Home/Services.jsx'



const Home = () => {
  return (
    <>
     <div className=' w-screen '>

     <Hero/>
    <WhyChoseUs/>
    <ChauffeurSection/>
    <Services/>
     </div>
    </>
  )
}

export default Home
