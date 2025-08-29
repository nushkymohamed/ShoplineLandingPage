import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import Logo from '../assets/Logo.jpeg';

const Header = ({ totalItems, setCartOpen }) => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`h-11 w-11 rounded-2xl`} >
            <img src={Logo} alt="Logo" />
          </div>
          <a href="/" className="font-extrabold text-xl tracking-tight">shopline.lk</a>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="/" className="hover:opacity-80">Home</a>
          <a href="/products" className="hover:opacity-80">Products</a>
          <a href="/about" className="hover:opacity-80">About</a>
          <a href="/faq" className="hover:opacity-80">FAQ</a>
          <a href="/contact" className="hover:opacity-80">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            className="relative rounded-2xl px-4 py-2 bg-white border shadow-sm hover:shadow-md transition"
            onClick={() => setCartOpen(true)}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="ml-1 inline-flex min-w-6 h-6 items-center justify-center rounded-full text-xs font-semibold text-white bg-gray-900 px-2">
                  {totalItems}
                </span>
              )}
            </div>
          </button>

          <button
            className="md:hidden p-2 rounded-xl border bg-white"
            onClick={() => setMobileNav(v => !v)}
          >
            {mobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileNav && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3 text-sm">
            <a href="/" onClick={() => setMobileNav(false)}>Home</a>
            <a href="/products" onClick={() => setMobileNav(false)}>Products</a>
            <a href="/about" onClick={() => setMobileNav(false)}>About</a>
            <a href="/faq" onClick={() => setMobileNav(false)}>FAQ</a>
            <a href="/contact" onClick={() => setMobileNav(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
