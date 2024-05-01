import React from 'react';
import { useNavigate } from 'react-router';

const AllProductDetails = (props) => {

  // const {id,name,img } = props.product ;
  // const { id } = ;
  const { id,name,img  } = props.allproduct ;

// Check if 'id' is defined before using it
 
  const navigate= useNavigate()

  const handleServiceDetails=(id)=>{
    navigate(`/product-details/${id}`)


  }

     
     return (
          
               <div className=' col-md-6 col-lg-4 g-4 mt-5  ' id="product" >
             
             <div className="card    text-light mt-5   ">
               <img src={img} className="card-img-top img-fluid p-4" alt="..."/>
               <div className="card-body bg-dark text-light">
                 <h5 className="card-title">{name}</h5>
                 {/* <p>Price:${price}</p> */}
                 {/* <p className="card-text">{description}</p> */}
               </div>
               <div className="card-footer">
                 {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                 <button className='btn btn-primary' onClick={()=>handleServiceDetails(id)}>Service Details</button>
               </div>
             </div>
            
   </div>
           
     );
};

export default AllProductDetails;