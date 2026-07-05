"use client";

import { motion } from "framer-motion";

import { GraduationCap, Calendar, School } from "lucide-react";

import { educationList } from "@/config/portfolio-data";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/ui/section-title";

export function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background */}

      <div className="bg-primary/10 absolute left-0 top-20 h-64 w-64 rounded-full blur-[120px]" />

      <Container>
        <SectionTitle
          badge="Education"
          title="Academic Background"
          description="My educational journey and the foundation that shaped my technical career."
        />

        <div className="mx-auto mt-20 max-w-5xl">

          <div className="absolute left-6 hidden h-full w-px bg-border md:block" />

          <div className="space-y-10">

            {educationList.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative"
              >
                {/* Timeline Dot */}

                <div className="bg-primary absolute left-0 top-10 hidden h-4 w-4 rounded-full ring-8 ring-background md:block" />

                <div className="rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:ml-12">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <GraduationCap className="text-primary h-7 w-7" />
                  </div>

                  <h3 className="text-2xl font-bold">
                    {edu.degree}
                  </h3>

                  <p className="text-primary mt-2 font-medium">
                    {edu.major}
                  </p>

                  <div className="text-muted-foreground mt-5 flex flex-wrap gap-6 text-sm">

                    <div className="flex items-center gap-2">
                      <School className="h-4 w-4" />
                      {edu.institution}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {edu.duration}
                    </div>

                  </div>

                  <p className="text-muted-foreground mt-6 leading-8">
                    {edu.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}