'use client';

import * as React from 'react';
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { siteConfig } from '@/config/portfolio-data';
import { cn } from '@/lib/utils';
import { FadeIn } from './FadeIn';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-background py-12 text-sm text-muted-foreground mt-auto">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Info */}
          <FadeIn delay={0.1} className="flex flex-col space-y-3">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
            <p className="text-xs max-w-xs leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.2} className="flex flex-col space-y-3 md:items-center">
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Navigation
              </span>
              <a href="#about" className="text-xs hover:text-foreground transition-colors">About</a>
              <a href="#skills" className="text-xs hover:text-foreground transition-colors">Skills</a>
              <a href="#projects" className="text-xs hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-xs hover:text-foreground transition-colors">Contact</a>
            </div>
          </FadeIn>

          {/* Connect & Action */}
          <FadeIn delay={0.3} className="flex flex-col space-y-3 md:items-end">
            <div className="flex flex-col space-y-2 md:items-end">
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Connect
              </span>
              <div className="flex items-center space-x-3 mb-2">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors p-1"
                  aria-label="GitHub profile"
                >
                  <Github className="size-4" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors p-1"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="size-4" />
                </a>
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="hover:text-foreground transition-colors p-1"
                  aria-label="Email Alamin"
                >
                  <Mail className="size-4" />
                </a>
              </div>
              <a
                href="/alamin-ahmed-resume.pdf"
                download
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'sm' }),
                  'gap-1 text-xs mt-1 w-full justify-center md:w-auto'
                )}
              >
                Resume
                <ArrowUpRight className="size-3" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={0.4} className="border-t border-border/50 mt-8 pt-8 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground/80">
            &copy; {currentYear} {siteConfig.name}. All rights reserved. Version 1.0.
          </p>
          <button
            onClick={handleScrollToTop}
            className={cn(
              buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
              'size-8 text-muted-foreground hover:text-foreground'
            )}
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </button>
        </FadeIn>
      </Container>
    </footer>
  );
}
