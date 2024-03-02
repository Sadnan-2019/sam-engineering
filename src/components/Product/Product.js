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

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="member justify-items-center align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/product1.png"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Walter White</h4>

                  <div class="social">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#modal1"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal left fade"
              id="modal1"
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
                        src="assets/img/team/product1.png"
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

            {/* modal 1*/}

            {/* MODAL2  */}

            <div
              class="col-lg-6 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div class="member  align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/product2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Product 2</h4>

                  <div class="social">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#modal2"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="modal left fade"
              id="modal2"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Product 2
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
                        src="assets/img/team/product2.jpg"
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

            {/* modal 2 product2*/}

            {/* modal 3 product3*/}

            <div class="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="300">
              <div class="member  align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/product3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>William Anderson</h4>

                  <div class="social">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#modal3"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="modal left fade"
              id="modal3"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Sarah Jhonson
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
                        src="assets/img/team/product3.jpg"
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

            {/* {modal 3 product 3} */}

            {/* {modal 4 product 4} */}
            <div class="col-lg-6 mt-4" data-aos="fade-up" data-aos-delay="400">
              <div class="member   align-items-start">
                <div class="pic">
                  <img
                    src="assets/img/team/product4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </div>
                <div class="member-info">
                  <h4>Amanda Jepson</h4>

                  <div class="social">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#modal4"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="modal left fade"
              id="modal4"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Sarah Jhonson
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
                        src="assets/img/team/product4.jpg"
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

            {/* {modal 4 product 4} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
