import React, { useEffect, useState } from 'react';
import AllProductDetails from './AllProductDetails';
import useProducts from '../../hooks/useProducts';

const AllProduct = () => {

     const [allproducts,setProduct] = useProducts();
   



// search 

const [searchTerm, setSearchTerm] = useState('');
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('/product.json') 
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

  const filteredProducts = allproducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );















          
     return (
          <div className='container'>
               <div className='row mt-5'>
               <div class="col-12 col-sm-12 col-lg-12 my-4  mt-5">
          <div class="input-group mb-3   mx-auto mt-5">
          <div class="form-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                     
                      placeholder="Search your product"
                       
                    />
                  </div>

            
          </div>
          <button
              class="btn btn-sm   bg-primary"
              type="button"
              onclick="SearchClick()"
            >
              Search
            </button>
         
          {/* <img src="spinner.gif" style="height: 150px;  " class=" " id="spinner"> */}
           

        </div>
                  {
                                        filteredProducts.map((allproduct)=>
                                        <AllProductDetails 
                                        key={allproduct.id}
                                        allproduct={allproduct}
                                        >


                                        </AllProductDetails>)
                              } 
          </div>
          </div>
     );
};

export default AllProduct;