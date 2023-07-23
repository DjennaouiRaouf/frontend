import React from "react";
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {

  return (
      <nav className="navbar navbar-light navbar-expand-md py-3" style={{"background": "#1A233A"}}>
        
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span
            style={{"color": "rgba(255,255,255,0.9)"}}><img src="assets/img/img2.png" style={{"width": "60px"}} alt={''}/>Resume</span></a>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"
                  style={{"borderWidth": "0px"}}><span className="visually-hidden">Toggle navigation</span><i
              className="fas fa-align-justify" style={{"color": "rgb(255,255,255)"}}></i></button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav me-auto">
              
              <li className="nav-item"><Link className="nav-link active" to="/about" style={{"color": "rgba(255,255,255,0.9)"}}>About
                me</Link></li>
              

              
              <li className="nav-item"><Link className="nav-link" to="/skills" style={{"color": "rgba(255,255,255,0.9)"}}>Skills</Link></li>
            </ul>
            <button className="btn btn-primary" type="button">Admin</button>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
