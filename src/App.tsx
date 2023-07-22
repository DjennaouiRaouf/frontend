import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar/><Skills label={"Programming langage"}
                       data={[{skill_label:"C++",img:"",level:3},{skill_label:"C++",img:"",level:3},{skill_label:"C++",img:"",level:3},{skill_label:"C++",img:"",level:3},{skill_label:"C++",img:"",level:3},{skill_label:"C++",img:"",level:3},{skill_label:"C++",img:"",level:3}] }/><Footer/>
    </div>
  );
}

export default App;
