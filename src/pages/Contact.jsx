import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3vrbpo2",      // replace with your EmailJS service ID
      "template_x2namxn",     // replace with your EmailJS template ID
      e.target,
      "fe6Vrgx4uYqVIXe35"          // replace with your EmailJS user ID (public key)
    )
    .then(
      (result) => {
        alert("Thanks! Your message has been sent.");
        e.target.reset();
      },
      (error) => {
        alert("Oops! Something went wrong, please try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Tell us what you’re looking for. We’ll reply within a business day.
        </p>
        <form
          className="grid sm:grid-cols-2 gap-4 bg-white rounded-3xl border shadow-sm p-6 sm:p-8"
          onSubmit={sendEmail}
        >
          <input name="name" placeholder="Your name" className="rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
          <input name="phone" placeholder="Phone / WhatsApp" className="rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input name="email" type="email" placeholder="Email (optional)" className="sm:col-span-2 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" placeholder="What do you need?" rows={4} className="sm:col-span-2 rounded-2xl border px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
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
