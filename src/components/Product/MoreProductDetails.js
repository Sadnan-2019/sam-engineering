import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const MoreProduch1etails = () => {
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
      <div className=" mt-5   row   justify-content-center  ah1gn-items-center    ">
        <div className="col-12 col-sm-12 col-lg-6   ">
          <img src={details?.img} className="img-fluid  py-5 p-4 w-100" alt="" />
          <h3> {details?.name}</h3>
        </div>

        <div className="col-12 col-sm-12 col-lg-12 mt-5 px-5 border">
        
          
          <h3 className="text-center">Specification</h3>
           
      
         
      {/* <th scope="row">{details.id}</th> */}
      <h1 className="" style={{fontSize:"20px"}}>{details?.description.specificationsone}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationstwo}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsthree}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsfour}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsfive}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationssix}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsseven}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationseight}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsnine}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsten}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationseleven}</h1>
          <h1 style={{fontSize:"20px"}}>{details?.description.specificationsthirten}</h1>
  
          
        </div>
      </div>
     
    </div>
  );
};

export default MoreProduch1etails;
