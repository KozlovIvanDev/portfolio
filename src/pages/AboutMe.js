import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
// import CSlider from "../components/SliderSection";
import CopyrightSection from "../components/CopyrightSection"
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

// const slideData = [
//   {
//     index: 0,
//     headline: 'Bugster',
//     technology: [{
//       stack: 'Java',
//       stack: 'Material UI',
//     }],
//     type:'Mobile App',
//     description: 'lorem ijvw kjbvfehib w kjdfiuwhn iguiqwon kkdsjhaskjn usdahjn iudgfb dhgifhb cbiub',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
//   },
//   {
//     index: 1,
//     headline: 'Digital Cleanup',
//     type:'Web App',
//     technology: [{
//       stack: 'HTML/CSS',
//       stack: 'JavaScript',
//     }],
//     description: 'lorem ijvw kjbvfehib w kjdfiuwhn iguiqwon kkdsjhaskjn usdahjn iudgfb dhgifhb cbiub',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
//   },
//   {
//     index: 2,
//     headline: 'Karate Experience',
//     type:'Video',
//     technology: [{
//       stack: 'Martial Arts',
//       stack: 'Editing',
//     }],
//     description: 'lorem ijvw kjbvfehib w kjdfiuwhn iguiqwon kkdsjhaskjn usdahjn iudgfb dhgifhb cbiub',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
//   },
//   {
//     index: 3,
//     headline: 'Trash Hack',
//     type:'Article',
//     technology: [{
//       stack: 'Writing',
//       stack: 'Blogging',
//     }],
//     description: 'lorem ijvw kjbvfehib w kjdfiuwhn iguiqwon kkdsjhaskjn usdahjn iudgfb dhgifhb cbiub',
//     src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
//   }
// ]

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <CopyrightSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
