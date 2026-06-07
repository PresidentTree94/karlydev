import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  console.log('auth header:', req.headers.get("authorization"));
  console.log('expected:', `Bearer ${process.env.SANITY_REVALIDATE_SECRET}`);
  
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.SANITY_REVALIDATE_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    revalidateTag(body._type, "max");
    return NextResponse.json({ revalidated: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Revalidation failed" }, { status: 500 });
  }
}