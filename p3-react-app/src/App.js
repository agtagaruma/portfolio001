import React from 'react'
import styled from 'styled-components'
import ScrollReveal from 'scrollreveal'


import ScrollToTop from "components"
import Navbar from "components"
import Hero from "components"
import Services from "components"
import Recommend from "components"
import Testimonials from "components"
import Footer from "components"


const App = () => {
  return (
    <div>
        <>
        <ScrollToTop/>
        <Navbar />
        <Hero />
        <Services />
        <Recommend />
        <Testimonials />
        <Footer />
        </>
    </div>
  )
}

export default App
