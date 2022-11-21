import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 e-Prescribe . All rights reserved</span>
      
      <ul className="social__links">
        <li widthheight="100px" width="100px">
          
          <a href="https://www.facebook.com/agtagaruma" alt="fb">
            <BsFacebook />
          </a>

        </li>

        <li>

          <a href="https://www.facebook.com/agtagaruma" alt="fb">
            <AiFillInstagram />
          </a>

        </li>

        <li>

          <a href="https://www.facebook.com/agtagaruma" alt="fb">
            <BsLinkedin />
          </a>
          
        </li>
        
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #82aa6c;
  border-radius: 0.5rem;
  padding: 2.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 200; 

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: white;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #577348;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
