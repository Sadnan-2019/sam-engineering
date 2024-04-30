import React, { useEffect, useState } from 'react';
import AllProductDetails from './AllProductDetails';
import useProducts from '../../hooks/useProducts';

const AllProduct = () => {

     const [allproducts,setProduct] = useProducts();
          
     return (
          <div>
                  {
                                        allproducts.map(allproduct=>
                                        <AllProductDetails 
                                        key={allproduct.id}
                                        allproduct={allproduct}
                                        >


                                        </AllProductDetails>)
                              } 
          </div>
     );
};

export default AllProduct;