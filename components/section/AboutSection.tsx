import React from "react";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="w-full px-8 py-24 flex flex-col items-center justify-center"
        >
            <div className="max-w-5xl text-center animate-fade-in">
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-zinc-300 mb-6">
                    About Me
                </h2>

                {/* Divider */}
                <div className="w-16 h-px mx-auto mb-8 bg-linear-to-r from-transparent via-zinc-300 to-transparent" />

                {/* Text */}
                <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
                    I am an{" "}
                    <span className="font-semibold text-zinc-300">innovator</span> with a focus on how technology can be used to solve real-world challenges in our society.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;