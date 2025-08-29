import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Tell us what you’re looking for. We’ll reply within a business day.
        </p>
        <form
          className="grid sm:grid-cols-2 gap-4 bg-white rounded-3xl border shadow-sm p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            alert(`Thanks ${fd.get("name") || "there"}! We'll reach you at ${fd.get("phone") || fd.get("email")} shortly.`);
            e.currentTarget.reset();
          }}
        >
          <input name="name" placeholder="Your name" className="rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="phone" placeholder="Phone / WhatsApp" className="rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="email" type="email" placeholder="Email (optional)" className="sm:col-span-2 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" placeholder="What do you need?" rows={4} className="sm:col-span-2 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <div className="sm:col-span-2 flex items-center justify-between">
            <div className="text-xs text-gray-500">By contacting us, you agree to our terms & privacy.</div>
            <button type="submit" className="rounded-2xl px-5 py-3 text-white bg-black hover:bg-gray-800 shadow-lg">Send message</button>
          </div>
        </form>

        <div className="mt-10 text-gray-600">
          <p>Phone: +94 777 804 789</p>
          <p>Email: hello@shopline.lk</p>
          <p>WhatsApp: +94 77 4292 736</p>
        </div>
      </section>
    </div>
  );
}
