import React, { useState, useMemo } from "react";
import Hero from "../components/Hero";
import Products from "../pages/Products";
import { SAMPLE_PRODUCTS, BRAND, formatLKR } from "../data/products";

const Home = () => {
  const [cart, setCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(SAMPLE_PRODUCTS.map((p) => p.category))],
    []
  );

  const products = useMemo(() => {
    let list = SAMPLE_PRODUCTS;
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (query.trim()) list = list.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    return list;
  }, [query, category]);

  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));

  return (
    <div>
      <Hero BRAND={BRAND} cart={cart} cartOpen={cartOpen} setCartOpen={setCartOpen} />

      <Products
        products={products}
        categories={categories}
        category={category}
        setCategory={setCategory}
        query={query}
        setQuery={setQuery}
        addToCart={addToCart}
        cart={cart}
        setCartOpen={setCartOpen}
        formatLKR={formatLKR}
        BRAND={BRAND}
      />


    </div>
  );
};

export default Home;
