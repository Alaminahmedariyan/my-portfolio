import { Check } from 'lucide-react';

import { Container } from '@/components/shared/Container';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionTitle } from '@/components/ui/section-title';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';
import { experienceList } from '@/config/portfolio-data';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <section id="experience" className="sec-5 relative py-24 md:py-28">
      <Container>
        <SectionTitle
          badge="Experience"
          title="Professional Journey"
          description="My learning and development journey."
        />

        <div className="mx-auto max-w-4xl space-y-10">
          {experienceList.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 0.12} className="relative pl-10">
              {/* timeline */}
              <div
                className={cn(
                  'absolute top-10 left-0 w-0.5 bg-gradient-to-b from-primary/60 to-primary/10',
                  index < experienceList.length - 1 ? 'bottom-[-2.5rem]' : 'bottom-0',
                )}
              />
              <div className="absolute top-8 left-[-7px] size-4 rounded-full bg-primary shadow-[0_0_14px_var(--brand-glow)]" />

              <Card variant="shimmer" className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-tight md:text-2xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 font-medium text-primary-text">{exp.company}</p>
                  </div>
                  <Badge variant="secondary">{exp.duration}</Badge>
                </div>

                <ul className="mt-8 space-y-3">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-primary-text" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
      <div className="sec-line" />
    </section>
  );
}