import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await req.json();

    if (!firstName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #161616; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #505050; font-weight: 600; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #161616;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #505050; font-weight: 600;">Email</td>
              <td style="padding: 8px 0; color: #161616;"><a href="mailto:${email}" style="color: #2020d3;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #505050; font-weight: 600;">Phone</td>
              <td style="padding: 8px 0; color: #161616;">${phone || "-"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #505050; font-weight: 600;">Subject</td>
              <td style="padding: 8px 0; color: #161616;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #505050; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #161616; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="margin: 24px 0; border: none; border-top: 1px solid #dcdcdc;" />
          <p style="color: #8b8b8b; font-size: 13px;">Sent via Artic Analytica contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
