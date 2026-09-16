import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

import img1  from "./assets/brow.webp";
import img2  from "./assets/nut.webp";
import img3  from "./assets/tri.webp";
import img4  from "./assets/vanilla.webp";
import img5  from "./assets/rasamalai.avif";
import img6  from "./assets/chocolate.jpeg";
import img7  from "./assets/red velvet.avif";
import img8  from "./assets/tender coconut.webp";
import img9  from "./assets/black.webp";
import img10 from "./assets/white.webp";
import img11 from "./assets/choco truffle.avif";
import img12 from "./assets/honey.webp";
import img13 from "./assets/Butterscotch.jpeg";
import img14 from "./assets/rose.jpg";
import img15 from "./assets/Blueberry.webp";

const ALL_ITEMS = [
  {
    name: "Vanilla Cake",
    price: "₹500",
    image: img4,
    category: "cake",
    tag: "Popular",
    description: "Classic soft & fluffy vanilla sponge layered with silky vanilla buttercream and sweet colorful sprinkles. Freshly baked for every occasion!"
  },
  {
    name: "Rasamalai Cake",
    price: "₹600",
    image: img5,
    category: "cake",
    tag: "Bestseller",
    description: "Authentic Indian fusion cake infused with cardamom sponge, saffron syrup, pistachio crunch, and real juicy rasamalai toppings."
  },
  {
    name: "Chocolate Cake",
    price: "₹600",
    image: img6,
    category: "cake",
    tag: null,
    description: "Rich, moist chocolate sponge coated with dark chocolate frosting and topped with glossy cherries for chocolate purists."
  },
  {
    name: "Red Velvet Cake",
    price: "₹550",
    image: img7,
    category: "cake",
    tag: "Trending",
    description: "Decadent crimson cocoa cake layered with smooth, whipped cream cheese frosting and fine red velvet crumbs."
  },
  {
    name: "Tender Coconut Cake",
    price: "₹650",
    image: img8,
    category: "cake",
    tag: null,
    description: "Light tropical cake made with real coconut milk, tender coconut flesh, and fluffy light cream filling."
  },
  {
    name: "Black Forest Cake",
    price: "₹550",
    image: img9,
    category: "cake",
    tag: null,
    description: "Traditional German chocolate sponge layered with fresh whipped cream, sweet cherry compote, and dark chocolate shavings."
  },
  {
    name: "White Forest Cake",
    price: "₹550",
    image: img10,
    category: "cake",
    tag: null,
    description: "Delicate vanilla sponge filled with juicy cherries, white chocolate curls, and light whipped cream."
  },
  {
    name: "Choco Truffle Cake",
    price: "₹600",
    image: img11,
    category: "cake",
    tag: "Popular",
    description: "Ultimate indulgence featuring dense chocolate cake layered with rich, melted dark chocolate ganache truffle."
  },
  {
    name: "Honey Cake",
    price: "₹550",
    image: img12,
    category: "cake",
    tag: null,
    description: "Classic bakery favorite soaked in pure honey syrup, layered with mixed fruit jam, and coated in fresh coconut flakes."
  },
  {
    name: "Butterscotch Cake",
    price: "₹500",
    image: img13,
    category: "cake",
    tag: null,
    description: "Soft butterscotch sponge layered with smooth caramel cream and crunchy golden praline bits."
  },
  {
    name: "Rosemilk Cake",
    price: "₹550",
    image: img14,
    category: "cake",
    tag: null,
    description: "Fragrant South Indian specialty sponge soaked in aromatic rose milk and topped with rose petal cream."
  },
  {
    name: "Blueberry Cake",
    price: "₹550",
    image: img15,
    category: "cake",
    tag: null,
    description: "Delicious vanilla cake layered with real blueberry compote and light fruit-infused frosting."
  },
  {
    name: "Brownie",
    price: "₹600",
    image: img1,
    category: "brownie",
    tag: "Bestseller",
    description: "Fudgy, dense, melted chocolate brownie with a crispy top crust and gooey chocolate center."
  },
  {
    name: "Nuts Brownie",
    price: "₹700",
    image: img2,
    category: "brownie",
    tag: null,
    description: "Gooey chocolate brownie packed with crunchy roasted walnuts, almonds, and cashew nuts."
  },
  {
    name: "Triple Chocolate Brownie",
    price: "₹700",
    image: img3,
    category: "brownie",
    tag: "Popular",
    description: "Decadent chocolate brownie baked with dark, milk, and white chocolate chunks for total chocolate delight."
  },
];

const TAG_COLORS = {
  Popular:    "linear-gradient(135deg,#f43f8e,#c73076)",
  Bestseller: "linear-gradient(135deg,#a855f7,#7c3aed)",
  Trending:   "linear-gradient(135deg,#f97316,#ef4444)",
};

function Products() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [activeItem, setActiveItem] = useState(null);

  // Close modal on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActiveItem(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("active"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });

  const visible = useMemo(() => {
    return ALL_ITEMS.filter((item) => {
      const matchCat =
        filter === "all"      ? true :
        filter === "cakes"    ? item.category === "cake" :
        filter === "brownies" ? item.category === "brownie" : true;
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  return (
    <section className="products" id="cakes">
      {/* ── Header ── */}
      <div className="products-header">
        <h2 className="products-title">Our Delicious Creations</h2>
        <p className="products-subtitle">
          Explore our handcrafted range of designer cakes and rich chocolate brownies
        </p>
      </div>

      {/* ── Controls ── */}
      <div className="products-controls">
        <div className="filter-tabs">
          {["all", "cakes", "brownies"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "cakes" ? "🎂 " : f === "brownies" ? "🍫 " : ""}
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            type="text"
            placeholder="Search cake flavor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="cake-grid" id="brownies">
        {visible.length > 0 ? visible.map((item, index) => (
          <div className="cake-card reveal" key={index}>
            {/* Badge */}
            {item.tag && (
              <span
                className="badge"
                style={{ background: TAG_COLORS[item.tag] || TAG_COLORS.Popular }}
              >
                {item.tag}
              </span>
            )}

            {/* Image + hover overlay */}
            <div className="card-img-wrap" onClick={() => setActiveItem(item)}>
              <img src={item.image} alt={item.name} />
              <div className="img-overlay">
                <span className="click-to-view">Click to View</span>
              </div>
            </div>

            {/* Info */}
            <div className="card-body">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <a
                href="https://www.instagram.com/jbnca_kes/"
                target="_blank"
                rel="noreferrer"
                className="order-btn"
              >
                <span className="order-btn-line1">
                  <FontAwesomeIcon icon={faInstagram} /> Order on
                </span>
                <span className="order-btn-line2">Instagram</span>
              </a>
            </div>
          </div>
        )) : (
          <p className="no-results">No items match your search 🙁</p>
        )}
      </div>

      {/* ── Lightbox / Detail Modal ── */}
      {activeItem && (
        <div className="modal-backdrop" onClick={() => setActiveItem(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-img-wrap">
              <img src={activeItem.image} alt={activeItem.name} />
              <button
                className="modal-close-btn"
                onClick={() => setActiveItem(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <h3 className="modal-title">{activeItem.name}</h3>
              <p className="modal-price">{activeItem.price}</p>
              <p className="modal-desc">{activeItem.description}</p>
              
              <a
                href="https://www.instagram.com/jbnca_kes/"
                target="_blank"
                rel="noreferrer"
                className="modal-order-btn"
              >
                <FontAwesomeIcon icon={faInstagram} />
                &nbsp; Order on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
