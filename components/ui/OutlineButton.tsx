'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface OutlineButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function OutlineButton({
  href,
  children,
  className,
  animate = true,
}: OutlineButtonProps) {
  return (
    <div className={clsx('z-10', animate && 'animate-fade-in')}>
      <Link
        href={href}
        className={clsx(
          'group relative inline-flex items-center justify-center px-12 py-2 text-sm font-medium text-white transition-all duration-300 border border-white/20 rounded-full backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-white/40',
          className
        )}
      >
        <span className="relative z-10">{children}</span>

        {/* glow */}
        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 blur-md" />
      </Link>
    </div>
  );
}