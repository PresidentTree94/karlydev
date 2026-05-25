import { client } from "@/sanity/lib/client"
import { faqQuery } from "@/sanity/lib/queries"
import FAQ from "./FAQ";

export default async function FAQPage() {
  const faqData = await client.fetch(faqQuery);
  return (
    <FAQ faqData={faqData} />
  )
}