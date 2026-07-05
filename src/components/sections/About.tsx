'use client';
import { Container } from '@/components/shared/Container';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/ui/section-title';
import { experienceList, educationList } from '@/config/portfolio-data';
import { siteConfig } from '@/config/portfolio-data';
import { Card } from '../ui/Card';

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-24 md:py-32">
      <Container>
        <SectionTitle
          badge="About Me"
          title="My Journey & Background"
          description="A short story about my skills, education and real-world experience."
        />

        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          {/* LEFT SIDE - IMAGE + CARDS */}
          <div className="space-y-6">
            {/* Profile Image Card */}
            <Card className="overflow-hidden p-0">
              <div className="relative h-[420px] w-full">
                <Image
                  src={siteConfig.profileImage2}
                  alt="Profile"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </Card>

            {/* Small Info Cards */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-4 text-center">
                <h3 className="text-primary text-xl font-bold">6+</h3>
                <p className="text-muted-foreground text-xs">Projects</p>
              </Card>

              <Card className="p-4 text-center">
                <h3 className="text-primary text-xl font-bold">20+</h3>
                <p className="text-muted-foreground text-xs">Tech</p>
              </Card>

              <Card className="p-4 text-center">
                <h3 className="text-primary text-xl font-bold">2+</h3>
                <p className="text-muted-foreground text-xs">Years</p>
              </Card>
            </div>
          </div>

          {/* RIGHT SIDE - STORY CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Full Stack Developer & AI Automation Engineer
            </h3>

            <p className="text-muted-foreground leading-7">
              I specialize in building scalable web applications and AI-powered automation systems.
              My focus is on clean architecture, performance optimization, and real-world problem
              solving.
            </p>

            {/* Experience */}
            <div>
              <h4 className="mb-3 text-lg font-semibold">Experience</h4>
              <div className="space-y-3">
                {experienceList.map((exp) => (
                  <div key={exp.id} className="border-primary/30 border-l-2 pl-4">
                    <p className="font-medium">{exp.role}</p>
                    <p className="text-muted-foreground text-sm">
                      {exp.company} • {exp.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="mb-3 text-lg font-semibold">Education</h4>
              {educationList.map((edu) => (
                <div key={edu.id} className="border-primary/30 border-l-2 pl-4">
                  <p className="font-medium">
                    {edu.degree} in {edu.major}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {edu.institution} • {edu.duration}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
