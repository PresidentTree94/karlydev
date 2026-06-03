import { client } from "@/sanity/lib/client";

export async function GET() {
  try {
    await client.fetch(`*[_type == "homepage"][0]{_id}`);
    return Response.json({ ok: true });
  } catch (error: any) {
    return Response.json({ ok: false, error: error.message ?? "Sanity health check failed" }, { status: 500 });
  }
}