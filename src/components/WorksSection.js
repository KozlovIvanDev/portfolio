import React from "react";
//Import Icons
import digitalCleanup from "../img/DigitalCleanup.png";
import bugster from "../img/bugster.png";
//Styles
import { 
  About, WorkLeft, WorkRight, 
} from "../styles";
import styled from "styled-components";
import { scrollReveal} from "../animation";
import { useScroll } from "./useScroll";

const WorksSection = () => {
  const [element, controls] = useScroll();

  return (
    <Works
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      className="works"
    >
      <WorkLeft className="no_mar left">
        <Card>
          <div className="icon">
            <img alt="icon" src={digitalCleanup} />
          </div>
          <h2>1. <span className="work_title">Digital Cleanup</span> | Website</h2>
        </Card>
      </WorkLeft>

      <WorkRight className="no_mar right">
        <Card>
          <div className="icon">
            <img alt="icon" src={bugster} />
          </div>
          <h2>2. <span className="work_title">Bugster</span> | Mobile App</h2>
        </Card>
      </WorkRight>
    </Works>
  );
};

const Works = styled(About)`
.works{
  disply: block;
}
  .left{
    left: 0;
  }
  .right{
    right: 0;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: bold;
  }
  .icon img{
    width: 450px;
    height: 450px;
  }
  .icon{
    background: #121212;
    -webkit-box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
    -moz-box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
    box-shadow: 5px 5px 15px -3px rgba(0, 5, 3, 0.3);
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 2rem;
  }
  .work_title{
    margin-left: 30px;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction:column;
  text-align: left;

  .icon {
    display: flex;
    align-items: center;
    justify-content:center;
  }
`;

export default WorksSection;
