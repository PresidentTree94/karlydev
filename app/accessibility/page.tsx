export const revalidate = 60;

import { client } from "@/sanity/lib/client"
import { legalQuery } from "@/sanity/lib/queries";
import Page from "@/components/Page";

const websiteTitle = "karly.dev - Accessibility Statement";
const websiteDescription = "karly.dev's accessibility statement.";
const websiteURL = "https://karlydev.vercel.app/accessibility";

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

export default async function Accessibility() {

  const accessibilityData = await client.fetch(legalQuery, { slug: "accessibility" })

  return (
    <Page subtitle="Commitment" legalData={accessibilityData} />
  );
}