import * as React from 'react';
import { cn } from '@/lib/utils';
import { FadeIn } from '@/components/shared/FadeIn';

interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd'> {
  readonly title: string;
  readonly subtitle?: string;
  readonly badge?: string;
  readonly align?: 'left' | 'center';
}


export function SectionHeading({
  title,
  subtitle,
  badge,
  align = 'left',
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        'flex flex-col mb-10 md:mb-14 max-w-3xl',
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left',
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-widest text-primary mb-3 border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="text-section-title text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-subtitle">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
