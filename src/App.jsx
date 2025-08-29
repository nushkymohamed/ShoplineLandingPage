import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import { SAMPLE_PRODUCTS } from "./data/products";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState({});

  const addToCart = (id) => setCart(c => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <Router>
      <Header totalItems={totalItems} setCartOpen={setCartOpen} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} setCartOpen={setCartOpen} />} />
        <Route path="/products" element={<Products addToCart={addToCart} setCartOpen={setCartOpen} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      {cartOpen && <CartDrawer cart={cart} setCart={setCart} setCartOpen={setCartOpen} />}
    </Router>
  );
}

export default App;
