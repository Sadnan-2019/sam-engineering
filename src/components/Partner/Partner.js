import React from "react";
import Marquee from "react-fast-marquee";
import partner1 from "../../assets/galay.png";
import partner2 from "../../assets/hcah.png";
const Partner = () => {
  return (
    <div>
      <div className="container ">
        <div class="section-title">
          <h2>Our Partner</h2>
         
        </div>
      </div>
      <Marquee>
        <section id="icon-boxes" class="icon-boxes">
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
              >
                <div class="testimonial-slider">
                  {/* <!-- testimonial single --> */}
                  <div class="item text-center">
                    <i class="tf-ion-chatbubbles"></i>
                    {/* <!-- client info --> */}

                    {/* <!-- /client info -->
							<!-- client photo --> */}
                    <div class="client-thumb">
                      <img
                        loading="lazy"
                        src={partner1}
                        class="img-fluid w-75"
                        alt=""
                      />
                    </div>
                    <div class="client-meta">
                      <h5>William Martin</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
              >
                <div class="testimonial-slider">
                  {/* <!-- testimonial single --> */}
                  <div class="item text-center">
                    <i class="tf-ion-chatbubbles"></i>
                    {/* <!-- client info --> */}

                    {/* <!-- /client info -->
							<!-- client photo --> */}
                    <div class="client-thumb">
                      <img
                        loading="lazy"
                        src={partner2}
                        class="img-fluid w-50 "
                        alt=""
                      />
                    </div>
                    <div class="client-meta">
                      <h5>William Martin</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Marquee>
    </div>
  );
};

export default Partner;
