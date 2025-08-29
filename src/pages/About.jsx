import React from "react";
import Logo from "../assets/Logo.jpeg";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-600 mb-4">
          {`shopline.lk has been a trusted wholesale and retail supplier of home appliances and electronics in Sri Lanka for over 30 years. Our mission is to deliver quality products at fair prices directly to retailers and customers across the country.`}
        </p>
        <p className="text-gray-600 mb-4">
          We specialize in kitchen appliances, cooling solutions, TVs, fans, ovens, and more. Our commitment to excellent service and island-wide delivery ensures our customers get the products they need, fast and reliably.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { title: "Wholesale roots", text: "30+ years supplying retailers across Sri Lanka. Genuine products and fair pricing." },
            { title: "Warranty & service", text: "Manufacturer warranties honored with responsive after‑sales support." },
            { title: "Island‑wide delivery", text: "Fast delivery to your doorstep. Cash on delivery available in most areas." },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-3xl p-6 border shadow-sm">
              <h3 className="font-semibold text-orange-500">{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
