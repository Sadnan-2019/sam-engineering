import React from 'react';
import banner1 from "../../assets/banner1.jpg"
import banner2 from "../../assets/banner2.jpg"
import banner3 from "../../assets/banner3.jpg"
import banner4 from "../../assets/banner4.jpg"
const Hero = () => {
     return (
          <div>
              <section
        id="hero"
        class="d-flex justify-cntent-center align-items-center"
      >
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          class="container carousel carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-item active">
            <div class="carousel-container">
              <h2 class=" animate__animated animate__fadeInDown">
                Welcome to <span>Anyar</span>
              </h2>
              <img src={banner1}  alt='' class="rounded animate__animated animate__fadeInUp w-50"/>
               
              
              <a
                href="#about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">
                Lorem Ipsum Dolor
              </h2>
              <img src={banner2}  alt='' class="animate__animated animate__fadeInUp w-50 rounded"/>
              <a
                href="#about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">
                Sequi ea ut et est quaerat
              </h2>
              <img src={banner3}  alt='' class="animate__animated animate__fadeInUp w-50 rounded"/>
              <a
                href="#about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <div class="carousel-container">
              <h2 class="animate__animated animate__fadeInDown">
                Sequi ea ut et est quaerat
              </h2>
              <img src={banner4}  alt='' class="animate__animated animate__fadeInUp   w-50 rounded"/>
              <a
                href="#about"
                class="btn-get-started animate__animated animate__fadeInUp scrollto"
              >
                Read More
              </a>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bx bx-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            class="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bx bx-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
      
      {/* <!-- End Hero --> */}  
          </div>
     );
};

export default Hero;