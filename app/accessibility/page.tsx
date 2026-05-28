import { client } from "@/sanity/lib/client"
import { legalQuery } from "@/sanity/lib/queries";
import Page from "@/components/Page";

export const metadata = {
  title: "karly.dev - Accessibility Statement",
  alternates: {
    canonical: "https://karlydev.vercel.app/accessibility",
  }
};

export default async function Accessibility() {

  const accessibilityData = await client.fetch(legalQuery, { slug: "accessibility" })

  return (
    <Page subtitle="Commitment" legalData={accessibilityData} />
  );
}