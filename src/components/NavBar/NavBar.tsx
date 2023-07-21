import React from "react";


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
              
              <li className="nav-item"><a className="nav-link active" href="#" style={{"color": "rgba(255,255,255,0.9)"}}>About
                me</a></li>
              
              <li className="nav-item"><a className="nav-link" href="#"
                                          style={{"color": "rgba(255,255,255,0.9)"}}>Database</a></li>
              
              <li className="nav-item"><a className="nav-link" href="#" style={{"color": "rgba(255,255,255,0.9)"}}>Programming
                langage</a></li>
            </ul>
            <button className="btn btn-primary" type="button">Admin</button>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
