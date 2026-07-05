import { NextRequest, NextResponse } from "next/server";

import { ContactSchema } from "@/lib/validations/contact";

import { resend } from "@/lib/resend";
import ContactEmail from "@/components/emails/ContactEmail";
import AutoReplyEmail from "@/components/emails/AutoReplayEmail";


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const data = ContactSchema.parse(body);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: process.env.CONTACT_EMAIL!,

      subject: data.subject,

      react: ContactEmail({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    });
    await resend.emails.send({
  from: "alaminahmedariyan2022@gmail.com",

  to: data.email,

  subject: "Thank you for contacting me",

  react: AutoReplyEmail({
    name: data.name,
  }),
});

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}