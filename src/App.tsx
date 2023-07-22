import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar/>

        <AboutMe/>
        <Footer/>
    </div>
  );
}

export default App;
