import React from "react";
import "./Product.css";
const Product = () => {
  return (
    <div>
      <section id="product" class="team section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Product</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          {/* <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            View Details
          </button> */}

          {/* <!-- Modal --> */}
          <div
            class="modal left fade"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Walter White
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="pic">
                    <img
                      src="assets/img/team/team-1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div class="social">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-lg-6 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda
                    para
                  </p>
                  <div class="social">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="300">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div class="social">
                    <a href="">
                      <i class="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="400">
              <div class="member d-flex align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/team-4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et
                    accusamus
                  </p>
                  <div class="social">
                    <a href="">
                      <i class="ri-twitter-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-facebook-fill"></i>
                    </a>
                    <a href="">
                      <i class="ri-instagram-fill"></i>
                    </a>
                    <a href="">
                      {" "}
                      <i class="ri-linkedin-box-fill"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
