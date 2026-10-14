import Link from 'next/link';

import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';

import { Card, cardVariants } from '@/components/ui/Card';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/shared/FadeIn';
import { siteConfig } from '@/config/portfolio-data';
import ContactAvailability from './ContactAvailability';

const strip = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, '');

const links = [
  {
    label: 'Email',
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    value: strip(siteConfig.links.github),
    href: siteConfig.links.github,
    icon: Github,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: strip(siteConfig.links.linkedin),
    href: siteConfig.links.linkedin,
    icon: Linkedin,
    external: true,
  },
];

export default function ContactInfo() {
  return (
    <FadeIn direction="right" className="min-w-0 space-y-6 sm:space-y-8">
      <div>
        <h3 className="font-heading text-2xl font-bold tracking-tight">
          Get in touch
        </h3>

        <p className="mt-4 leading-8 text-muted-foreground">
          I am currently available for freelance work, full-time opportunities,
          AI automation projects and modern Full Stack applications. If you
          have an idea, let us discuss it.
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {links.map(({ label, value, href, icon: Icon, external }) => (
          <Link
            key={label}
            href={href}
            {...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
            className={cn(
              cardVariants(),
              'group flex items-center gap-4 p-4 sm:gap-5 sm:p-5',
            )}
          >
            <div className="icon-box shrink-0">
              <Icon className="size-5" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="section-label">{label}</p>
              <h4 className="mt-1 truncate font-semibold">{value}</h4>
            </div>

            <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-text" />
          </Link>
        ))}

        <Card
          interactive={false}
          className="flex items-center gap-4 p-4 sm:gap-5 sm:p-5"
        >
          <div className="icon-box shrink-0">
            <MapPin className="size-5" />
          </div>

          <div className="min-w-0">
            <p className="section-label">Location</p>
            <h4 className="mt-1 font-semibold">{siteConfig.location}</h4>
          </div>
        </Card>
      </div>

      <ContactAvailability />
    </FadeIn>
  );
}