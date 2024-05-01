import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
          <div className='py-5 App'>
               <div className=" mt-5 my-5">
       

       <h3>Name:{details?.name}</h3>
       <img src={details?.img} alt="" />
       {/* <h6>Price:${details?.price}</h6> */}
       <h6>Price:${details?.description}</h6>
       <h4>If you are agree to checkout</h4>
       {/* <Link to="/checkout">
         <button className="btn btn-info"> Please Checkout</button>
       </Link> */}
     </div>
          </div>
     );
};

export default MoreProductDetails;