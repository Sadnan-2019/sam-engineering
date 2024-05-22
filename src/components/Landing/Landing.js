import React, { useRef, useState } from "react";
 
// import "./Landing.css";
const Landing = () => {
  const slides = [
    { id: 1, image: '../../assets/banner1.jpg', text: 'Slide 1 Text' },
    { id: 2, image: '../../assets/banner2.jpg', text: 'Slide 2 Text' },
    { id: 3, image: '../../assets/banner3.jpg', text: 'Slide 3 Text' },
  ];

   
 
  return (
    <div>
      <div className="full-width-slider">
 
          <div className=" bg-primary">
           
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="slide" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="carousel-caption d-none d-md-block">
                <h5>{slide.text}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>







          </div>
    
      </div>
    </div>
  );
};

export default Landing;
