import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Trash2, Check, ArrowRight } from "lucide-react";
import { SAMPLE_PRODUCTS, formatLKR, BRAND } from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  const [cart, setCart] = useState({}); // {productId: qty}
  const [cartOpen, setCartOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(SAMPLE_PRODUCTS.map((p) => p.category)))],
    []
  );

  const products = useMemo(() => {
    let list = SAMPLE_PRODUCTS;
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (query.trim())
      list = list.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    return list;
  }, [query, category]);

  const totalItems = useMemo(() => Object.values(cart).reduce((a, b) => a + b, 0), [cart]);

  const subtotal = useMemo(
    () =>
      Object.entries(cart).reduce((sum, [pid, qty]) => {
        const prod = SAMPLE_PRODUCTS.find((p) => p.id === pid);
        return sum + (prod ? prod.price * qty : 0);
      }, 0),
    [cart]
  );

  const addToCart = (id) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const removeFromCart = (id) => {
    const next = { ...cart };
    delete next[id];
    setCart(next);
  };
  const changeQty = (id, qty) => setCart((c) => ({ ...c, [id]: Math.max(1, qty) }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      {/* Category filter */}
      <div className="flex gap-2 flex-wrap mb-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-2 rounded-xl border shadow-sm ${
              c === category ? "bg-gray-900 text-white" : "bg-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Search */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full sm:w-80 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
      />

      {/* Products grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
          >
            <Link
              to={`/products/${p.id}`}
              className="group bg-white rounded-3xl border shadow-sm hover:shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-44 w-full object-cover" />
                {p.badge && (
                  <span className="absolute top-2 left-2 text-xs font-semibold bg-white/90 backdrop-blur px-2 py-1 rounded-full border shadow">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-4 flex flex-col gap-2 flex-1">
                <div className="text-xs text-gray-500">{p.category}</div>
                <h3 className="font-semibold leading-snug line-clamp-2">{p.name}</h3>
                <div className="mt-auto flex items-center justify-between">
                  <div className="font-bold">{formatLKR(p.price)}</div>
                  <button
                    onClick={(e) => {
                      e.preventDefault(); // prevent Link navigation
                      addToCart(p.id);
                      setCartOpen(true);
                    }}
                    className={`text-sm rounded-xl px-3 py-2 text-white ${BRAND.gradient} shadow hover:opacity-95`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setCartOpen(false)}
            aria-hidden
          />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl border-l flex flex-col">
            <div className="p-4 border-b flex items-center justify-between">
              <div className="font-semibold">Your Cart</div>
              <button onClick={() => setCartOpen(false)} className="p-2 rounded-xl border bg-white">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-3">
              {Object.keys(cart).length === 0 && (
                <div className="text-sm text-gray-600">
                  Your cart is empty. Add some items from the catalog.
                </div>
              )}
              {Object.entries(cart).map(([pid, qty]) => {
                const prod = SAMPLE_PRODUCTS.find((p) => p.id === pid);
                if (!prod) return null;
                return (
                  <div key={pid} className="flex gap-3 items-center border rounded-2xl p-3">
                    <img src={prod.image} alt={prod.name} className="w-16 h-16 object-cover rounded-xl" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{prod.name}</div>
                      <div className="text-xs text-gray-500">{formatLKR(prod.price)}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <label className="text-xs text-gray-600">Qty</label>
                        <input
                          type="number"
                          min={1}
                          value={qty}
                          onChange={(e) => changeQty(pid, Number(e.target.value))}
                          className="w-16 rounded-xl border px-2 py-1"
                        />
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(pid)} className="p-2 rounded-xl border hover:bg-gray-50">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="border-t p-4">
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>{formatLKR(subtotal)}</span>
              </div>
              <button
                disabled={Object.keys(cart).length === 0}
                className={`mt-4 w-full rounded-2xl px-5 py-3 text-white ${BRAND.gradient} shadow-lg `}
                onClick={() => alert("Checkout is coming soon! Contact 0777 804 789 For Orders")}
              >
                Checkout
              </button>
              <div className="mt-2 text-[11px] text-gray-500">
                Taxes and shipping calculated at checkout.
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
