import { Calendar, GraduationCap, School } from 'lucide-react';

import { Container } from '@/components/shared/Container';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionTitle } from '@/components/ui/section-title';
import { Card } from '@/components/ui/Card';
import { educationList } from '@/config/portfolio-data';

export function Education() {
  return (
    <section id="education" className="sec-4 sec-glow relative py-24 md:py-28">
      <Container>
        <SectionTitle
          badge="Education"
          title="Academic Background"
          description="My educational journey and the foundation that shaped my technical career."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute top-0 bottom-0 left-[7px] hidden w-px bg-border md:block" />

          <div className="space-y-10">
            {educationList.map((edu, index) => (
              <FadeIn key={edu.id} delay={index * 0.1} className="relative">
                <div className="absolute top-10 left-0 hidden size-4 rounded-full bg-primary ring-8 ring-[color:var(--sec-4)] md:block" />

                <Card variant="edge" className="p-8 md:ml-12">
                  <div className="icon-box mb-6">
                    <GraduationCap className="size-6" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold tracking-tight">{edu.degree}</h3>
                  <p className="mt-2 font-medium text-primary-text">{edu.major}</p>

                  <div className="mt-5 flex flex-wrap gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <School className="size-4" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      {edu.duration}
                    </div>
                  </div>

                  <p className="mt-6 leading-8 text-muted-foreground">{edu.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
      <div className="sec-line" />
    </section>
  );
}