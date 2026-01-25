import React, { useState, useEffect } from "react";
import "./Products.css";

import img1 from "./assets/brow.webp";
import img2 from "./assets/nut.webp";
import img3 from "./assets/tri.webp";
import img4 from "./assets/vanilla.webp";
import img5 from "./assets/rasamalai.avif";
import img6 from "./assets/chocolate.jpeg";
import img7 from "./assets/red velvet.avif";
import img8 from "./assets/tender coconut.webp";
import img9 from "./assets/black.webp";
import img10 from "./assets/white.webp";
import img11 from "./assets/choco truffle.avif";
import img12 from "./assets/honey.webp";
import img13 from "./assets/Butterscotch.jpeg";
import img14 from "./assets/rose.jpg";
import img15 from "./assets/Blueberry.webp";

function Products() {
  const [activeImage, setActiveImage] = useState(null);

  const cakes = [
    { name: "Vanilla Cake", price: "₹500", image: img4},
    { name: "Rasamalai Cake", price: "₹600", image: img5},
    { name: "Chocolate Cake", price: "₹600", image: img6 },
    { name: "Red Velvet Cake", price: "₹550", image: img7 },
    { name: "Tender Coconut Cake", price: "₹650", image: img8 },
    { name: "Black Forest Cake", price: "₹550", image: img9 },
    { name: "White Forest Cake", price: "₹550", image: img10 },
    { name: "Choco Truffle Cake", price: "₹600", image: img11 },
    { name: "Honey Cake", price: "₹550", image: img12 },
    { name: "Butterscotch Cake", price: "₹500", image: img13 },
    { name: "Rosemilk Cake", price: "₹550", image: img14 },
    { name: "Blueberry Cake", price: "₹550", image: img15 },
  ];

  const brownies = [
    { name: "Brownie", price: "₹600", image: img1},
    { name: "Nuts Brownie", price: "₹700", image: img2 },
    { name: "Triple Chocolate Brownie", price: "₹700", image: img3 },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.15 }
    );
    items.forEach(item => observer.observe(item));
  }, []);

  const renderCard = (item, index) => (
    <div className="cake-card reveal" key={index}>
      {item.tag && <span className="badge">{item.tag}</span>}

      <img
        src={item.image}
        alt={item.name}
        onClick={() => setActiveImage(item.image)}
      />

      <div className="overlay">
        <a
          href="https://www.instagram.com/jbnca_kes/"
          target="_blank"
          rel="noreferrer"
        >
          Order on Instagram
        </a>
      </div>

      <h3>{item.name}</h3>
      <p className="price">{item.price}</p>
    </div>
  );

  return (
    <section className="products">
      <h2 className="section-title" id="cakes"  style={{color:" rgba(199, 48, 118, 0.95)"}}>Cakes</h2>
      <div className="cake-grid">{cakes.map(renderCard)}</div>

      <h2 className="section-title" id="brownies"  style={{color:" rgba(199, 48, 118, 0.95)"}}>Brownies</h2>
      <div className="cake-grid">{brownies.map(renderCard)}</div>

      {activeImage && (
        <div className="modal" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Cake Preview" />
        </div>
      )}
    </section>
  );
}

export default Products;
