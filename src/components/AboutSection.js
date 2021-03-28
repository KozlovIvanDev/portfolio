import React from "react";
import intro from "../img/intro.jpg";
import { About, DescriptionLeft, Image, Hide, TextContainer } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <Offer>
      <DescriptionLeft>
        <TextContainer>  
          <motion.h2 variants={fade}>   
            Hey! My name is Ivan Kozlov
          </motion.h2>
          <motion.div>
            <Hide>
              <motion.p className="last_par" variants={fade}>I'm <span className="job"></span> from Ukraine, <br/> combining ecology and IT to make world a better place!</motion.p>
            </Hide>
          </motion.div>
          <motion.a className="button" href="./contact" variants={fade}>Contact Me</motion.a>
        </TextContainer>
      </DescriptionLeft>
      <Image>
        <motion.img variants={photoAnim} src={intro} alt="guy with a camera" />
      </Image>
      <Wave />
    </Offer>
  );
};

//Styled Components
const Offer = styled(About)`
.job:before {
  content: "";
  animation: user-job 7s infinite;
}

@keyframes user-job {
  0% {
    content: "a Creative Frontend Developer";
  }
  25% {
    content: "an Ambitious Student";
  }
  50% {
    content: "a Competitive Athlete";
  }
  75% {
    content: "a Commited Environmentalist";
  }
  100% {
    content: "a Creative Frontend Developer";
  }
}
`;

export default AboutSection;
