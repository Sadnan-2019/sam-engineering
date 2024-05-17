import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
 
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g4ete88",
        "template_7y6r7gh",
        form.current,
        "Ha_sV1MspGoTm0fU2"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("SEND SUCCESSFULLY");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
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
              <form onSubmit={sendEmail} class="php-email-form" ref={form}>
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

                <div class="">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Send Message "
                  />
                </div>
              </form>
            </div>
      
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Contact;
