import React from "react";
import { useParams } from "react-router-dom";
import { SAMPLE_PRODUCTS, formatLKR, BRAND } from "../data/products";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const product = SAMPLE_PRODUCTS.find((p) => p.id === id);

  if (!product) return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/products" className="flex items-center gap-2 text-gray-600 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Gallery */}
        <div className="space-y-4">
          <img src={product.image} alt={product.name} className="rounded-3xl border shadow-lg w-full" />
          {/* Add more images if available */}
          {/* Example: product.gallery.map(...) */}
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="text-xl font-semibold">{formatLKR(product.price)}</div>
          {product.badge && (
            <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full border shadow-sm bg-white/90">
              {product.badge}
            </div>
          )}
          <p className="text-gray-600 mt-4">
            This is a sample description for <strong>{product.name}</strong>. You can add detailed features, specifications, and any promotional info here.
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-2">Reviews</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <div>⭐ ⭐ ⭐ ⭐ ⭐ - Great product!</div>
              <div>⭐ ⭐ ⭐ ⭐ - Very useful and durable.</div>
            </div>
          </div>

          {/* Add to cart button */}
          <button
            className={`mt-6 w-full rounded-2xl px-5 py-3 text-white ${BRAND.gradient} shadow-lg`}
            onClick={() => alert("Add to cart functionality coming soon!")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
