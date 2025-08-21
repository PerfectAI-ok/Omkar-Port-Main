// components/ContactSectionGreen.js

'use client'
import React from "react";
// import { MailIcon, SparklesIcon } from "@heroicons/react/outline";

export const ContactSectionGreen=()=> {
  async function handleSubmit(e) {
        e.preventDefault();
        alert("Thank you for your message! Will Connect with ASAP.");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "d5c04562-2ce8-4ea3-88bc-397a248a1cfc",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }
  return (
    <section className="bg-neutral-900 text-gray-100 border border-green-400 rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6">
        
        {/* Left column: form */}
        <div className="space-y-6">
          <button className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium transition">
            {/* <MailIcon className="w-5 h-5 text-green-200" /> */}
            <span className="text-4xl font-semibold bg-gradient-to-l from-lime-400 to-green-600 bg-clip-text text-transparent">Get In Touch</span>
          </button>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="text-gray-300">
              Have questions or feedback? We’d love to hear from you. Our team is here to help.
            </p>
          </div>

          <form
            // name="contact"
            method="POST"
            // data-netlify="true"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="bg-neutral-800 placeholder-gray-500 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="bg-neutral-800 placeholder-gray-500 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="you@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="bg-neutral-800  placeholder-gray-500 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className=" border border-gray-200 w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-l from-lime-400 to-green-600 rounded-full font-semibold transition"
            >
              <span>Send Message</span>
              {/* <MailIcon className="w-5 h-5 text-green-100" /> */}
            </button>
          </form>
        </div>

        {/* Right column: community card */}
        <div className="flex items-center justify-center ">
          <div className="bg-neutral-900/30 p-8 border border-neutral-200 rounded-2xl shadow-lg space-y-4 max-w-sm">
            <div className="flex justify-center">
              {/* <SparklesIcon className="w-10 h-10 text-green-400" /> */}
            </div>
            <h3 className="text-2xl font-bold text-center">Connect with me</h3>
            <p className="text-gray-300 text-center">
              Follow me on social media to stay updated on the latest features and improvements.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex items-center px-5 py-2 bg-green-700 hover:bg-green-600 rounded-full text-sm font-medium transition">
                Connect Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
