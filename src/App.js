import React, { useState} from "react"
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";


function App() {

  return (
    
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Home />
    </div>
  );
}

export default App;