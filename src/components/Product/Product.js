import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";
import { Link, useNavigate } from "react-router-dom";

import "./Product.css";
import useProducts from "../../hooks/useProducts";
const Product = () => {
  const [reviews,setProduct] = useProducts();
  const datas =reviews.slice(0,3);
  
 
  let navigate = useNavigate();

  const allProduct = () => {
    const path = `/allproduct`;
    navigate(path);
  };
 
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
          
         {datas.map((product,) => (
              <ProductDetails
                key={product.id}
                product={product}
              ></ProductDetails>
            ))}
       
           </div>
            

            
          </div>
        </div>
        <div class="social  ">
          <button
        
            type="button"
            class="btn btn-primary rounded mx-auto d-block mt-5"
            onClick={allProduct}
          >
            All Product
          </button>
        </div>
      </section>
    </div>
  );
};

export default Product;
