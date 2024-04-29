import React, { useEffect, useState } from "react";
import "./Product.css";
import ProductDetails from "./ProductDetails";
const Product = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`product.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
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

          <div class="      ">
        
           <div className=" row     ">
          
         {services.map((service) => (
              <ProductDetails
                key={service.id}
                service={service}
              ></ProductDetails>
            ))}
       
           </div>
            

            
          </div>
        </div>
        <div class="social  ">
          <button
            type="button"
            class="btn btn-primary rounded mx-auto d-block mt-5"
            data-toggle="modal"
            data-target=""
          >
            All Product
          </button>
        </div>
      </section>
    </div>
  );
};

export default Product;
