import React from "react";
import Nav from "./Components/nav.component";
import Header from './Components/header.component';
import Terminal from "./Components/terminal.component";
import About from "./Components/about.component";

function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Header/>
      <Terminal/>
      <About/>
    </div>
  );
}

export default App;
