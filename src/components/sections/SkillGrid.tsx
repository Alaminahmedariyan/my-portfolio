'use client';

import * as React from 'react';
import { motion, type Variants } from 'framer-motion';

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function SkillGrid({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children);

  return (
    <motion.ul
      className="skill-list"
      variants={list}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {items.map((child, i) => (
        <motion.li key={i} className="skill-item" variants={item}>
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
}