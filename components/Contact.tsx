"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {

  const [charCount, setCharCount] = useState(0);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("../app/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent!");
      form.reset();
      setCharCount(0);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder="you@email.com" required />
        </div>
      </div>
      <div>
        <label>Subject</label>
        <input type="text" name="subject" placeholder="What is this about?" required />
      </div>
      <div>
        <label>Tell me about your project</label>
        <textarea name="message" placeholder="What are you building? What's the goal?" rows={5} maxLength={500} className="resize-none" onChange={(e) => setCharCount(e.target.value.length)} required></textarea>
        <p className={`text-xs ${charCount > 480 ? "text-amber-600" : "text-stone-400"} text-right`}>{charCount}/500</p>
      </div>
      <button type="submit" className="text-sm bg-stone-900 text-white w-full font-semibold py-3.5 rounded-xl cursor-pointer transition-colors hover:bg-stone-700">Send Message</button>
    </form>
  );
}