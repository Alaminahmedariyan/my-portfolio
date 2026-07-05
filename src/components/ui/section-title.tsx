import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  readonly badge?: string;
  readonly title: string;
  readonly description?: string;
  readonly className?: string;
}

export function SectionTitle({
  badge,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'mx-auto mb-16 max-w-3xl text-center',
        className
      )}
    >
      {badge && (
        <span className="bg-primary/10 text-primary inline-flex rounded-full px-4 py-1 text-sm font-medium">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-lg leading-8">
          {description}
        </p>
      )}
    </motion.div>
  );
}