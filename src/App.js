import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className=" ">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div id="topbar" class="fixed-top d-flex align-items-center bg-primary">
        <div class="container d-flex align-items-center justify-content-center justify-content-md-between">
          <div class="contact-info d-flex align-items-center">
            <i class="bi bi-envelope-fill"></i>
            <a href="mailto:contact@example.com">info@example.com</a>
            <i class="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55
          </div>
          <div class="cta d-none d-md-block">
            <a href="#about" class="scrollto">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <header
        id="header"
        class="fixed-top d-flex align-items-center bg-primary "
      >
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo">
            <a href="index.html">SAM ENGINEERING</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- */}
          {/* <a href=index.html" class="logo">
        <img src="assets/img/logo.png" alt="" class="img-fluid"/></a> */}
          {/* --> */}

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>

              <li>
                <a class="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>

              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>

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
              <h2 class="animate__animated animate__fadeInDown">
                Welcome to <span>Anyar</span>
              </h2>
              <p class="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
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
              <p class="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
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
              <p class="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
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

      <main id="main">
        <section id="icon-boxes" class="icon-boxes">
          <div class="container">
            <div class="row">
              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bxl-dribbble"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p class="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-file"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p class="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-tachometer"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p class="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>

              <div
                class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-layer"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p class="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="about">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>About Us</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row content">
              <div class="col-lg-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> Duis aute irure dolor
                    in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0">
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#" class="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" class="services">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row">
              <div
                class="col-md-6 d-flex align-items-stretch"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="icon-box">
                  <i class="bi bi-card-checklist"></i>
                  <h4>
                    <a href="#">Lorem Ipsum</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="icon-box">
                  <i class="bi bi-bar-chart"></i>
                  <h4>
                    <a href="#">Dolor Sitema</a>
                  </h4>
                  <p>
                    Minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat tarad limino ata
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <i class="bi bi-binoculars"></i>
                  <h4>
                    <a href="#">Sed ut perspiciatis</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="icon-box">
                  <i class="bi bi-brightness-high"></i>
                  <h4>
                    <a href="#">Nemo Enim</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div class="icon-box">
                  <i class="bi bi-calendar4-week"></i>
                  <h4>
                    <a href="#">Magni Dolore</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div
                class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div class="icon-box">
                  <i class="bi bi-briefcase"></i>
                  <h4>
                    <a href="#">Eiusmod Tempor</a>
                  </h4>
                  <p>
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="team" class="team section-bg">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Team</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
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
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
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

              <div
                class="col-lg-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
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
                      Quisquam facilis cum velit laborum corrupti fuga rerum
                      quia
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

              <div
                class="col-lg-6 mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
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
        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>Contact Us</h2>
            </div>

            <div
              class="row mt-1 d-flex justify-content-end"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div class="col-lg-5">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>
                </div>
              </div>

              <div
                class="col-lg-6 mt-5 mt-lg-0"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
