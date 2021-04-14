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
import Toggle from "./Toggle";
import styled from "styled-components";
import { scrollReveal} from "../animation";
import { useScroll } from "./useScroll";
import { AnimateSharedLayout } from "framer-motion";

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
            <p>Creativitive Thinking</p>
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
        <h2><span>Core Strengths</span></h2>
        <AnimateSharedLayout className="marginrem">
          <Toggle title="Creative Thinking" className="title" >
            <div className="answer">
              <p className="service_p">
                I love programming because it is about the beauty of creating something new from a blank screen. 
                It is the field where technology meets web design. Every time I bring a design to life and turn it into a functioning website, I can hardly contain happiness with my heart leaping up for joy!
              </p>
            </div>
          </Toggle>
          <Toggle title="Intellectual Curiosity" className="title" >
            <div className="answer">
              <p className="service_p">
                I often spend my free time diving deep into Ecology and Computer Science just because I love it. 
                Also, I learned to seek knowledge and reach out to the right people in the pursuit of understanding more about my favorite subjects. 
              </p>
            </div>
          </Toggle>
          <Toggle title="Problem-solving mindset" className="title" >
            <div className="answer">
              <p className="service_p">
              I used to look for challenges and take risks. After I've got a problem to solve, I follow my little algorithm: analyze the situation, reframe it,
              break the problem into its parts, and execute and reflect on the issue. This approach helps me both in life and in the process of programming
              </p>
            </div>
          </Toggle>
          <Toggle title="Determination & Resilience" className="title" >
            <div className="answer">
              <p className="service_p">
                I understood that karate training isn't just about learning to fight and training my entire body, mind, and spirit. Through martial arts, I gained the psychological fortitude needed to develop robust resilience.
                <br/> Mastering the road to black belt is no small feat, nor is the path an easy journey. Perseverance keeps me focused on the goal, lets me master techniques, and strengthens my mental fortitude for what is to come.
              </p>
            </div>
          </Toggle>   
        </AnimateSharedLayout>
      </DescriptionRight>
    </Services>
  );
};

const Services = styled(About)`
  transition: height .5s ease;
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
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: .5rem 0rem;
    cursor: pointer;
  }
  .marginrem{
    margin: 3rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
`;
const Card = styled.div`
transition: height .5s ease;
  flex-basis: 17rem;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  text-align: center;
  background: #2c2c2c;
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
