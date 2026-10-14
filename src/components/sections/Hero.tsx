import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Atom,
  Code2,
  Download,
  Github,
  Hand,
  Leaf,
  Linkedin,
  Mail,
  Server,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/shared/Container';
import { FadeIn } from '@/components/shared/FadeIn';
import { StatsStrip } from '@/components/shared/StatsStrip';
import { TypeWriter } from '@/components/shared/TypeWriter';
import { siteConfig } from '@/config/portfolio-data';
import { cn } from '@/lib/utils';

const socials = [
  { label: 'GitHub', href: siteConfig.links.github, icon: Github },
  { label: 'LinkedIn', href: siteConfig.links.linkedin, icon: Linkedin },
  { label: 'Email', href: `mailto:${siteConfig.links.email}`, icon: Mail },
];

/* Big faded word behind the hero */
const backgroundWord = 'DEVELOPER';

/* Words typed one by one under the headline (add more to cycle through them) */
const typedWords = [siteConfig.title];

/* Shown inside the small code card */
const codeStack = ['MERN', 'Next.js', 'Tailwind'];

/* Icons that orbit around the photo (angle is in degrees, clockwise from the right) */
const orbitItems = [
  { icon: Code2, angle: -125, ring: 'outer' },
  { icon: Leaf, angle: -35, ring: 'outer' },
  { icon: Server, angle: 40, ring: 'outer' },
  { icon: Atom, angle: 160, ring: 'outer' },
] as const;

export function Hero() {
  return (
    <>
      <section id="hero" className="sec-1 relative overflow-hidden pt-8 pb-20 md:pt-12">
        <span aria-hidden="true" className="hero-bgword">
          {backgroundWord}
        </span>

        <Container>
          <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            {/* ───────── Left: text ───────── */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <FadeIn delay={0.08}>
                <div className="hero-greet">
                  <Hand className="size-5 text-primary-text" aria-hidden="true" />
                  <span>
                    Hey! I am <span className="hero-accent font-semibold uppercase">{siteConfig.name}</span>
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={0.14}>
                <h1 className="mt-8 text-4xl leading-[1.12] font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                  I code <span className="hero-accent pr-2 italic">scalable</span> ideas
                  <br />
                  into <span className="hero-accent">real world</span>
                  <br />
                  <span className="hero-accent">solutions.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="mt-7 min-h-8 font-mono text-xl sm:text-2xl">
                  <TypeWriter words={typedWords} className="hero-accent" />
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                  {siteConfig.description}
                </p>
              </FadeIn>

              <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Link
                  href="#projects"
                  className={cn(buttonVariants({ size: 'lg' }), 'tracking-wide uppercase')}
                >
                  View Projects
                  <ArrowRight />
                </Link>
                <a
                  href={siteConfig.resume}
                  download
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'lg' }),
                    'tracking-wide uppercase',
                  )}
                >
                  Download Resume
                  <Download />
                </a>
              </FadeIn>

              <FadeIn delay={0.35} className="mt-8 flex gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={buttonVariants({ variant: 'outline', size: 'icon' })}
                  >
                    <Icon />
                  </a>
                ))}
              </FadeIn>
            </div>

            {/* ───────── Right: photo, rings, orbiting icons, code card ───────── */}
            <FadeIn delay={0.15} className="justify-self-center lg:justify-self-end lg:-translate-y-1">
              <div className="hero-visual">
                <div className="hero-glow" />

                <div className="hero-ring hero-ring--outer" />
                <div className="hero-ring hero-ring--inner" />

                <div className="hero-orbit" aria-hidden="true">
                  {orbitItems.map(({ icon: Icon, angle, ring }) => (
                    <div
                      key={angle}
                      className="hero-orbit-item"
                      style={
                        {
                          '--a': `${angle}deg`,
                          '--r': ring === 'outer' ? 'var(--r-outer)' : 'var(--r-inner)',
                        } as CSSProperties
                      }
                    >
                      <span className="hero-orbit-badge">
                        <Icon className="size-5" />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="hero-portrait">
                  <Image
                    src={siteConfig.profileImage}
                    alt={siteConfig.name}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-contain object-bottom"
                  />
                </div>

                <div className="hero-code" aria-hidden="true">
                  <span className="hero-code-dot" />
                  <p className="mb-2 text-[11px] text-muted-foreground">code</p>
                  <div>
                    <span className="text-primary-text">const</span>{' '}
                    <span className="text-foreground">developer</span> = {'{'}
                  </div>
                  <div className="pl-3">
                    name: <span className="text-primary-text">&quot;{siteConfig.name}&quot;</span>,
                  </div>
                  <div className="pl-3">
                    stack: [
                    <span className="text-primary-text">
                      {codeStack.map((item) => `"${item}"`).join(', ')}
                    </span>
                    ],
                  </div>
                  <div className="pl-3">
                    profession:{' '}
                    <span className="text-primary-text">&quot;{siteConfig.title}&quot;</span>,
                  </div>
                  <div className="pl-3">
                    available: <span className="text-primary-text">true</span>
                  </div>
                  <div>{'};'}</div>
                  <div className="hero-code-foot">
                    <Code2 className="size-3.5" />
                    <span>Clean Code • Scalable • Efficient</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
        <div className="sec-line" />
      </section>

      <section className="sec-1 relative py-16">
        <Container>
          <StatsStrip stats={siteConfig.heroStats ?? []} />
        </Container>
        <div className="sec-line" />
      </section>
    </>
  );
}