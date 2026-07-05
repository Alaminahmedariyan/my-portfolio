/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import { skills } from '@/config/portfolio-data';
import { SectionTitle } from '@/components/ui/section-title';
import {
  siReact,
  siJavascript,
  siNodedotjs,
  siTypescript,
  siNextdotjs,
  siTailwindcss,
  siMongodb,
  siPostgresql,
  siGithub,
  siDocker,
  siGit,
  siRedux,
  siTanstack,
} from 'simple-icons/icons';
import { Container } from '@/components/shared/Container';
import { Card } from '../ui/Card';

const iconMap: Record<string, any> = {
  javascript: siJavascript,
  react: siReact,
  nodejs: siNodedotjs,
  typescript: siTypescript,
  nextjs: siNextdotjs,
  tailwind: siTailwindcss,
  mongodb: siMongodb,
  postgresql: siPostgresql,
  github: siGithub,
  docker: siDocker,
  git: siGit,
  redux: siRedux,
  tanstack: siTanstack,
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const categoryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  const categories = ['Frontend', 'Backend', 'Database', 'AI', 'DevOps'];
  const getIcon = (name: string) => {
    const icon = iconMap[name];

    if (!icon) {
      return null; // missing icon handle
    }

    return (
      <svg role="img" viewBox="0 0 24 24" className="h-5 w-5" fill={`#${icon.hex}`}>
        <path d={icon.path} />
      </svg>
    );
  };

  return (
    <section id="skills" className="py-24 md:py-32">
      <Container>
        <SectionTitle
          badge="Skills"
          title="Technical Skills"
          description="Technologies I use to build scalable applications."
        />

        {/* GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category} className="space-y-4">
              {/* Category Title */}
              <h3 className="text-lg font-semibold">{category}</h3>

              {/* Skills List */}
              <div className="space-y-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div key={skill.name} variants={skillVariants} className="group">
                      <div className="mb-1 flex items-center justify-between">
                        {/* ICON + NAME */}
                        <div className="flex items-center gap-2 text-sm font-medium">
                          {getIcon(skill.iconName)}
                          {skill.name}
                        </div>

                        {/* PERCENT (HIDDEN → SHOW ON HOVER) */}
                        <span className="text-muted-foreground text-xs opacity-0 transition group-hover:opacity-100">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* PROGRESS BAR */}
                      <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                          className="from-primary via-primary/80 to-accent h-full rounded-full bg-gradient-to-r"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
