import React from "react";

const Error: React.FC  = () =>  {

  return (
      <section className="py-4 py-xl-5">
        <div className="container">
          <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
            <div className="row g-0">
              <div className="col-md-6" style={{"background": "#1A233A"}}>
                <div className="text-white p-4 p-md-5">
                  <h2 className="fw-bold text-white mb-3">Oops! You&#39;re lost</h2>
                  <p className="mb-4">We can not find the page you&#39;re looking for.</p>
                  <div className="my-3"><a className="btn btn-primary btn-lg me-2" role="button" href="#">Go Home</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-first order-md-last" style={{"minHeight": "250px","background": "#1A233A"}}><img
                  className="w-100 h-100 fit-cover" src="assets/img/error.gif"/></div>
            </div>
          </div>
        </div>
      </section>

  );

}

export default Error;
