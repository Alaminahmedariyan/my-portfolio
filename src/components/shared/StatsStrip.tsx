'use client';

import * as React from 'react';
import { FadeIn } from '@/components/shared/FadeIn';

interface Stat {
  readonly value: string;
  readonly label: string;
}

function parse(value: string) {
  const match = /^(\d+(?:\.\d+)?)(.*)$/.exec(value);
  if (!match || match[2].includes('/')) return null;
  return { target: parseFloat(match[1]), suffix: match[2], decimals: match[1].includes('.') ? 1 : 0 };
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [text, setText] = React.useState(() => {
    const p = parse(value);
    return p ? `${(0).toFixed(p.decimals)}${p.suffix}` : value;
  });

  React.useEffect(() => {
    const p = parse(value);
    const el = ref.current;
    if (!p || !el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1600, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setText(`${(p.target * eased).toFixed(p.decimals)}${p.suffix}`);
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-num">
      {text}
    </div>
  );
}

export function StatsStrip({ stats }: { stats: readonly Stat[] }) {
  return (
    <FadeIn className="stats-strip grid grid-cols-2 md:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item">
          <AnimatedNumber value={stat.value} />
          <div className="mt-2.5 text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </FadeIn>
  );
}