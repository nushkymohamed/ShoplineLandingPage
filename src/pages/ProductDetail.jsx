import React from "react";
import { useParams } from "react-router-dom";
import { SAMPLE_PRODUCTS, formatLKR, BRAND } from "../data/products";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// Inside your component


export default function ProductDetail() {
  const { id } = useParams();
  const product = SAMPLE_PRODUCTS.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(product.gallery?.[0] || product.image);
const navigate = useNavigate();

  if (!product) return <div className="text-center py-20">Product not found</div>;
  

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/products" className="flex items-center gap-2 text-gray-600 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Gallery */}
 <div className="space-y-4">
  {/* Main large image */}
  <img
    src={selectedImage}
    alt={product.name}
    className="rounded-3xl border shadow-lg w-full object-cover h-96"
  />

  {/* Scrollable thumbnail row with ring-safe containers */}
  <div className="flex gap-2 overflow-x-auto flex-nowrap pb-2">
    {product.gallery?.map((img, idx) => (
      <div
        key={idx}
        className="p-1 rounded-xl flex-shrink-0" // Container padding for ring space
      >
        <img
          src={img}
          alt={`${product.name} thumbnail ${idx + 1}`}
          onClick={() => setSelectedImage(img)}
          className={`h-20 w-20 object-cover rounded-xl border cursor-pointer transition
            ${selectedImage === img
              ? "ring-2 ring-black"
              : "opacity-80 hover:opacity-100"
            }`}
        />
      </div>
    ))}
  </div>
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
            
  <strong>{product.name}</strong>
  <span className="ml-2">{product.description}</span>

            
          </p>

          {/* Reviews */}
         <div className="mt-6">
  <h2 className="font-semibold text-lg mb-2">Reviews</h2>
  <div className="space-y-4 text-sm text-gray-600">
    {product.reviews && product.reviews.length > 0 ? (
      product.reviews.map((review, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="text-yellow-500">
             <span className="text-gray-500 ml-2 font-medium">{review.user}</span>
          <span className="ml-2">{"⭐".repeat(review.rating)}</span>

           
          </div>
          <div>{review.comment}</div>
        </div>
      ))
    ) : (
      <div>No reviews yet.</div>
    )}
  </div>
</div>


          {/* Add to cart button */}
          <button
            className={`mt-6 w-full rounded-2xl px-5 py-3 text-white ${BRAND.gradient} shadow-lg`}
            onClick={() => {
  alert("Checkout is coming soon! Contact Us For Orders");
  navigate("/contact");
}}

          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}