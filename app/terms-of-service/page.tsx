import { client } from "@/sanity/lib/client"
import { legalQuery } from "@/sanity/lib/queries";
import Page from "@/components/Page";

export const metadata = {
  title: "karly.dev - Terms of Service",
  description: "karly.dev's terms of service.",
  alternates: {
    canonical: "https://karlydev.vercel.app/terms-of-service",
  }
};

export default async function ToS() {

  const tosData = await client.fetch(legalQuery, { slug: "terms-of-service" });

  return (
    <Page subtitle="Legal" legalData={tosData} />
  );
}