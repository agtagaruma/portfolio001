import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import {Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Booking from "./components/Booking";


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";


export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/BookNow" element={<Booking />}/>
        <Route path="/auth" element={<Auth />} />
      
      </Routes>
      <Footer />
    </div>
  );
}
