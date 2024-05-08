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
    <div className="py-5 container   ">
      <div className=" mt-5   row   justify-content-center  align-items-center    ">
        <div className="col-12 col-sm-12 col-lg-6   ">
          <img src={details?.img} className="img-fluid p-4 w-100" alt="" />
        </div>

        <div className="col-12 col-sm-12 col-lg-6 mt-5 px-5">
        
          <h3>Name: {details?.name}</h3>
          <h3>Specification</h3>
           
          <li className="" style={{fontSize:"20px"}}>{details?.description.specificationsone}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationstwo}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationsthree}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationsfour}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationsfive}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationssix}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationsseven}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationseight}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationsnine}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationsten}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationseleven}</li>
          <li style={{fontSize:"20px"}}>{details?.description.specificationsthirten}</li>
          
        </div>
      </div>
    </div>
  );
};

export default MoreProductDetails;
