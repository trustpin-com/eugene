"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface InfoCardProps {
    icon: ReactNode;
    title: string;
    text: string;
    href?: string;
}

export const InfoCard = ({ icon, title, text, href }: InfoCardProps) => {
    const content = (
        <div className="p-6 relative flex flex-col items-center gap-4 duration-500 group">
            {/* vertical line */}
            <span className="absolute w-px h-2/3 bg-linear-to-b from-zinc-500 via-zinc-500/50 to-transparent" />

            {/* icon */}
            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-500 border rounded-full text-zinc-300 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                {icon}
            </span>

            {/* text */}
            <div className="z-10 flex flex-col items-center text-center">
                <span className="text-lg font-medium text-zinc-200 group-hover:text-white font-display">
                    {title}
                </span>

                <span className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200">
                    {text}
                </span>
            </div>
        </div>
    );

    return (
        <div className="border border-zinc-800 rounded-xl bg-zinc-900/40 backdrop-blur-md hover:bg-zinc-900/60 transition">
            {href ? (
                <Link href={href} target="_blank">
                    {content}
                </Link>
            ) : (
                content
            )}
        </div>
    );
};