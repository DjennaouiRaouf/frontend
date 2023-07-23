import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Error from "./components/Error";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTopBtn from "./components/ScrollToTopBtn";


function App() {
    const [prog,setProg]=useState<any[]>([]);

    useEffect(() => {
        const prog_skills: any[] = [
            {img:"assets/img/Python.png",skill_label:"Python",level:5},
            {img:"assets/img/Python.png",skill_label:"Python",level:5},
            {img:"assets/img/Python.png",skill_label:"Python",level:5},
            {img:"assets/img/Python.png",skill_label:"Python",level:5},
            {img:"assets/img/Python.png",skill_label:"Python",level:5},
            {img:"assets/img/Python.png",skill_label:"Python",level:5},
        ];

        setProg(prog_skills);

        }, []);
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div>
                        <NavBar/>
                                <AboutMe/>
                                <ScrollToTopBtn/>

                        <Footer/>
                    </div>} />

                <Route path="/about" element={
                    <div>
                        <NavBar/>
                        <AboutMe/>
                        <ScrollToTopBtn/>
                        <Footer/>
                    </div>} />
                <Route path="/skills" element={
                    <div>
                        <NavBar/>
                        <Skills label={"Programming Language"} data={prog}/>
                        <ScrollToTopBtn/>
                        <Footer/>
                    </div>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
