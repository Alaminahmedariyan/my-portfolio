'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  readonly badge?: string;
  readonly title: string;
  readonly description?: string;
  readonly className?: string;
}

export function SectionTitle({ badge, title, description, className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('mx-auto mb-14 max-w-3xl text-center', className)}
    >
      {badge && <span className="section-label">-- {badge}</span>}

      <h2 className="font-heading mt-5 text-4xl font-extrabold tracking-tighter text-foreground md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  );
}