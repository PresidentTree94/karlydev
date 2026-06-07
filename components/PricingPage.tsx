import { client } from "@/sanity/lib/client"
import { pricingQuery } from "@/sanity/lib/queries";
import Pricing from "./Pricing";

export default async function PricingPage() {
  const pricingData = await client.fetch(pricingQuery, {}, { next: { tags: ["pricingpage"] } });
  return (
    <Pricing pricingData={pricingData} />
  );
}