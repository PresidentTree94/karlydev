import { client } from "@/sanity/lib/client"
import { legalQuery } from "@/sanity/lib/queries";
import Page from "@/components/Page";

const websiteTitle = "karly.dev - Privacy Policy";
const websiteDescription = "karly.dev's privacy policy.";
const websiteURL = "https://karlydev.vercel.app/privacy-policy";

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

export default async function Privacy() {

  const privacyData = await client.fetch(legalQuery, { slug: "privacy-policy" });

  return (
    <Page subtitle="Legal" legalData={privacyData} />
  );
}