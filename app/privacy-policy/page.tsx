import { client } from "@/sanity/lib/client"
import { legalQuery } from "@/sanity/lib/queries";
import Page from "@/components/Page";

export const metadata = {
  title: "karly.dev - Privacy Policy",
  alternates: {
    canonical: "https://karlydev.vercel.app/privacy-policy",
  }
};

export default async function Privacy() {

  const privacyData = await client.fetch(legalQuery, { slug: "privacy-policy" });

  return (
    <Page subtitle="Legal" legalData={privacyData} />
  );
}