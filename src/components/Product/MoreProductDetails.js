import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MoreProductDetails = () => {
  const { id } = useParams();
  const [products, setProduct] = useState([]);
  // const [servicesDetails,setServicesDetails] = useState([]);

  useEffect(() => {
    fetch(`/product.json`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const details = products.find((s) => s.id === id);
  return (
    <div className="py-5   ">
      <div className=" mt-5          d-flex    my-5">
        <div className="col-12 col-sm-12 col-lg-6">
          <img src={details?.img} className="img-fluid p-4 w-100" alt="" />
        </div>

        <div className="col-12 col-sm-12 col-lg-6 mt-5">
        
          <h3>Name:{details?.name}</h3>
          <h6>Description:{details?.description}</h6>
          
        </div>
      </div>
    </div>
  );
};

export default MoreProductDetails;
