"use client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Price } from "@/types/priceType";
import { calculateBuildTotal, calculateMonthlyTotal } from "@/utils/calculations";

export default function Contact({ pricingData, confirmProject, selectedModules }: {
  pricingData: Price;
  confirmProject: boolean;
  selectedModules: Record<string, number | boolean>;
}) {

  const buildModules = pricingData.modules?.filter(item => item.isBuild === true);
  const maintenanceModules = pricingData.modules?.filter(item => item.isBuild === false);

  const receipt = `I have a project for you. Here are the details:

[Details about the project go here]

Here's the quote I built for you:

Base Package: $${pricingData.baseprice}
${buildModules.map((module: any) =>
    Boolean(selectedModules[module.id]) ?
    `${module.title}${(selectedModules[module.id] as number) > 1 ? ` (x${selectedModules[module.id]})` : ""}: $${module.price * (selectedModules[module.id] as number)}\n` : ""
  ).join("")}Total Build Cost: $${calculateBuildTotal(buildModules, selectedModules, pricingData)}

${maintenanceModules.map((module: any) =>
    Boolean(selectedModules[module.id]) ?
    `${module.title}${(selectedModules[module.id] as number) > 1 ? selectedModules[module.id] : ""}: $${module.price * (selectedModules[module.id] as number)}\n` : ""
  ).join("")}Total Monthly Cost: $${calculateMonthlyTotal(maintenanceModules, selectedModules)}`;
  
  const initialMessage = confirmProject ? receipt : "";
  const [message, setMessage] = useState(initialMessage);
  const [charCount, setCharCount] = useState(initialMessage.length);

  useEffect(() => {
    if (confirmProject) {
      setMessage(receipt);
      setCharCount(receipt.length);
    }
  }, [confirmProject, receipt]);

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent!");
      form.reset();
      setMessage("");
      setCharCount(0);
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="you@email.com" required />
        </div>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="What is this about?" required />
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px] w-0 h-0 overflow-hidden">
        <label htmlFor="budget">Budget Range</label>
        <input type="text" id="budget" name="budget" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <label htmlFor="message">Tell me about your project</label>
        <textarea id="message" name="message" placeholder="What are you building? What's the goal?" rows={5} maxLength={500} className="resize-none" value={message} onChange={(e) => {setMessage(e.target.value); setCharCount(e.target.value.length);}} required></textarea>
        <p className={`text-xs ${charCount > 480 ? "text-amber-600" : "text-stone-400"} text-right`}>{charCount}/500</p>
      </div>
      <button type="submit" className="text-sm bg-stone-900 text-white w-full font-semibold py-3.5 rounded-xl cursor-pointer transition-colors hover:bg-stone-700">Send Message</button>
    </form>
  );
}