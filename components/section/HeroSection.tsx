import Image from "next/image";
import Particles from "@/components/ui/Particles";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { UnderlineLink } from "../ui/UnderlineLink";


export default function HeroSection() {
    const appUrl = "https://eugene-ten.vercel.app";
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden bg-linear-to-tl from-black via-zinc-600/20 to-black">
            <div className="my-8 animate-fade-in">
                <div className="flex items-center justify-center gap-4">
                    <div className="w-40 h-40 rounded-full overflow-hidden border border-white/20 shadow-lg">
                        <Image
                            src={"/images/profile.jpg"}
                            alt="Profile"
                            width={160}
                            height={160}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="py-3.5 px-0.5 z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-4xl md:text-6xl whitespace-nowrap bg-clip-text mt-3">
                Eugene Jones
            </h1>

            <OutlineButton href="/portfolio" className="mt-3">
                My Portfolio
            </OutlineButton>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-linear-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-300 ">
                    I'm an{" "}
                    innovator, a software engineer and a problem solver.
                </h2>
                <div className="mt-6 flex items-center justify-center gap-6 animate-fade-in">
                    <UnderlineLink href="/about">
                        About Me
                    </UnderlineLink>

                    <UnderlineLink href="/activity">
                        My Work
                    </UnderlineLink>

                    <UnderlineLink href="/contact">
                        Contacts
                    </UnderlineLink>
                </div>

                {/* QR CODE SECTION */}
                <div className="mt-10 flex flex-col items-center justify-center">
                    <p className="text-xs text-zinc-400 mb-3">
                        Scan to open the app
                    </p>
                    <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(appUrl)}`}
                        alt="QR Code"
                        width={150}
                        height={150}
                        className="rounded-md border border-white/20"
                    />
                </div>
            </div>
        </div>
    );
}
