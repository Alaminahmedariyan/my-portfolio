'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<'div'> {
  readonly direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  readonly delay?: number;
  readonly duration?: number;
}

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
  ...props
}: FadeInProps) {
  const directionOffset = 24;

  const offsets = {
    up: { y: directionOffset },
    down: { y: -directionOffset },
    left: { x: directionOffset },
    right: { x: -directionOffset },
    none: {},
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...offsets[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple/Vercel ease curve
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  delayChildren = 0,
  staggerChildren = 0.1,
  className,
  ...props
}: HTMLMotionProps<'div'> & {
  readonly delayChildren?: number;
  readonly staggerChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-20px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
