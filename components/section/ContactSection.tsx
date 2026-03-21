import React from "react";
import { InfoCard } from "../card/InfoCard";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="w-full px-8 py-24 flex flex-col items-center justify-center mt-8"
        >
            <div className="max-w-5xl text-center">
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-6">
                    Contact
                </h2>

                {/* Divider */}
                <div className="w-20 h-0.5 mx-auto mb-8 bg-linear-to-r from-transparent via-blue-400 to-transparent" />

                {/* Text */}
                <p className="text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                    Have a project, collaboration, or idea in mind? I'm always open to
                    discussing how technology can be leveraged to build impactful and
                    scalable solutions. Feel free to reach out through any of the platforms
                    below.
                </p>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        className="group"
                    >
                        <InfoCard
                            icon={<Linkedin size={20} />}
                            title="LinkedIn"
                            text="Connect with me professionally and view my experience."
                        />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        className="group"
                    >
                        <InfoCard
                            icon={<Github size={20} />}
                            title="GitHub"
                            text="Explore my projects, code, and open-source contributions."
                        />
                    </a>

                    {/* Gmail */}
                    <a
                        href="mailto:your-email@gmail.com"
                        className="group"
                    >
                        <InfoCard
                            icon={<Mail size={20} />}
                            title="Email"
                            text="Send me a message directly — I’ll respond as soon as possible."
                        />
                    </a>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;