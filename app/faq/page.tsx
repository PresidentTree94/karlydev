export const revalidate = 60;

import { client } from "@/sanity/lib/client"
import { faqQuery } from "@/sanity/lib/queries"
import FAQ from "./FAQ";

const websiteTitle = "karly.dev - FAQ";
const websiteDescription = "Answers to common questions about work, process, and services on karly.dev.";
const websiteURL = "https://karlydev.vercel.app/faq";

export const metadata = {
  title: websiteTitle,
  description: websiteDescription,
  alternates: {
    canonical: websiteURL,
  },
  openGraph: {
    title: websiteTitle,
    description: websiteDescription,
    url: websiteURL
  },
  twitter: {
    title: websiteTitle,
    description: websiteDescription,
  }
};

export default async function FAQPage() {
  const faqData = await client.fetch(faqQuery);
  return (
    <FAQ faqData={faqData} />
  )
}