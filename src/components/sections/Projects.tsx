'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { projectsList } from '@/config/portfolio-data';
import { Container } from '@/components/shared/Container';
import { SectionTitle } from '../ui/section-title';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          badge="Projects"
          title="Featured Projects"
          description="Some of my recent work and real-world applications."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projectsList.map((project) => (
              <motion.div
                key={project.slug}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[540px] overflow-hidden rounded-3xl border bg-card shadow-lg"
              >
                {/* Background Image */}

                <Image
                  src={project.thumbnail || '/placeholder.jpg'}
                  alt={project.title}
                  fill
                  priority={project.featured}
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}

                <div className="absolute inset-0 bg-black/25" />

                {/* Bottom Gradient */}

                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/80 to-transparent" />

                {/* Featured */}

                {project.featured && (
                  <span className="absolute left-5 top-5 z-20 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    Featured
                  </span>
                )}

                {/* Content */}

                <div className="absolute bottom-0 z-20 w-full p-6 text-white">
                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-white/80">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack?.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-white px-5 py-2 font-semibold text-black transition hover:scale-105"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/40 bg-white/10 px-5 py-2 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                      >
                        GitHub
                      </a>
                    )}

                    <Link
                      href={`/projects/${project.slug}`}
                      className="rounded-xl border border-white/40 bg-white/10 px-5 py-2 font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                    >
                      View Details →
                    </Link>
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