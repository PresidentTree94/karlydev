"use client";
import { useState } from "react";
import Link from "next/link";
import Page from "@/components/Page";
import Accordian from "@/components/Accordian";

export default function FAQ({ faqData }: { faqData: { faqs: { question: string; answer: string; }[] }; }) {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <Page
      subtitle="Questions & answers"
      title="Frequently Asked Questions"
      paragraph="Everything you might be wondering about the tech, the process, and the fine print."
    >
      <div className="bg-white rounded-2xl px-8 py-3">
        {faqData.faqs?.map((faq: { question: string; answer: string; }, index: number) => (
          <Accordian
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-stone-500 mb-4">Still have a question? I'm happy to answer it directly.</p>
        <Link href="/#contact" className="inline-flex items-center gap-2 bg-stone-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-stone-700 trnasition-colors"><i className="ri-mail-line text-sm"></i>Get in touch</Link>
      </div>
    </Page>
  );
}