import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import { useNavigate } from "react-router-dom";





export default function Recommend() {
  
  const navigate = useNavigate()
  const bookNowFN = () => {
    navigate('/BookNow', {replace: true}) 

  }
  
  


  const data = [
    {
      id: 1,
      image: Destination1,
      title: "Siargao",
      subTitle: "Siargao, a teardrop-shaped small island located at the northeastern coast of Mindanao, is known as the country's Surfing Capital and is one of the best tourist ...",
      cost: "9,000",
      duration: "Approx 2 night trip",
      
      
    },
    {
      id:2,
      image: Destination2,
      title: "Boracay",
      subTitle: "Escape to one of the best islands in the world, Boracay in the Philippines! Find out the best time to go, how to get there, the top things to do and see, where to eat, best hotels and resorts to stay in, and other travel tips with this ultimate travel guide. ",
      cost: "14,200",
      duration: "Approx 2 night trip",
       
    },
    {
      id:3,
      image: Destination3,
      title: "Palawan",
      subTitle: "Palawan is a slice of heaven, a sliver of an island that teems with exotic wildlife, quaint fishing villages, and UNESCO World Heritage Sites. Wave hello to endangered animals at the Calauit Game Preserve and Wildlife Sanctuary.",
      cost: "15,500",
      duration: "Approx 2 night trip",
    },
    {
      id:4,
      image: Destination4,
      title: "Benguet",
      subTitle: "With picturesque mountain views, tranquil atmosphere, and cool breeze, Benguet provides a refreshing escape from the busy city life. Benguet is most known for being the home of Baguio City, a top tourist destination that is also called the Summer Capital of the Philippines.",
      cost: "9,100",
      duration: "Approx 1 night trip",
    },
    {
      id:5,
      image: Destination5,
      title: "Cebu",
      subTitle: "Cebu one of the most visited tourist destinations in the Philippines. Dubbed as the Queen City of the South, it boasts of many popular beaches, islands and diving spots. It is also rich in natural wonders such as waterfalls, mountains, and spectacular marine life.",
      cost: "15,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      id:6,
      image: Destination6,
      title: "Batanes",
      subTitle: "Batanes is famous for its breathtaking views of the vast rolling hills and the Pacific Ocean. It's also known for its kind and honest locals which are referred to by most travelers as the kindest locals in the Philippines.",
      cost: "18,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "PACKAGES",
    "HOTELS",
    "FLIGHTS",
    "ATTRACTIONS",
    "EVENTS",
    "VENUES",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Viajeros, Explore categories for exciting promos and finds!</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                {/* <span>{destination.duration}</span> */}
                <button onClick= {bookNowFN}>Book Now!</button>
                
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    font-weight: 900;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  button {
    padding: 1rem;
    cursor: pointer;
    border-radius: 0.3rem;
    border: none;
    color: white;
    background-color: #db0f16;
    font-size: 1.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #ff4468;
    }


  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
