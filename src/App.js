import React, { useState, useEffect } from "react"
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";


function App() {
  const [hidden, setHidden] = useState(false);

  const location = useLocation();
  // const cursorX = useMotionValue(-100);
  // const cursorY = useMotionValue(-100);

  // const springConfig = { damping: 25, stiffness: 700 };
  // const cursorXSpring = useSpring(cursorX, springConfig);
  // const cursorYSpring = useSpring(cursorY, springConfig);

  // useEffect(() => {
  //   const moveCursor = (e) => {
  //     cursorX.set(e.clientX - 16);
  //     cursorY.set(e.clientY - 16);
  //   };
  //   const onMouseDown = (e) => {
      
  //   }
  //   const onMouseUp = (e) => {

  //   }

  //   window.addEventListener("mousemove", moveCursor);
  //   window.addEventListener("mousedown", onMouseDown);
  //   window.addEventListener("mouseup", onMouseUp);

  //   return () => {
  //     window.removeEventListener("mousemove", moveCursor);
  //     window.removeEventListener("mousedown", onMouseDown);
  //     window.removeEventListener("mouseup", onMouseUp);
  //   };  
  // }, []);

  return (
    
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <AboutMe />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
// <motion.div
//         className="cursor"
//         style={{
//           translateX: cursorXSpring,
//           translateY: cursorYSpring,
//         }}
//       />

export default App;