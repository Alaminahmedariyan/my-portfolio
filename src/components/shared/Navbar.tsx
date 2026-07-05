'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { Container } from '@/components/shared/Container';
import { siteConfig } from '@/config/portfolio-data';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Education', href: '/#education' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active section detection
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 border-border/5 border-b shadow-sm backdrop-blur-xl'
          : 'bg-background/80 backdrop-blur-lg',
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/#hero"
            className="text-foreground text-sm font-medium tracking-tight transition-opacity hover:opacity-80"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'text-muted-foreground hover:text-foreground relative px-3 py-2 text-xs font-medium transition-all',
                  activeSection === item.href.substring(1) && 'text-foreground',
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <span className="bg-primary absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Side Options (Theme Toggle & Action Button) */}
          <div className="hidden items-center space-x-3 md:flex">
            <ThemeToggle />
            <a
              href="/alamin-ahmed-resume.pdf"
              download
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'hover:bg-primary/5 border-border/20 gap-1.5 text-xs',
              )}
            >
              Resume
              <ArrowUpRight className="size-3" />
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon-sm' }),
                'text-muted-foreground size-8 hover:bg-transparent',
              )}
            >
              {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer/Menu Overlay */}
      <div
        className={cn(
          'border-border/10 bg-background/95 fixed inset-x-0 top-16 z-40 flex flex-col space-y-2 border-b p-4 shadow-lg backdrop-blur-xl transition-all duration-300 md:hidden',
          isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0',
        )}
      >
        <nav className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground py-1 text-sm font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="border-border border-t pt-4">
          <a
            href="/alamin-ahmed-resume.pdf"
            download
            onClick={() => setIsOpen(false)}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'flex w-full justify-center gap-1 text-xs',
            )}
          >
            Resume
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </header>
  );
}
