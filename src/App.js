import React from "react";
import Nav from "./Components/nav.component";
import Header from './Components/header.component';
import Terminal from "./Components/terminal.component";
import codefest from "./img/codefest.jpg"
import Competiton from "./Components/competiton"

function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Header/>
      <Terminal/>
      <Competiton bg={codefest} name="codefest" link="#" about=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "/>
    </div>
  );
}

export default App;
