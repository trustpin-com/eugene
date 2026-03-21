"use client";

import { ReactNode } from "react";

interface SkillCardProps {
    icon: ReactNode;
    title: string;
    items: string[];
    description: string;
}

export const SkillCard = ({
    icon,
    title,
    items,
    description,
}: SkillCardProps) => {
    return (
        <div className="border border-zinc-800 rounded-xl bg-zinc-900/40 backdrop-blur-md p-6 hover:bg-zinc-900/60 transition duration-300">

            {/* Header */}
            <div className="flex items-center gap-3 mb-4 text-blue-400">
                {icon}
                <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                {description}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2">
                {items.map((item, index) => (
                    <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};