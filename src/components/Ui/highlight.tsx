'use client';
import { cn } from '@/lib/utils';

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-emerald-200 text-white px-1 py-0.5 rounded-lg',
        className
      )}
    >
      {children}
    </span>
  );
};
