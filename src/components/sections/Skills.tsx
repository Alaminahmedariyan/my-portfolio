import type { CSSProperties } from 'react';
import { Bot, Code2, Link2, Sparkles, Workflow, type LucideIcon } from 'lucide-react';
import type { SimpleIcon } from 'simple-icons';
import * as simpleIcons from 'simple-icons/icons';

import { Container } from '@/components/shared/Container';
import { FadeIn } from '@/components/shared/FadeIn';
import { SkillGrid } from '@/components/sections/SkillGrid';
import { skills } from '@/config/portfolio-data';
import { cn } from '@/lib/utils';

const brandIcons = simpleIcons as unknown as Record<string, SimpleIcon | undefined>;

interface IconSpec {
  keys?: string[];
  fallback: LucideIcon;
}

const iconSpecs: Record<string, IconSpec> = {
  javascript: { keys: ['siJavascript'], fallback: Code2 },
  typescript: { keys: ['siTypescript'], fallback: Code2 },
  react: { keys: ['siReact'], fallback: Code2 },
  nextjs: { keys: ['siNextdotjs'], fallback: Code2 },
  tailwind: { keys: ['siTailwindcss'], fallback: Code2 },
  redux: { keys: ['siRedux'], fallback: Code2 },
  query: { keys: ['siReactquery', 'siTanstack'], fallback: Code2 },
  nodejs: { keys: ['siNodedotjs'], fallback: Code2 },
  express: { keys: ['siExpress'], fallback: Code2 },
  prisma: { keys: ['siPrisma'], fallback: Code2 },
  socket: { keys: ['siSocketdotio'], fallback: Code2 },
  postgresql: { keys: ['siPostgresql'], fallback: Code2 },
  mongodb: { keys: ['siMongodb'], fallback: Code2 },
  openai: { keys: ['siOpenai'], fallback: Bot },
  langchain: { keys: ['siLangchain'], fallback: Link2 },
  langflow: { fallback: Workflow },
  n8n: { keys: ['siN8n'], fallback: Workflow },
  prompt: { fallback: Sparkles },
  docker: { keys: ['siDocker'], fallback: Code2 },
  git: { keys: ['siGit'], fallback: Code2 },
  github: { keys: ['siGithub'], fallback: Code2 },
  linux: { keys: ['siLinux'], fallback: Code2 },
};

const categories = [
  { name: 'Frontend', hint: '// what the user sees' },
  { name: 'Backend', hint: '// what runs under the hood' },
  { name: 'Database', hint: '// where the data lives' },
  { name: 'AI', hint: '// automation & intelligence' },
  { name: 'DevOps', hint: '// ship it to the world' },
];

const languages = [
  { script: 'বাংলা', lang: 'bn', name: 'Bangla', level: 'Native', isNative: true },
  { script: 'English', lang: 'en', name: 'English', level: 'Elementary', isNative: false },
];

function isDarkHex(hex: string) {
  const n = parseInt(hex, 16);
  const r = n >> 16;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b < 70;
}

function SkillIcon({ iconName }: { iconName: string }) {
  const spec = iconSpecs[iconName];
  const brand = spec?.keys?.map((key) => brandIcons[key]).find(Boolean);

  if (brand) {
    const dark = isDarkHex(brand.hex);

    return (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className={dark ? 'text-foreground' : undefined}
        fill={dark ? 'currentColor' : `#${brand.hex}`}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = spec?.fallback ?? Sparkles;
  return <Fallback aria-hidden strokeWidth={1.5} className="text-primary-text" />;
}

/* Left: title + hint + count, then the vertical line (icons come right after it) */
function PanelHead({ name, hint, count }: { name: string; hint: string; count: number }) {
  return (
    <>
      <span className="skill-dots" aria-hidden />

      <header className="skill-head">
        <div>
          <h3 className="skill-title">
            <span className="skill-dot" />
            {name}
          </h3>
          <p className="skill-hint">{hint}</p>
        </div>
        <span className="skill-count" aria-hidden>
          {String(count).padStart(2, '0')}
        </span>
      </header>

      <div className="skill-divider" aria-hidden />
    </>
  );
}

export function Skills() {
  return (
    <section id="skills" className="sec-3 sec-glow relative py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <FadeIn>
            <div className="mb-8 flex items-center gap-4">
              <span className="section-label whitespace-nowrap !text-primary-text">
                {'>_ SKILLS.STACK'}
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
            </div>

            <h2 className="font-heading text-4xl font-extrabold tracking-tighter md:text-5xl">
              Technology &amp; <span className="text-primary-text">Skills</span>
            </h2>
            <p className="font-heading mt-4 text-sm text-muted-foreground">
              {'// my current skill set — always expanding'}
            </p>
          </FadeIn>

          {/* Panels */}
          <div className="mt-10 space-y-4">
            {categories.map(({ name, hint }, i) => {
              const items = skills.filter((skill) => skill.category === name);
              if (!items.length) return null;

              return (
                <FadeIn key={name} delay={i * 0.06}>
                  <article
                    className="card-base card-spotlight skill-panel"
                    style={{ '--cat': `var(--gh-${(i % 6) + 1})` } as CSSProperties}
                  >
                    <PanelHead name={name} hint={hint} count={items.length} />

                    <SkillGrid>
                      {items.map((skill) => (
                        <div key={skill.name} className="skill-cell">
                          <span className="skill-icon">
                            <SkillIcon iconName={skill.iconName} />
                          </span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      ))}
                    </SkillGrid>
                  </article>
                </FadeIn>
              );
            })}

            {/* Languages */}
            <FadeIn delay={categories.length * 0.06}>
              <article
                className="card-base card-spotlight skill-panel"
                style={{ '--cat': 'var(--gh-3)' } as CSSProperties}
              >
                <PanelHead name="Languages" hint="// 2 languages, many stories" count={languages.length} />

                <ul className="lang-list">
                  {languages.map(({ script, lang, name, level, isNative }) => (
                    <li key={name} className="lang-tile">
                      <p lang={lang} className="lang-script">
                        {script}
                      </p>
                      <p className="lang-name">({name})</p>
                      <span className={cn('lang-badge', isNative && 'is-native')}>{level}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          </div>
        </div>
      </Container>
      <div className="sec-line" />
    </section>
  );
}