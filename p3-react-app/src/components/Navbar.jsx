import React from 'react'
import styled from "styled-components"
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <Nav>
      <div className="brand">
        
        <div className="container">
          <img src={logo} alt="" />
          viaHero
        </div>

        <div className="toggle">

        </div>

        <ul>
          <li>
            <a href='#home'>Home</a>
            <a href='#services'>Services</a>
            <a href='#recommend'>Places</a>
            <a href='#testimonials'>Testimonials</a>
          </li>
        </ul>

      </div>
    </Nav>
  )
}

export default Navbar
