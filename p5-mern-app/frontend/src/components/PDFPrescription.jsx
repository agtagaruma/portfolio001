import styled from "styled-components";
import React from 'react';
import { useNavigate } from "react-router-dom";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



export default function PDFPrescription() {


  const navigate = useNavigate()
  const homePage = () => {
    navigate('/', {replace: true}) 

  }




  return (
    <div>
    <Section id="PDFPrescription">
    <div className="maincontainer2">
       
        <div class="container2">
          <div class="py-5 text-center">
            
            <h2>e-Prescription</h2>
            <p class="lead">By using e-Prescribe, you agree to our Terms and Conditions and that you have read our Privacy Policy..</p>
          </div>
          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Physician, Informations</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">PRC License Number</h6>
                    <h4 class="text-muted">1245pq4589</h4>
                  </div>
                </li>

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Last Name</h6>
                    <h4 class="text-muted">Tagaruma</h4>
                  </div>
                </li>

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">First Name</h6>
                    <h4 class="text-muted">Antonio</h4>
                  </div>
                </li>

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Specialty</h6>
                    <h4 class="text-muted">Surgeon</h4>
                  </div>
                </li>
                
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Clinic & Hospital Affiliation</h6>
                    <h4 class="text-muted">Baguio General Hospital</h4>
                    <h5 class="text-muted">Main Rd., Baguio City</h5>
                    <h5 class="text-muted">09933615930</h5>
                  </div>
                </li>

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Physician's Signature an Stamp</h6>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                </li>

                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Scan QR code below</h6>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                  </div>
                </li>
                
                
              </ul>
              
            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3"><b>Patient's Informations</b></h4>
              <h5>Prescription Code: DJKF125GFV1</h5>
              <br/>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">First Name</label>
                  <h5>Antonio</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Last Name</label>
                  <h5>Tagaruma</h5>
                  </div>                  
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Email</label>
                  <h5>agtagarum05@gmail.com</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Cellphone Number</label>
                  <h5>09933615930</h5>
                  </div>                  
                </div>
                <div class="mb-3">
                  <label for="address2">Address <span class="text-muted">(Optional)</span></label>
                  <h6>Main Rd. Baguio City, Benguet, Philippines </h6>
                </div>
                
                <h4 class="mb-3"><b>Prescription Informations</b></h4>
                <h5>Date: November 15, 2022</h5>
                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Generic Name</label>
                  <h5>Amoxicillin</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Brand Name</label>
                  <h5>Augmentix</h5>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Dosage</label>
                  <h5>500 mg,3 x a day, #21</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Duration</label>
                  <h5>7 days</h5>
                  </div>
                </div>         
                </div>
              
                <div class="mb-3">
                  <label for="address">Instructions</label>
                  <h5>Take after meal</h5>
                  
                </div>

                <div class="mb-3">
                  <label for="address">Notes</label>
                  <h5>Eat fruits and green vegetables</h5>
                  
                </div>

                <hr/>

                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Generic Name</label>
                  <h5>Co-amoxiclav</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Brand Name</label>
                  <h5>Augmentin</h5>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Dosage</label>
                  <h5>500 mg, 1 x a day #14</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Duration</label>
                  <h5>14 days</h5>
                  </div>
                </div>         
                </div>
              
                <div class="mb-3">
                  <label for="address">Instructions</label>
                  <h5>Take after meal</h5>
                  
                </div>

                <div class="mb-3">
                  <label for="address">Notes</label>
                  <h5>Eat fruits and green vegetables</h5>
                  
                </div>

                <hr/>

                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Generic Name</label>
                  <h5>Paracetamol</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Brand Name</label>
                  <h5>Biogesic</h5>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Dosage</label>
                  <h5>500 mg, as needed #10</h5>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Duration</label>
                  <h5>prn</h5>
                  </div>
                </div>         
                </div>
              
                <div class="mb-3">
                  <label for="address">Instructions</label>
                  <h5>Take if temperature is above 38 &#8451;</h5>
                  
                </div>

                <div class="mb-3">
                  <label for="address">Notes</label>
                  <h5>Ventilate Room as needed</h5>
                  
                </div>

                <hr/>

                

              
                <ul>
                  
                  <button >Print</button>
                  
                  <button >Send to Email</button>

                  <button onClick={homePage}>Cancel</button>
                  
                </ul>
              </form>
            </div>
          </div>
          <br/>
        </div>
     
      </div>
      </Section>
    </div>
  )
}

const Section = styled.section`
html {
  font-size: 14px;
}
@media (min-width: 768px) {
  html {
    font-size: 16px;
  }
}

.maincontainer2 {
  display: flex;
  justify-content: center;
  align-items: center;
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

}

.buttonBelow{
  gap: 1rem;
}

button {
  padding: 1rem;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
  color: white;
  background-color: #db0f16;
  font-size: 1.5rem;
  text-transform: uppercase;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #e76149;
  }
}

.container2 {
  max-width: 960px;
  
}
.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

`;
