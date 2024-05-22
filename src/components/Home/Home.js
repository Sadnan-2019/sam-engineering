import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Partner from '../Partner/Partner';
import Product from '../Product/Product';
import Hero from '../Hero/Hero';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';

const Home = () => {
     return (
          <div>
            <main id="main">
            {/* <Hero></Hero> */}
            <Landing></Landing>
            <About></About>
        <Product></Product>
        <Services></Services>
        <Partner></Partner>
        <Contact></Contact>
               
               </main>   
          </div>
     );
};

export default Home;