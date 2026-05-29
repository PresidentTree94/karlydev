import { client } from "@/sanity/lib/client"
import { faqQuery } from "@/sanity/lib/queries"
import FAQ from "./FAQ";

export const metadata = {
  title: "karly.dev - FAQ",
  description: "Answers to common questions about work, process, and services on karly.dev.",
  alternates: {
    canonical: "https://karlydev.vercel.app/faq",
  },
  openGraph: {
    title: "karly.dev - FAQ",
    description: "Answers to common questions about work, process, and services on karly.dev.",
    url: "https://karlydev.vercel.app/faq",
  }
};

export default async function FAQPage() {
  const faqData = await client.fetch(faqQuery);
  return (
    <FAQ faqData={faqData} />
  )
}