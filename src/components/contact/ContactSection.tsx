'use client';

import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/ui/section-title";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
    >
      <Container>

        <SectionTitle
          badge="Contact"
          title="Let's Build Something Amazing Together"
          description="I'm currently available for Full Stack Development, AI Automation, Freelance Projects and Remote Opportunities."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
}