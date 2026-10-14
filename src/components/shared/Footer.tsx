'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { siteConfig } from '@/config/portfolio-data';
import { cn } from '@/lib/utils';

const links = ['about', 'skills', 'projects', 'contact'];

const socials = [
  { label: 'GitHub', href: siteConfig.links.github, icon: Github },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${siteConfig.links.email}`, icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sec-footer relative mt-auto border-t border-border py-14">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/#hero" className="nav-logo font-heading text-lg font-extrabold tracking-tighter">
            alaminAhmed<span className="accent-dot" />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm">
            {links.map((id) => (
              <a
                key={id}
                href={`/#${id}`}
                className="text-muted-foreground capitalize transition-colors hover:text-primary-text"
              >
                {id}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className={buttonVariants({ variant: 'outline', size: 'icon-sm' })}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }))}
            aria-label="Back to top"
          >
            <ArrowUp />
          </button>
        </div>
      </Container>
    </footer>
  );
}