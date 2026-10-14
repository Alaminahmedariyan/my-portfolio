import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const cardVariants = cva('card-base', {
  variants: {
    variant: {
      default: 'p-[var(--card-pad)]',
      panel: 'skill-panel',
      media: 'card-media',
      /* purano naam: shob default-er moto, ager JSX bhangbe na */
      spotlight: 'p-[var(--card-pad)]',
      interactive: 'p-[var(--card-pad)]',
      edge: 'p-[var(--card-pad)]',
      shimmer: 'p-[var(--card-pad)]',
      slide: 'p-[var(--card-pad)]',
      corner: 'p-[var(--card-pad)]',
      glass: 'p-[var(--card-pad)]',
    },
    interactive: {
      true: 'card-fx',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    interactive: true,
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, interactive, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, interactive }), className)} {...props} />;
}

interface SubComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly children?: React.ReactNode;
}

export function CardHeader({ className, children, ...props }: SubComponentProps) {
  return (
    <div className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props}>
      {children}
    </div>
  );
}

interface TitleComponentProps extends React.HTMLAttributes<HTMLHeadingElement> {
  readonly children?: React.ReactNode;
}

export function CardTitle({ className, children, ...props }: TitleComponentProps) {
  return (
    <h3 className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
}

interface DescriptionComponentProps extends React.HTMLAttributes<HTMLParagraphElement> {
  readonly children?: React.ReactNode;
}

export function CardDescription({ className, children, ...props }: DescriptionComponentProps) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }: SubComponentProps) {
  return (
    <div className={cn('pt-0', className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: SubComponentProps) {
  return (
    <div className={cn('flex items-center pt-4', className)} {...props}>
      {children}
    </div>
  );
}