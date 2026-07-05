import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  readonly id: string;
  readonly as?: React.ElementType;
  readonly children?: React.ReactNode;
}


export function SectionWrapper({
  id,
  as: Component = 'section',
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={cn('py-16 md:py-24 outline-none scroll-mt-20', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
