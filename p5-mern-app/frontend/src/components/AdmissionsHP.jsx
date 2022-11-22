import styled from "styled-components";
import React from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import {useDispatch} from 'react-redux'

export default function AdmissionsHP() {

  const dispatch = useDispatch()

    //states
    const [firstName ,setFirstName] = useState('')
    const [lastName ,setLastName] = useState('')
    const [contactNumber ,setContactNumber] = useState('')
    const [gender ,setGender] = useState('')
    const [birthdate ,setBirthdate] = useState('')
    const [address ,setAddress] = useState('')
    const [vitalSigns ,setVitalSigns] = useState('')
  
    const onFirstNameHandler = (event) => {
      setFirstName(event.target.value)
    }
  
    const onLastNameHandler = (event) => {
      setLastName(event.target.value)
    }
  
    const onContactNumberHandler = (event) => {
      setContactNumber(event.target.value)
    }
  
    const onGenderHandler = (event) => {
      setGender(event.target.value)
    }
  
    const onBirthdate = (event) => {
      setBirthdate(event.target.value)
    }
  
    const onAddressHandler = (event) => {
      setAddress(event.target.value)
    }
  
    const onVitalSignsHandler = (event) => {
      setVitalSigns(event.target.value)
    }

  return (
    <div>
    <Section id="AdmissionHP">
    <div className="maincontainer2">
       
        <div class="container2">
          <div class="py-5 text-center">
            
            <h2>e-Prescription / Admissions Homepage</h2>
            <p class="lead">Please enter required informations.</p>
          </div>
          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Admission's Informations</span>
                <span class="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    
                    <h4 class="text-muted">Admitted by:</h4>
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
                    <h6 class="my-0">Position</h6>
                    <h4 class="text-muted">Front Desk Officer</h4>
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
                
                
              </ul>
              
            </div>
            <div class="col-md-8 order-md-1">
              <h4 class="mb-3">Patient's Informations</h4>
              <form class="needs-validation" novalidate>
                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">First Name</label>
                  <input type="text" class="form-control" id="address" placeholder="First Name" required />
                  <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Last Name</label>
                  <input type="text" class="form-control" id="address" placeholder="Last Name" required />
                  <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  
                </div>
                <div class="mb-3">
                  <label for="email">Email <span class="text-muted">(Required)</span></label>
                  <input type="email" class="form-control" id="email" placeholder="you@example.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address">Cellphone Number</label>
                  <input type="text" class="form-control" id="address" placeholder="09933615930" required />
                  <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address2">Address <span class="text-muted">(Optional)</span></label>
                  <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
                
                <h4 class="mb-3">Patients Vital Signs</h4>
                
                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Respiratory Rate</label>
                  <input type="text" class="form-control" id="address" placeholder="38 cpm" required />
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Pulse Rate</label>
                  <input type="text" class="form-control" id="address" placeholder="40 bpm" required />
                </div>

                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Blood Pressure</label>
                  <input type="text" class="form-control" id="address" placeholder="120/80 mmhg" required />
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Temperature</label>
                  <input type="text" class="form-control" id="address" placeholder="36 &#8451;" required />
                  </div>
                </div>    

                <div class="row">
                  <div class="col-md-6 mb-3">
                  <label for="firstName">Height</label>
                  <input type="text" class="form-control" id="address" placeholder="173 cm" required />
                  </div>
                  <div class="col-md-6 mb-3">
                  <label for="lastName">Weight</label>
                  <input type="text" class="form-control" id="address" placeholder=" 70 kgs" required />
                  </div>
                </div>  

                </div>
              
                <div class="mb-3">
                  <label for="address">Emergency Signs Observed</label>
                  <input type="text" class="form-control" id="address" placeholder="Sample Here" required />
                  
                </div>

                <div class="mb-3">
                  <label for="address">Notes</label>
                  <input type="text" class="form-control" id="address" placeholder="Sample Notes Here" required />
                  
                </div>
              
                <div class="row">
                  <div class="col-md-6 mb-3">
                  <button class="btn btn-primary btn-lg btn-block" type="button">Save</button>
                  </div>
                  <div class="col-md-6 mb-3">
                  <button class="btn btn-primary btn-lg btn-block" type="button">Cancel</button>
                  </div>
                </div>
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
}

.buttonBelow{
  gap: 1rem;
}

.container2 {
  max-width: 960px;
  
}
.border-top { border-top: 1px solid #e5e5e5; }
.border-bottom { border-bottom: 1px solid #e5e5e5; }
.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }

`;
