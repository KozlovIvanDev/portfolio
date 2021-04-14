import React from "react";
//Import Icons
 import digitalCleanup from "../img/DigitalCleanup.png";
 import bugster from "../img/bugster.png";
//Styles
import styled from "styled-components";
import { About} from "../styles";
import { scrollReveal} from "../animation";
import { useScroll } from "./useScroll";
import { AnimateSharedLayout } from "framer-motion";

const WorksSection = () => {
  const [element, controls] = useScroll();

  return (
    <Works
      className="works"
    >
      <h2><span>Projects</span></h2>
      <WorksContainer>
        <Work>

          <img className="image_cont" src={digitalCleanup} />

          <div className="stack">
            <div className="tech">
              <div className="tech_item first">
                <h4>HTML/CSS</h4>
              </div>
              <div className="tech_item">
                <h4>Java Script</h4>
              </div>
            </div>
            <div className="tech_item type">
              <span><h4>Web App</h4></span>  
            </div>
          </div>
          <div className="text">
            <h3>Digital Cleanup</h3>
            <p>
              This website will bring awareness of the global ecological problem - realizing colossal CO2 emissions by digital junk. I developed this website as part of the "Let's do it, Ukraine" network, where I am a national team member.               
            </p>
          </div>
        </Work>
        <Work>

          <img className="image_cont" src={bugster} />

          <div className="stack">
            <div className="tech">
              <div className="tech_item first">
                <h4>Java</h4>
              </div>
              <div className="tech_item">
                <h4>Material UI</h4>
              </div>
            </div>
            <div className="tech_item type">
              <span><h4>Mobile App</h4></span>  
            </div>
          </div>
          <div className="text">
            <h3>Bugster</h3>
            <p>
              This is a mobile app that will increase computer literacy in the Ukrainian community. This project's idea came to me in Samsung IT School, where I've been studying Android Java development.
            </p>
          </div>
        </Work>
        <Work>

          <img className="image_cont" src={digitalCleanup} />

          <div className="stack">
            <div className="tech">
              <div className="tech_item first">
                <h4>Storytelling</h4>
              </div>
              <div className="tech_item">
                <h4>Editing</h4>
              </div>
            </div>
            <div className="tech_item type">
              <span><h4>Video</h4></span>  
            </div>
          </div>
          <div className="text">
            <h3>My Path</h3>
            <p>
              In this video, I covered one of my hobbies - Kyokushin karate. I've been training for almost ten years and have quite a lot to tell about! "Following the Martial Way is like scaling a cliff
               – continue upwards without rest. It demands absolute and unfaltering devotion to the task at hand."
            </p>
          </div>
        </Work>
        <Work>

          <img className="image_cont" src={bugster} />

          <div className="stack">
            <div className="tech">
              <div className="tech_item first">
                <h4>Copywriting</h4>
              </div>
              <div className="tech_item">
                <h4>Blogging</h4>
              </div>
            </div>
            <div className="tech_item type">
              <span><h4>Article</h4></span>  
            </div>
          </div>
          <div className="text">
            <h3>Trash Hack</h3>
            <p>
              This article is my first successful attempt at writing. It was published at the "Trash hack" project by UNESCO.
              It covers the importance of cleaning digital junk and agitates to join the ecological campaign. After reading it, you may question yourself about your culture of using digital resources.
            </p>
          </div>
        </Work>
      </WorksContainer>
    </Works>
  );
};

const Works = styled(About)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WorksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2rem;
`;
const Work = styled.div`
  transition: all .5s ease;
  width: 35vw;
  margin: 1rem;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction:column;
  text-align: left;
  background: #2c2c2c;
  padding: 2.5rem;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
  -moz-box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
  box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);

  .image_cont{
    width: 95%;
    height: 20rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: cemter;
    background: #3f3f3f;
    border-radius: 5px;
    transition: all .3s cubic-bezier(0.25, 0.46, 0.45, 0.84);
  }
  .image_cont:hover {
    transform: scale(1.025);
    cursor: pointer;
  }
  .stack{
    width: 95%;
    margin: 2rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .tech{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .tech_item{
    padding: 1rem;
    background: #3f3f3f;
    border-radius: 5px;
    margin: 0.5rem 1rem; 
  }
  .first{
    margin-left: 0;
  }
  .type{
    margin-right: 0;
  }

  .text{
    align-items: flex-start;
    width: 95%;
    background: #3f3f3f;
    padding: 2rem;
    border-radius: 5px;
  }
  h4{
    font-size: 1.25rem;
  }
  h3{
    font-size: 2rem;

  }
  p{
    padding: 0rem;
    padding-top: 1rem;
  }
`;

export default WorksSection;
