import logo from "./logo.svg";
import "./App.css";
import TopNav from "./components/TopNav/TopNav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Partner from "./components/Partner/Partner";

function App() {
  return (
    <div className=" ">

      
      <TopNav></TopNav>

      <Nav></Nav>

      <Hero></Hero>

      <main id="main">
        <About></About>
        <Product></Product>
        <Services></Services>
        <Partner></Partner>
        

        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
