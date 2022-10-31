import Hero from "./Hero";        
import Recommend from "./Recommend";
import Services from "./Services";     
import Testimonials from "./Testimonials";

import React from 'react'

const Homepage = () => {
  return (
    <div>       
    <Hero />
    <Services />
    <Recommend />
    <Testimonials />
    </div>
  )
}

export default Homepage
