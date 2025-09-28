import React from "react";

const Contact: React.FC = () => (
  <div className="container py-12 max-w-xl">
    <h2 className="text-2xl font-bold">Contact Us</h2>
    <p className="mt-3 text-gray-600">Fill the form and we'll get back to you.</p>
    <form className="mt-6 space-y-4">
      <input className="w-full px-3 py-2 border rounded" placeholder="Name" />
      <input className="w-full px-3 py-2 border rounded" placeholder="Email" />
      <textarea className="w-full px-3 py-2 border rounded" rows={5} placeholder="Message" />
      <button className="px-4 py-2 bg-red-600 text-white rounded">Send</button>
    </form>
  </div>
);

export default Contact;