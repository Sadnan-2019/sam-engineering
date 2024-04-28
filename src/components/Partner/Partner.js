import React from "react";
import Marquee from "react-fast-marquee";
import partner1 from "../../assets/galay.png";
const Partner = () => {
  return (
    <div>
      <div className="container ">
        <div class="section-title">
          <h2>Our Partner</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
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
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="client-meta">
                      <h3>William Martin</h3>
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
                        src={partner1}
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="client-meta">
                      <h3>William Martin</h3>
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
