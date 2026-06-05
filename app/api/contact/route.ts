import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const budget = formData.get("budget");
    if (budget && budget.toString().trim() !== "") {
      return Response.json({ success: true });
    }

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const subject = formData.get("subject")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "karly.dev <onboarding@resend.dev>",
      to: "karlysams1218@gmail.com",
      subject,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error: any) {
    console.error("Contact form error: ", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
