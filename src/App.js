import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Menu, X, Trash2, Check, ArrowRight } from "lucide-react";
import Logo from './assets/Logo.jpeg';
import HeroCollage from './assets/hero-collage.jpg';
import Gascooker4Burner from './assets/4BG.png';
import Kettle from './assets/Kettle.jpg';
import LEDTV from './assets/TV.png';
import FAN from './assets/Fan.jpg';
import Oven from './assets/Oven.jpg';
import AC from './assets/AC.jpg';

// --- Quick theme config ---
const BRAND = {
  name: "shopline.lk",
  accent: "from-orange-500 to-yellow-500",
  accentText: "text-orange-500",
  button:"bg-black ",
    gradient: "bg-black hover:bg-gray-800",
  // gradient: "bg-gradient-to-r from-orange-500 via-red-500 to-white-900",
};

// --- Sample catalog (replace with your products later) ---
const SAMPLE_PRODUCTS = [
  {
    id: "p1",
    name: "Smart Gas Cooker 4-Burner",
    price: 35990,
    badge: "Best Seller",
    image: Gascooker4Burner,
    category: "Kitchen",
  },

  {
    id: "p3",
    name: "40\" HD LED TV",
    price: 89990,
    badge: "Deal",
image: LEDTV,
    category: "Television",
  },
 
  {
    id: "p6",
    name: "Dual Inverter AC 9000 BTU",
    price: 189990,
    badge: "Limited",
image: AC,
    category: "Cooling",
  },
    {
    id: "p4",
    name: "12\" Silent Pedestal Fan",
    price: 12990,
    badge: null,
image: FAN,
    category: "Home Appliances",
  },
     {
    id: "p2",
    name: "Electric Kettle 1.8L Auto Off",
    price: 3990,
    badge: "New",
    image: Kettle,
    category: "Kitchen",
  },
   {
    id: "p5",
    name: "Convection Oven 30L",
    price: 25990,
    badge: null,
image: Oven,
    category: "Kitchen",
  },
  
];

function formatLKR(cents) {
  // Treat numbers as LKR without decimals for display
  return `LKR ${cents.toLocaleString("en-LK")}`;
}

