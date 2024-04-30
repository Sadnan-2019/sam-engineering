import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Partner from '../Partner/Partner';
import Product from '../Product/Product';
import Hero from '../Hero/Hero';

const Home = () => {
     return (
          <div>
            <main id="main">
            <Hero></Hero>
            <About></About>
        <Product></Product>
        <Services></Services>
        <Partner></Partner>
               
               </main>   
          </div>
     );
};

export default Home;