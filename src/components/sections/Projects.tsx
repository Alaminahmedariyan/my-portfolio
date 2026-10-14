import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';

import { Container } from '@/components/shared/Container';
import { FadeIn } from '@/components/shared/FadeIn';
import { SectionTitle } from '@/components/ui/section-title';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { projectsList } from '@/config/portfolio-data';
import { cn } from '@/lib/utils';

/* "your-demo.com" / "yourrepo" placeholder link-er button dekhabe na */
const realUrl = (url?: string) => (url && !/your-demo|yourrepo/.test(url) ? url : undefined);

export function Projects() {
  return (
    <section id="projects" className="sec-6 relative py-24 md:py-28">
      <Container>
        <SectionTitle
          badge="Projects"
          title="Featured Projects"
          description="Some of my recent work and real-world applications."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projectsList.map((project, index) => {
            const live = realUrl(project.liveUrl);
            const repo = realUrl(project.githubUrl);
            const techs = project.techStack ?? [];
            const extra = techs.length - 4;

            return (
              <FadeIn key={project.slug} delay={(index % 2) * 0.1} className="h-full">
                <Card variant="media" className="h-full">
                  {/* TOP HALF: photo */}
                  <div className="card-media__img">
                    <Image
                      src={project.thumbnail || '/placeholder.jpg'}
                      alt={project.title}
                      fill
                      priority={project.featured}
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {project.featured && <span className="card-media__tag">Featured</span>}
                  </div>

                  {/* BOTTOM HALF: text */}
                  <div className="card-media__body">
                    <p className="section-label">{project.category}</p>

                    <h3 className="font-heading mt-2 text-2xl font-extrabold tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {techs.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                      {extra > 0 && <Badge variant="secondary">+{extra}</Badge>}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                      <Link
                        href={`/projects/${project.slug}`}
                        className={cn(buttonVariants({ size: 'sm' }))}
                      >
                        View Details
                        <ArrowUpRight />
                      </Link>

                      {live && (
                        <a
                          href={live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(buttonVariants({ variant: 'outline', size: 'sm' }))}
                        >
                          Live Demo
                        </a>
                      )}

                      {repo && (
                        <a
                          href={repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub repository"
                          className={cn(buttonVariants({ variant: 'outline', size: 'icon-sm' }))}
                        >
                          <Github />
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
      <div className="sec-line" />
    </section>
  );
}