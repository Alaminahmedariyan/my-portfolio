import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-xl border text-card-foreground shadow-xs transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'border-border bg-card p-6',
        interactive:
          'border-border bg-card p-6 hover:scale-[1.01] hover:shadow-md hover:border-muted-foreground/30 hover:bg-muted/10',
        glass:
          'border-border/40 bg-card/60 p-6 backdrop-blur-md hover:border-border/80 hover:bg-card/85',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant, className }))} {...props} />;
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

