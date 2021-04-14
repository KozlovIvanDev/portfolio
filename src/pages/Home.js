import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WorksSection from "../components/WorksSection"
import CopyrightSection from "../components/CopyrightSection"
import ContactSection from "../components/ContactSection"
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

export default class Home extends React.Component {
  render() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <WorksSection />
      <ServicesSection />
      <ContactSection />
      <CopyrightSection />
      <ScrollTop />
    </motion.div>
  );
  };
};
