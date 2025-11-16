import React from "react";
import { Nav } from "../components";

const ContactPage = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <div className="max-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-600 mb-6">Have questions? Send us a message and we'll get back to you shortly.</p>

              <form className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input className="w-full border border-gray-200 rounded-md p-3" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input className="w-full border border-gray-200 rounded-md p-3" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full border border-gray-200 rounded-md p-3 h-36" placeholder="How can we help?" />
                </div>
                <div>
                  <button className="bg-black text-white px-6 py-3 rounded-md">Send message</button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-pale-blue p-6 rounded-lg">
                <h3 className="font-semibold text-lg">Customer Support</h3>
                <p className="mt-2 text-gray-600">Email: customer@nike.com</p>
                <p className="text-gray-600">Phone: +92554862354</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <h4 className="font-medium">Office</h4>
                <p className="mt-2 text-gray-600">123 Shoe Street, Cityville</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
