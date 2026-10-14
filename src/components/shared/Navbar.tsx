'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { siteConfig } from '@/config/portfolio-data';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      let current = '';
      document.querySelectorAll<HTMLElement>('section[id]').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) current = section.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          'nav-shell mx-auto flex h-[62px] max-w-6xl items-center justify-between rounded-2xl pr-3 pl-5',
          isScrolled && 'is-scrolled',
        )}
      >
        <Link
          href="/#hero"
          className="nav-logo font-heading text-lg font-extrabold tracking-tighter md:text-xl"
        >
          alaminAhmed<span className="accent-dot" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              className={cn('nav-link', activeSection === item.id && 'is-active')}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={siteConfig.resume}
            download
            className={cn(buttonVariants({ size: 'sm' }), 'hidden md:inline-flex')}
          >
            Resume
            <ArrowUpRight />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle main menu"
            className={cn(buttonVariants({ variant: 'outline', size: 'icon-sm' }), 'md:hidden')}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div className={cn('nav-mobile mx-auto mt-2 max-w-6xl md:hidden', isOpen && 'is-open')}>
        {navItems.map((item) => (
          <a key={item.id} href={`/#${item.id}`} onClick={() => setIsOpen(false)}>
            {item.name}
          </a>
        ))}
        <a href={siteConfig.resume} download onClick={() => setIsOpen(false)}>
          Resume
        </a>
      </div>
    </header>
  );
}