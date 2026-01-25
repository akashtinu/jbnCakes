import React from "react";
import Navbar from "./Navbar";
import Home from "./home";
import Products from "./Products";
import About from "./about";
import Footer from "./Footer";
import logo from "./assets/jbn_cakes.jpeg";


function App() {


  return (
    <>
      <Navbar />
       <Home />
       <Products />
        <About />
        <Footer />
    </>
  );
}

export default App;

