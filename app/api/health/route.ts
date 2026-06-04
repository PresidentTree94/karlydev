import { client } from "@/sanity/lib/client"
import { homepageQuery } from "@/sanity/lib/queries";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  let sanityHealthy = false;
  let resendHealthy = false;

  try {
    await client.fetch(homepageQuery);
    sanityHealthy = true;
  } catch (error) {
    console.error("Sanity health check failed: ", error);
    sanityHealthy = false;
  }

  try {
    const response = await resend.emails.get("health-check-ping");
    if (response.error) {
      console.error("Resend health check failed:", response.error);
      resendHealthy = false;
    } else {
      resendHealthy = true;
    }
  } catch (error) {
    console.error("Resend health check failed: ", error);
    resendHealthy = false;
  }

  /*try {
    const response = await resend.domains.list();
    if (response.error) {
      console.error("Resend health check failed:", response.error);
      resendHealthy = false;
    } else {
      resendHealthy = true;
    }
  } catch (error) {
    console.error("Resend health check failed: ", error);
    resendHealthy = false;
  }*/

  const isHealthy = sanityHealthy && resendHealthy;

  return NextResponse.json({ sanityHealthy, resendHealthy, isHealthy, timestamp: Date.now() }, { status: isHealthy ? 200 : 503 });
}