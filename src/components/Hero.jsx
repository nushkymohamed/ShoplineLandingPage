import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import HeroCollage from "../assets/hero-collage.jpg";
import { BRAND } from "../data/products";
import emailjs from '@emailjs/browser';

export default function Hero() {


const sendNotifyEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_3vrbpo2",        // Your service ID
    "template_x2namxn",       // You can use the same or create a new one
    e.target,
    "fe6Vrgx4uYqVIXe35"       // Your public key
  )
  .then(
    (result) => {
      alert("Thanks! We'll notify you at launch.");
      e.target.reset();
    },
    (error) => {
      alert("Oops! Something went wrong, please try again.");
      console.error(error.text);
    }
  );
};

  return (
    <section className="relative overflow-hidden">
      <div className={`absolute inset-0 -z-10 opacity-20 blur-3xl ${BRAND.gradient}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
          >
            Appliances you trust —
            <span className={`block mt-1 bg-clip-text text-transparent bg-gradient-to-r ${BRAND.accent}`}>
              coming soon to your door
            </span>
          </motion.h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            We’re building our full e‑commerce experience. Meanwhile, browse a curated preview and
            subscribe to get launch offers.
          </p>
     <form
  className="mt-6 flex flex-col sm:flex-row gap-3"
  onSubmit={sendNotifyEmail}
>
  <input
    name="user_email" // Must match variable in your template
    required
    type="email"
    placeholder="Enter your email"
    className="flex-1 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <button
    type="submit"
    className={`rounded-2xl px-6 py-3 text-white shadow-lg hover:opacity-95 transition ${BRAND.gradient}`}
  >
    Notify Me
  </button>
</form>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Check className="w-4 h-4"/>Island‑wide delivery</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4"/>Warranty & support</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4"/>Cash on delivery</div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border bg-white">
            <img src={HeroCollage} alt="Appliance collage" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border p-4">
            <div className="text-xs text-gray-500">Trusted by retailers for 30+ years</div>
            <div className="font-semibold">Now online with {BRAND.name}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
