import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";

import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import {useDispatch} from 'react-redux'

export default function Hero() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  //states
  const [firstName ,setFirstName] = useState('')
  const [lastName ,setLastName] = useState('')
  const [email ,setEmail] = useState('')
  const [contactNumber ,setContactNumber] = useState('')
  const [clinicAffiliation ,setClinicAffiliation] = useState('')
  const [prcLicense ,setPrcLicense] = useState('')
  const [password ,setPassword] = useState('')

  const onFirstNameHandler = (event) => {
    setFirstName(event.target.value)
  }

  const onLastNameHandler = (event) => {
    setLastName(event.target.value)
  }

  const onEmailHandler = (event) => {
    setEmail(event.target.value)
  }

  const onContactNumberHandler = (event) => {
    setContactNumber(event.target.value)
  }

  const onClinicAfilliationHandler = (event) => {
    setClinicAffiliation(event.target.value)
  }

  const onPrcLicenseHandler = (event) => {
    setPrcLicense(event.target.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.target.value)
  }

  const onSubmitForm = (event) => {
    event.preventDefault();
    dispatch({
      type : 'ADD_PHYSICIAN',
      payload: {
        firstName: firstName,
        lastName : lastName,
        password: password,
        email: email,
        prcLicense: prcLicense,
        clinicAffiliation: clinicAffiliation,
        contactNumber: contactNumber
      }
    })

    setFirstName('')
    setLastName('')
    setPassword('')
    setEmail('')
    setClinicAffiliation('')
    setContactNumber('')
    setPrcLicense('')
  }

  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>

      <div className="content" >
        <div className="title">

          <div className="loginDiv">
            <h4>Sign Up</h4>
            <form class="login-holder" onSubmit={onSubmitForm}>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="firstName">First Name*</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    value={firstName} 
                    placeholder="First Name" 
                    onChange={onFirstNameHandler} 
                    required 
                  />

                </div>
                <div class="col-md-6 mb-3">
                  <label for="lastName">Last Name*</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  value={lastName}  
                  placeholder="Last Name" 
                  onChange={onLastNameHandler} 
                  required 
                  />
                </div>

                <div class="col-md-6 mb-3">
                  <label for="firstName">Email*</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    value={email}  
                    placeholder="john@gmail.com"
                    onChange={onEmailHandler} 
                    required 
                  />
                </div>

                <div class="col-md-6 mb-3">
                  <label for="lastName">Cellphone Number*</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    value={contactNumber}  
                    placeholder="09933615930" 
                    onChange={onContactNumberHandler} 
                    required 
                    />
                </div>

                <div class="col-md-6 mb-3">
                <label for="address">Clinic Afilliation*</label>
                  <input 
                  type="text" 
                  class="form-control" 
                  value={clinicAffiliation}  
                  placeholder="Baguio General Hospital" 
                  onChange={onClinicAfilliationHandler} 
                  required 
                  />
                </div>

                <div class="col-md-6 mb-3">
                  <label for="address">PRC License Number*</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    value={prcLicense}  
                    placeholder="XDFT145DTY" 
                    onChange={onPrcLicenseHandler} 
                    required 
                    />
                </div>

              </div>

              <div class="mb-3">
                <label for="address">Password*</label>
                <input 
                type="password" 
                class="form-control" 
                value={password}  
                placeholder="************" 
                onChange={onPasswordHandler} 
                required />

              </div>

              

              <h6>(*Required)</h6>
              <ul> <button type="submit">Create</button> </ul>
            </form>
          </div>
          
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 1rem;
  width: 100%;
  height: 100%;  

  .loginDiv{
    display: flex;
    flex-direction: column;
    justify-alignment: left;
  }

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
      justify-content:flex-start;
      text-align:left;
      color: green;
      left: 1100px;
      top: 25px;

      .mb-3 {
        font-size: 2rem;
      }

      
      
      
      
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
        font-family: roboto;
        color: #136148;
        letter-spacing: 0.2rem;
      }
      h4 {
        font-size: 2rem;
        font-weight: 550;
        font-family:roboto;
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
        font-size: 1.2rem;
        font-weight: 450;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #59744a;
        }
      
      
    }

    ul {
      display: flex;
      justify-content: center;
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