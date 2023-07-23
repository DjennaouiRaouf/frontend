import React from "react";



const ScrollToTopBtn: React.FC = () =>  {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="my-3"><a className="btn btn-primary btn-lg me-2 pulse" role="button" onClick={handleScrollToTop}
                                 style={{"borderRadius": "36px","fontSize": "26px",
                                     "position": "fixed",
                                     "bottom": "20px",
                                     "right": "30px",
                                     "zIndex": "99"}}><img src="assets/img/up-arrow.png"
                                                                                   style={{"width": "30px","marginBottom": "6px"}}
                                                                                   width="30" height="30"/></a></div>
    );

}

export default ScrollToTopBtn;
