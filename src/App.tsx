import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/><AboutMe/><Footer/>
    </div>
  );
}

export default App;
