"use client";

import { SkillCard } from "../card/SkillCard";
import { Server, Code2, Wrench } from "lucide-react";

const PortfolioSection = () => {
    return (
        <section className="w-full px-6 py-24 flex flex-col items-center">

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-6 text-center">
                Portfolio
            </h2>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-blue-400 to-transparent mb-12" />

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">

                {/* Backend */}
                <SkillCard
                    icon={<Server size={22} />}
                    title="Backend Development"
                    description="Building secure, scalable, and high-performance backend systems."
                    items={[
                        "C#",
                        ".NET Core",
                        "Node.js",
                        "Express",
                        "Python",
                        "Fast API",
                        "Django",
                        "REST APIs",
                        "SQL Server",
                        "PostgreSQL",
                        "Mongo DB",
                        "Supabase",
                    ]}
                />

                {/* Frontend */}
                <SkillCard
                    icon={<Code2 size={22} />}
                    title="Frontend Development"
                    description="Creating responsive and interactive user interfaces."
                    items={[
                        "React",
                        "React Native (Expo)",
                        "Next.js",
                        "Angular",
                        "Flutter",
                        "TypeScript",
                        "Tailwind CSS",
                        "JavaScript",
                        "Figma",
                    ]}
                />

                {/* Tools */}
                <SkillCard
                    icon={<Wrench size={22} />}
                    title="Tools & DevOps"
                    description="Tools and practices used to streamline development and deployment."
                    items={[
                        "Git",
                        "GitHub",
                        "Postman",
                        "Insomnia",
                        "Huly",
                        "CI/CD",
                        "VS Code",
                    ]}
                />

            </div>
        </section>
    );
};

export default PortfolioSection;