"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/ui/section-title";

import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background Blur */}

      <div className="bg-primary/10 absolute top-0 left-0 h-72 w-72 rounded-full blur-[120px]" />

      <div className="bg-secondary/10 absolute right-0 bottom-0 h-72 w-72 rounded-full blur-[120px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            badge="Contact"
            title="Let's Build Something Amazing"
            description="Whether you need a Full Stack Web Application, AI Automation, or want to discuss your next idea, I'd love to hear from you."
          />
        </motion.div>

        <div className="mt-20 grid items-start gap-12 lg:grid-cols-[420px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}