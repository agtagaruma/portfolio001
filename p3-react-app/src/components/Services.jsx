import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "TRAVEL FOR A CAUSE",
      subTitle:
        "We can now light a brighter future to our less fortunate beneficiaries by simply visiting your favorite destinations in the Philippines.",
      },
    {
      icon: service2,
      title: "COVID SAFE",
      subTitle:
        "We have all the curated hotels that have all the precaution for a covid safe environment.",
    },
    {
      icon: service3,
      title: "PAY FLEXIBLE",
      subTitle:
        " Easy payment app via paypal, You also have the options to pay via your preferred card with the help of Paypal. Pay secured and safe.",
    },
    {
      icon: service4,
      title: "NEARBY HAPPENINGS",
      subTitle:
        "Find the best hotels, attractions, events, venues, happenings and places to visit near you in a single click.(Comming Soon!)" ,
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;


  .service {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: auto;
      }
    }
    
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
