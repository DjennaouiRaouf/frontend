import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div><NavBar/> <AboutMe/><Footer/></div>} />
                <Route path="/about" element={<div><NavBar/> <AboutMe/><Footer/></div>} />
                <Route path="/dev" element={<div><NavBar/> <Skills label={"dev"} data={[{img:"",skill_label:"c++",level:3}]}/><Footer/></div>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
