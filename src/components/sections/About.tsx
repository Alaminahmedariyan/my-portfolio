import Image from 'next/image';
import { Code2, Sparkles } from 'lucide-react';

import { Container } from '@/components/shared/Container';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionTitle } from '@/components/ui/section-title';
import { Card } from '@/components/ui/Card';
import { educationList, experienceList, siteConfig } from '@/config/portfolio-data';

export function About() {
  const stats = siteConfig.heroStats?.slice(0, 3) ?? [];

  return (
    <section id="about" className="sec-2 relative py-24 md:py-28">
      <Container>
        <SectionTitle
          badge="About Me"
          title="My Journey & Background"
          description="A short story about my skills, education and real-world experience."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT: image + floating badges */}
          <FadeIn direction="right" className="relative">
            <div className="about-visual relative aspect-[4/5]">
              <Image
                src={siteConfig.profileImage2}
                alt={siteConfig.name}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>

            <div className="float-badge top-[8%] left-2 md:-left-5">
              <Code2 className="size-5 text-primary-text" />
              <div>
                <div className="text-sm font-bold">Full Stack</div>
                <div className="text-[11px] text-muted-foreground">Next.js · Node.js</div>
              </div>
            </div>

            <div
              className="float-badge right-2 bottom-[10%] md:-right-5"
              style={{ animationDelay: '-2.4s' }}
            >
              <Sparkles className="size-5 text-primary-text" />
              <div>
                <div className="text-sm font-bold">AI Automation</div>
                <div className="text-[11px] text-muted-foreground">n8n · LangChain</div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT: story */}
          <FadeIn direction="left" className="space-y-8">
            <div>
              <h3 className="font-heading text-2xl font-bold tracking-tight">
                Full Stack Developer & AI Automation Engineer
              </h3>
              <p className="mt-4 leading-8 text-muted-foreground">
                I specialize in building scalable web applications and AI-powered automation
                systems. My focus is on clean architecture, performance optimization, and
                real-world problem solving.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <Card key={stat.label} variant="corner" className="p-4 text-center">
                  <h3 className="font-heading text-2xl font-extrabold text-primary-text">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="section-label mb-4">-- Experience</h4>
              <div className="space-y-4">
                {experienceList.map((exp) => (
                  <div key={exp.id} className="border-l-2 border-primary/40 pl-4">
                    <p className="font-semibold">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} · {exp.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="section-label mb-4">-- Education</h4>
              {educationList.map((edu) => (
                <div key={edu.id} className="border-l-2 border-primary/40 pl-4">
                  <p className="font-semibold">
                    {edu.degree} in {edu.major}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution} · {edu.duration}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
      <div className="sec-line" />
    </section>
  );
}