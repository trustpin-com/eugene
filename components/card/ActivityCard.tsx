"use client";

import Image from "next/image";

interface ActivityCardProps {
    title: string;
    institution: string;
    logo: string;
    period: string;
    description: string[];
}

export const ActivityCard = ({
    title,
    institution,
    logo,
    period,
    description,
}: ActivityCardProps) => {
    return (
        <div className="w-full max-w-5xl mx-auto border border-zinc-800 rounded-xl bg-zinc-900/40 backdrop-blur-md p-6 hover:bg-zinc-900/60 transition duration-300">

            {/* Header */}
            <div className="flex items-start gap-4">

                {/* Logo */}
                <div className="w-12 h-12 relative shrink-0 rounded-md overflow-hidden border border-zinc-700 bg-zinc-800">
                    <Image
                        src={logo}
                        alt={institution}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                    />
                </div>

                {/* Title + Institution */}
                <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                        {title}
                    </h3>

                    <p className="text-sm text-zinc-400 mt-1">
                        {institution}
                    </p>
                </div>

                {/* Period */}
                <span className="text-xs md:text-sm text-zinc-500 whitespace-nowrap">
                    {period}
                </span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-800 my-4" />

            {/* Description */}
            <ul className="mt-2 space-y-2 text-sm md:text-base text-zinc-300 leading-relaxed list-disc list-inside">
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};