export default function App() {
  const [mobileNav, setMobileNav] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState({}); // {productId: qty}
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  
const [dark, setDark] = useState(false);
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

  const totalItems = useMemo(
    () => Object.values(cart).reduce((a, b) => a + b, 0),
    [cart]
  );
  const subtotal = useMemo(() => {
    return Object.entries(cart).reduce((sum, [pid, qty]) => {
      const prod = SAMPLE_PRODUCTS.find((p) => p.id === pid);
      return sum + (prod ? prod.price * qty : 0);
    }, 0);
  }, [cart]);

  const addToCart = (id) =>
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const removeFromCart = (id) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });
  const changeQty = (id, qty) =>
    setCart((c) => ({ ...c, [id]: Math.max(1, qty) }));

  return (
    <div className={`${dark ? "dark" : ""}`}>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Top Announcement */}
      <div className={`${BRAND.button} text-white text-sm py-2 text-center`}> 
        <span className="font-medium">Grand opening soon!</span> Island-wide delivery & cash on delivery available.
      </div>
      {/* <div>            <button
  onClick={() => setDark(!dark)}
  className="p-2 rounded-xl border bg-white dark:bg-gray-800 dark:text-gray-200"
>
  {dark ? "☀️" : "🌙"}
</button></div> */}

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/70 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`h-11 w-11 rounded-2xl`} >
             <img src={Logo} alt="Appliance collage"  />
             </div>
            <a href="#" className="font-extrabold text-xl tracking-tight">{BRAND.name}</a>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#catalog" className="hover:opacity-80">Catalog</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
      
            <button
              className="relative rounded-2xl px-4 py-2 bg-white border shadow-sm hover:shadow-md transition"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
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
              onClick={() => setMobileNav((v) => !v)}
              aria-label="Toggle navigation"
            >
              {mobileNav ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileNav && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-3 flex flex-col gap-3 text-sm">
              <a href="#catalog" onClick={() => setMobileNav(false)}>Catalog</a>
              <a href="#about" onClick={() => setMobileNav(false)}>About</a>
              <a href="#faq" onClick={() => setMobileNav(false)}>FAQ</a>
              <a href="#contact" onClick={() => setMobileNav(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 blur-3xl ${BRAND.gradient}" />
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
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const email = fd.get("email");
                alert(`Thanks! We'll notify ${email} at launch.`);
                e.currentTarget.reset();
              }}
            >
              <input
                name="email"
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
              {/* <img
                src="https://images.unsplash.com/photo-1603808033192-7df32f0bb3ee?q=80&w=1600&auto=format&fit=crop"
                alt="Appliance collage"
                className="w-full h-full object-cover"
              /> */}
              <img src={HeroCollage} alt="Appliance collage" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border p-4">
              <div className="text-xs text-gray-500">Trusted by retailers for 30+ years</div>
              <div className="font-semibold">Now online with {BRAND.name}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Catalog</h2>
            <p className="text-gray-600">Preview of what’s coming at launch.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-sm px-3 py-2 rounded-xl border shadow-sm hover:shadow ${
                    c === category ? "bg-gray-900 text-white" : "bg-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full sm:w-80 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
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
                    onClick={() => {
                      addToCart(p.id);
                      setCartOpen(true);
                    }}
                    className={`text-sm rounded-xl px-3 py-2 text-white ${BRAND.gradient} shadow hover:opacity-95`}
                  >
                    Add
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold rounded-2xl px-5 py-3 border bg-white shadow hover:shadow-md">
            Need something specific? Contact us <ArrowRight className="w-4 h-4"/>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white/60 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-3 gap-6">
          {[{
            title: "Wholesale roots",
            text: "30+ years supplying retailers across Sri Lanka. Genuine products and fair pricing.",
          },{
            title: "Warranty & service",
            text: "Manufacturer warranties honored with responsive after‑sales support.",
          },{
            title: "Island‑wide delivery",
            text: "Fast delivery to your doorstep. Cash on delivery available in most areas.",
          }].map((f) => (
            <div key={f.title} className="bg-white rounded-3xl p-6 border shadow-sm">
              <h3 className={`font-semibold ${BRAND.accentText}`}>{f.title}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold">Frequently Asked</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4 sm:gap-6">
          {[{
            q: "When is the full site launching?",
            a: "We’re targeting a phased rollout this quarter. Join the mailing list for early access and offers.",
          },{
            q: "Do you offer cash on delivery?",
            a: "Yes, in most urban areas. We also support bank transfer and card on delivery for selected items.",
          },{
            q: "Are products authentic?",
            a: "Absolutely. We source from official distributors and provide manufacturer warranties.",
          },{
            q: "How can I buy before launch?",
            a: "Send us a message with the product you need and we’ll arrange a manual order and delivery.",
          }].map((it) => (
            <div key={it.q} className="bg-white rounded-3xl p-6 border shadow-sm">
              <div className="font-semibold">{it.q}</div>
              <div className="text-gray-600 mt-2 text-sm leading-relaxed">{it.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white/60 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="bg-white rounded-3xl border shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Contact us</h2>
            <p className="text-gray-600 mt-1 text-sm">Tell us what you’re looking for. We’ll reply within a business day.</p>
            <form
              className="mt-6 grid sm:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                alert(
                  `Thanks ${fd.get("name") || "there"}! We'll reach you at ${fd.get(
                    "phone"
                  ) || fd.get("email")} shortly.`
                );
                e.currentTarget.reset();
              }}
            >
              <input name="name" placeholder="Your name" className="rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input name="phone" placeholder="Phone / WhatsApp" className="rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input name="email" type="email" placeholder="Email (optional)" className="sm:col-span-2 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea name="message" placeholder="What do you need?" rows={4} className="sm:col-span-2 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-xs text-gray-500">By contacting us, you agree to our terms & privacy.</div>
                <button type="submit" className={`rounded-2xl px-5 py-3 text-white ${BRAND.gradient} shadow-lg hover:opacity-95`}>
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-3">
             <div className={`h-11 w-11 rounded-2xl`} >
             <img src={Logo} alt="Appliance collage"  />
             </div>
              <span className="font-extrabold text-lg">{BRAND.name}</span>
            </div>
            <p className="text-sm text-gray-600 mt-3 max-w-xs">
              Importers, wholesaler, and retailer of all types of Electronics and Home Appliances.
            </p>
             <p className="text-sm text-gray-600  max-w-xs">
              •Island‑wide delivery.
            </p>
          </div>
          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
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
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-3">
              {Object.keys(cart).length === 0 && (
                <div className="text-sm text-gray-600">Your cart is empty. Add some items from the catalog.</div>
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
              <div className="mt-2 text-[11px] text-gray-500">Taxes and shipping calculated at checkout.</div>
            </div>
          </aside>
        </div>
      )}
    </div>
     </div>
  );
}
