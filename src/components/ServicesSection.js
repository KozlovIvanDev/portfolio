import React from "react";
//Import Icons
import creativity from "../img/creativity.svg";
import solution from "../img/solution.svg";
import determine from "../img/determine.svg";
import curiosity from "../img/curiosity.svg";
//Styles
import { 
  About, DescriptionLeft, DescriptionRight, 

} from "../styles";
import styled from "styled-components";
import { scrollReveal} from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="services"
    >
      <DescriptionLeft className="no_mar">
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={creativity} />
            </div>
            <p>Creativity</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={solution} />
            </div>
            <p>Problem-solving mindset</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={determine} />
            </div>
            <p>Determination & Resilience</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={curiosity} />
            </div>
            <p>Intellectual Curiosity</p>
          </Card>
        </Cards>
      </DescriptionLeft>
      <DescriptionRight className="services_text">
        <h2>My core <span>strengths</span></h2>
        <p className="service_p f-p">I combine ecology and ITlor sit amet consectetur adipisicing elit. Quam quis obcaecati numquam voluptates sit in.</p>
        <p className="service_p">to make this tter place Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ea.</p>
        <p className="service_p">to make this tter place Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, ea.</p>
        <p className="service_p last_par">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores deleniti cum facilis quam alias. Nemo.</p> 
        <a className="button" href="./about">Read More</a>
      </DescriptionRight>
    </Services>
  );
};

const Services = styled(About)`
  .no_mar{
    flex:1;
    margin-right: 0;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: bold;
  }
  p {
    width: 100%;
    padding: 1rem 0rem;
  }
  .f-p{
    padding: 0 0 1rem 0;
  }
  .icon img{
    width: 75px;
    height: 75px;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
`;
const Card = styled.div`
  flex-basis: 17rem;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  text-align: center;
  background: #121212;
  margin: 15px;
  padding: 2.5rem;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
  -moz-box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
  box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);

  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  p{
    padding: 0rem;
    padding-top: 1rem;
  }
`;

export default ServicesSection;
