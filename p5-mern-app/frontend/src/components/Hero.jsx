import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";

import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function Hero() {

  const navigate = useNavigate()
  const prescribeNowFN = () => {
    navigate('/PhysiciansHP', {replace: true}) 

  };

  
  const admitNowFN = () => {
    navigate('/AdmissionsHP', {replace: true}) 

  };

  const pdfPrescriptionFN = () => {
    navigate('/PDFPrescription', {replace: true}) 

  };

  const patienthistory = () => {
    navigate('/PatientHistory', {replace: true}) 

  };

  const terms = () => {
    navigate('/Terms', {replace: true}) 

  };

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h3>Welcome to</h3>
          <h1>e-Prescribe</h1>
          <h4>a safer way to deliver health</h4>
          <p>
          e-Prescribe is an innovative 
          electronic prescribing system that helps physicians to deliver their prescription electonically. It is secured, and 
          convenient. Prescribers and pharmacists can be sure that they are giving patients the right medication.
          </p>


        
                  <ul>
                  
                  <button onClick= {prescribeNowFN}>Physicians Homepage</button>
                  
                  
                  <button onClick= {admitNowFN}>Admissions Homepage</button>
                  
                  
                  <button onClick= {pdfPrescriptionFN}>PDF Prescription</button>

                  <button onClick= {patienthistory}>Patient History</button>

                  <button onClick= {terms}>Terms & Conditions</button>                


                  </ul>
                
          

        </div>
        
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;  

  .background {
    height: 100%;
    img {
      width: 100%;
      filter: brightness(100%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    
    .title {
      position: absolute;
      width: 800px;
      height: 600px;
      display: flex;
      flex-direction:column;
      justify-content:left;
      color: green;
      left: 1000px;
      top: 5px;

      
      
      
      
      h1 {
        font-size: 4.5rem;
        font-weight: 550;
        font-family: pacifico;
        color: #136148;
        letter-spacing: 0.2rem;
      }
      h3 {
        font-size: 2.5rem;
        font-weight: 550;
        font-family: pacifico;
        color: #136148;
        letter-spacing: 0.2rem;
      }
      h4 {
        font-size: 2rem;
        font-weight: 550;
        font-family: pacifico;
        color: #136148;
        letter-spacing: 0.2rem;
        margin: 0px 0px 30px 0px;
      }
      p {
        font-size: 2rem;
        font-weight: 550;
        font-family: arial;
        color: #136148;
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 1rem;
        border: none;
        color: white;
        background-color: #38c2bc;
        font-size: 1rem;
        font-weight: 450;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #59744a;
        }
      
      
    }

    ul {
      display: flex;
      gap: 1rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          color: #0077b6;
          font-size: 1.2rem;
          transition: 0.1s ease-in-out;
          &:hover {
            color: #023e8a;
          }
        }
        &:first-of-type {
          a {
            color: #023e8a;
            font-weight: 900;
          }
        }
      }
    }

    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: palegreen;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;