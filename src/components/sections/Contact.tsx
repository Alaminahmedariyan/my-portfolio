import { Container } from '@/components/shared/Container';
import { SectionTitle } from '@/components/ui/section-title';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="sec-2 relative overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute -top-24 -left-24 size-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 size-72 rounded-full bg-primary/10 blur-[120px]" />

      <Container>
        <SectionTitle
          badge="Contact"
          title="Let's Build Something Amazing"
          description="Whether you need a Full Stack Web Application, AI Automation, or want to discuss your next idea, I'd love to hear from you."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[420px_1fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
      <div className="sec-line" />
    </section>
  );
}