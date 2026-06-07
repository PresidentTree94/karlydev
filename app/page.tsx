import { client } from "@/sanity/lib/client"
import { homepageQuery, pricingQuery } from "@/sanity/lib/queries";
import HomePage from "@/components/Home";

export default async function Home() {
  const heroData = await client.fetch(homepageQuery, {}, { next: { tags: ["homepage"] } });
  const pricingData = await client.fetch(pricingQuery, {}, { next: { tags: ["pricingpage"] } });

  return (
    <HomePage heroData={heroData} pricingData={pricingData} />
  );
}
