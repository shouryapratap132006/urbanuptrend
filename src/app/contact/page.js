'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate sending the message
    console.log('Message sent:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000); // Auto-hide message
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded min-h-[120px]"
              placeholder="Write your message..."
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-700"
          >
            Send Message
          </button>
          {submitted && (
            <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
          )}
        </form>

        {/* Contact Details */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Email</h3>
            <p>support@urbaruptrend.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Address</h3>
            <p>
              Urbaruptrend Pvt. Ltd. <br />
              Tower B, Sector 62, Noida <br />
              Uttar Pradesh, India  201301
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
