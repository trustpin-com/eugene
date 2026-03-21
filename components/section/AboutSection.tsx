import { InfoCard } from "../card/InfoCard";
import { Briefcase, Code, Lightbulb } from "lucide-react";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="w-full px-8 py-24 flex flex-col items-center justify-center mt-8"
        >
            <div className="max-w-5xl text-center">
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-zinc-300 mb-6">
                    About Me
                </h2>

                {/* Divider */}
                <div className="w-16 h-px mx-auto mb-8 bg-linear-to-r from-transparent via-blue-400 to-transparent" />

                {/* Text */}
                <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
                    I am an{" "}
                    <span className="font-semibold text-zinc-300">innovator</span> with a focus on how technology can be used to solve real-world challenges in our society.
                </p>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <InfoCard
                        icon={<Code size={20} />}
                        title="Software Engineering"
                        text="Building scalable, efficient systems across frontend and backend."
                    />

                    <InfoCard
                        icon={<Lightbulb size={20} />}
                        title="Innovation"
                        text="Designing solutions that solve real-world societal challenges."
                    />

                    <InfoCard
                        icon={<Briefcase size={20} />}
                        title="Professional Work"
                        text="Delivering impactful solutions within the government sector."
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;