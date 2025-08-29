import React from "react";
import { motion } from "framer-motion";
import { formatLKR } from "../data/products";

const ProductCard = ({ product, addToCart, BRAND, setCartOpen, index }) => (
  <motion.div
    key={product.id}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.25, delay: index * 0.03 }}
    className="group bg-white rounded-3xl border shadow-sm hover:shadow-lg overflow-hidden flex flex-col"
  >
    <div className="relative">
      <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
      {product.badge && (
        <span className="absolute top-2 left-2 text-xs font-semibold bg-white/90 backdrop-blur px-2 py-1 rounded-full border shadow">
          {product.badge}
        </span>
      )}
    </div>
    <div className="p-4 flex flex-col gap-2 flex-1">
      <div className="text-xs text-gray-500">{product.category}</div>
      <h3 className="font-semibold leading-snug line-clamp-2">{product.name}</h3>
      <div className="mt-auto flex items-center justify-between">
        <div className="font-bold">{formatLKR(product.price)}</div>
        <button
          onClick={() => { addToCart(product.id); setCartOpen(true); }}
          className={`text-sm rounded-xl px-3 py-2 text-white ${BRAND.gradient} shadow hover:opacity-95`}
        >
          Add
        </button>
      </div>
    </div>
  </motion.div>
);

export default ProductCard;
