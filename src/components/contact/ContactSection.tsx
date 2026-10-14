'use client';

import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/ui/section-title";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="sec-6 relative py-16 md:py-24 lg:py-32"
    >
      <Container>

        <SectionTitle
          badge="Contact"
          title="Let's Build Something Amazing Together"
          description="I'm currently available for Full Stack Development, AI Automation, Freelance Projects and Remote Opportunities."
        />

        <div className="mt-10 grid gap-8 md:mt-16 lg:grid-cols-2 lg:gap-12">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
      <div className="sec-line" />
    </section>
  );
}