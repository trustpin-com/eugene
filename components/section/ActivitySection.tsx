"use client";

import { activities } from "@/utils/const";
import { ActivityCard } from "../card/ActivityCard";


const ActivitySection = () => {
    return (
        <section className="w-full px-6 py-24 flex flex-col items-center">

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-6 text-center">
                Activities
            </h2>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-blue-400 to-transparent mb-12" />

            {/* Cards */}
            <div className="flex flex-col gap-6 w-full items-center">
                {activities.map((activity, index) => (
                    <ActivityCard key={index} {...activity} />
                ))}
            </div>
        </section>
    );
};

export default ActivitySection;