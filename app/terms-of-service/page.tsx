export const revalidate = 60;

import { client } from "@/sanity/lib/client"
import { legalQuery } from "@/sanity/lib/queries";
import Page from "@/components/Page";

const websiteTitle = "karly.dev - Terms of Service";
const websiteDescription = "karly.dev's terms of service.";
const websiteURL = "https://karlydev.vercel.app/terms-of-service";

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

export default async function ToS() {

  const tosData = await client.fetch(legalQuery, { slug: "terms-of-service" });

  return (
    <Page subtitle="Legal" legalData={tosData} />
  );
}