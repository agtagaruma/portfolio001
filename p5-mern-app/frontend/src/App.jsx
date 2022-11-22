import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";
import {Routes, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Physicians from "./components/PhysiciansHP";
import Admissions from "./components/AdmissionsHP";


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth";
import PhysiciansHP from "./components/PhysiciansHP";
import AdmissionsHP from "./components/AdmissionsHP";
import PDFPrescription from "./components/PDFPrescription";
import SignUp from "./components/SignUp";
import PatientHistory from "./components/PatientHistory";
import Terms from "./components/Terms";



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
        <Route path="/BookNow" element={<Physicians />}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/physiciansHP" element={<PhysiciansHP />} />
        <Route path="/admissionsHP" element={<AdmissionsHP />} />
        <Route path="/pdfPrescription" element={<PDFPrescription />} />
        <Route path="/patientHistory" element={<PatientHistory />} />
        <Route path="/terms" element={<Terms />} />

      </Routes>
      <Footer />
    </div>
  );
}
