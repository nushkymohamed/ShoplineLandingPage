import React from "react";
import Logo from "../assets/Logo.jpeg";
import { BRAND } from "../data/products";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-2xl">
              <img src={Logo} alt="Logo" />
            </div>
            <span className="font-extrabold text-lg">{BRAND.name}</span>
          </div>
          <p className="text-sm text-gray-600 mt-3 max-w-xs">
            Importers, wholesaler, and retailer of all types of Electronics and Home Appliances.
          </p>
          <p className="text-sm text-gray-600 max-w-xs">•Island‑wide delivery.</p>
        </div>
        <div>
          <div className="font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>Phone: +94 777 804 789</li>
            <li>Email: hello@shopline.lk</li>
            <li>WhatsApp: +94 77 4292 736</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Follow</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>Facebook • Instagram • TikTok</li>
            <li>Business Hours: 10.00 – 20.00</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
