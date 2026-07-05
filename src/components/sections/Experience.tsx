'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { experienceList } from '@/config/portfolio-data';
import { Container } from '@/components/shared/Container';
import { SectionTitle } from '../ui/section-title';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          badge="Experience"
          title="Professional Journey"
          description="My learning and development journey."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <div className="mt-14 space-y-10">
            {experienceList.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                transition={{ delay: index * 0.15 }}
                className="group relative pl-10"
              >
                {/* Timeline */}

                <div className="bg-primary absolute top-10 left-0 h-full w-[2px]" />

                <div className="bg-primary absolute top-8 left-[-7px] h-4 w-4 rounded-full transition-all duration-300 group-hover:scale-125" />

                {/* Card */}

                <div className="bg-card hover:border-primary/50 rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>

                      <p className="text-primary mt-1 font-medium">{exp.company}</p>
                    </div>

                    <span className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {exp.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-primary">✔</span>

                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="border-primary/20 bg-primary/5 text-primary rounded-full border px-4 py-2 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
