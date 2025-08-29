import React from "react";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-4 sm:gap-6">
          {[
            { q: "When is the full site launching?", a: "We’re targeting a phased rollout this quarter. Join the mailing list for early access and offers." },
            { q: "Do you offer cash on delivery?", a: "Yes, in most urban areas. We also support bank transfer and card on delivery for selected items." },
            { q: "Are products authentic?", a: "Absolutely. We source from official distributors and provide manufacturer warranties." },
            { q: "How can I buy before launch?", a: "Send us a message with the product you need and we’ll arrange a manual order and delivery." },
          ].map((it) => (
            <div key={it.q} className="bg-white rounded-3xl p-6 border shadow-sm">
              <div className="font-semibold">{it.q}</div>
              <div className="text-gray-600 mt-2 text-sm leading-relaxed">{it.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
