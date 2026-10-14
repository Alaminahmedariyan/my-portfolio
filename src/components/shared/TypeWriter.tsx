'use client';

import { useEffect, useState } from 'react';

interface TypeWriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

export function TypeWriter({
  words,
  typingSpeed = 85,
  deletingSpeed = 45,
  pause = 1500,
  className,
}: TypeWriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  /* The longest word is rendered invisibly to reserve its exact height,
     so the layout never jumps when the typed text wraps to a second line. */
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '');

  useEffect(() => {
    if (words.length === 0) return;

    const current = words[index % words.length] ?? '';
    let delay = deleting ? deletingSpeed : typingSpeed;
    if (!deleting && text === current) delay = pause;
    if (deleting && text === '') delay = 350;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) {
          setDeleting(true);
        } else {
          setText(current.slice(0, text.length + 1));
        }
      } else if (text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(current.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="relative block">
      <span aria-hidden="true" className="invisible block">
        {longest}
        <span className="type-cursor" />
      </span>
      <span className="absolute inset-0 block">
        <span className="sr-only">{words[0]}</span>
        <span aria-hidden="true" className={className}>
          {text}
        </span>
        <span aria-hidden="true" className="type-cursor" />
      </span>
    </span>
  );
}