'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/portfolio-data';
import { Container } from '@/components/shared/Container';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-24 md:min-h-screen md:py-0"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="bg-grid absolute inset-0 -z-10 opacity-40 dark:opacity-30" />

      <Container>
        <div className="grid items-center gap-16 md:min-h-screen lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Availability */}

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-green-500" />

              {siteConfig.availability}
            </div>

            {/* Name */}

            <h1 className="text-foreground text-5xl font-bold leading-tight md:text-7xl">
              {siteConfig.name}
            </h1>

            {/* Title */}

            <h2 className="text-primary text-2xl font-semibold md:text-3xl">
              {siteConfig.title}
            </h2>

            {/* Description */}

            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              {siteConfig.description}
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  document
                    .querySelector('#projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="gap-2 shadow-lg"
              >
                View Projects

                <ArrowRight size={18} />
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  window.open(siteConfig.resume, '_blank')
                }
                className="gap-2 border-border"
              >
                <Download size={18} />

                Download Resume
              </Button>
            </div>

            {/* Social */}

            <div className="flex gap-5 pt-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition hover:text-primary"
              >
                <Github size={24} />
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition hover:text-primary"
              >
                <Linkedin size={24} />
              </a>

              <a
                href={`mailto:${siteConfig.links.email}`}
                aria-label="Email"
                className="text-muted-foreground transition hover:text-primary"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 pt-4">
              {siteConfig.heroStats?.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                  }}
                  className="rounded-2xl border border-border bg-card/70 p-5 text-center shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-primary text-2xl font-bold">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <div className="relative flex justify-center lg:justify-end">
            {/* Glow */}

            <div className="absolute -z-10 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />

            {/* Image */}

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative h-[420px] w-[320px] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
            >
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                fill
                priority
                loading="eager"
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}