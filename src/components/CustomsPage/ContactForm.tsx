'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS environment variables.");
      setStatus("Service unavailable. Please try again later.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("Message sent successfully! ✅");
      form.current?.reset();
    } catch (error) {
      setStatus("Failed to send message. ❌");
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full bg-inherit px-10 md:px-20 lg:px-40 flex flex-col items-center gap-3 md:gap-6"
    >
      <div className="w-full flex flex-col md:flex-row gap-3 md:gap-6">
        <input
          type="text"
          name="first_name"
          required
          placeholder="First Name:"
          className="w-full md:w-1/2 border-b border-black/30 bg-transparent focus:outline-none focus:border-black/70 p-2"
        />
        <input
          type="text"
          name="last_name"
          required
          placeholder="Last Name:"
          className="w-full md:w-1/2 border-b border-black/30 bg-transparent focus:outline-none focus:border-black/70 p-2"
        />
      </div>

      <input
        type="email"
        name="user_email"
        required
        placeholder="Email:"
        className="w-full border-b border-black/30 bg-transparent focus:outline-none focus:border-black/70 p-2"
      />

      <input
        type="tel"
        name="phone_number"
        required
        placeholder="Phone Number:"
        className="w-full border-b border-black/30 bg-transparent focus:outline-none focus:border-black/70 p-2"
      />

      <input
        type="text"
        name="subject"
        required
        placeholder="Subject:"
        className="w-full border-b border-black/30 bg-transparent focus:outline-none focus:border-black/70 p-2"
      />

      <textarea
        name="message"
        required
        placeholder="Message:"
        className="w-full border-b border-black/30 bg-transparent focus:outline-none focus:border-black/70 p-2 h-24 resize-none"
      ></textarea>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#78634C] text-white py-3 px-8 mt-4 text-sm uppercase tracking-wide transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Submit"}
      </button>

      {status && <p className="mt-2 text-center text-sm text-black/60">{status}</p>}
    </form>
  );
}