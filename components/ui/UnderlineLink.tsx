'use client';

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface UnderlineLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

export function UnderlineLink({ href, children, className }: UnderlineLinkProps) {
    return (
        <Link
            href={href}
            className={clsx(
                "relative text-sm text-zinc-400 transition-colors duration-300 hover:text-white",
                "after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full",
                className
            )}
        >
            {children}
        </Link>
    );
}