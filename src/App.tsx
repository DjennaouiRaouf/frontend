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
      <NavBar/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/dev" element={<Skills label={"dev"} data={[{img:"",skill_label:"c++",level:3}]} />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
