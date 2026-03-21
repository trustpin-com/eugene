"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Activities", href: "/activity" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export function NavbarSection() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Top Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-zinc-800">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="text-lg font-semibold text-white tracking-wide">
                        Eugene
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={clsx(
                                        "relative group text-sm font-medium transition",
                                        isActive ? "text-white" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    {item.name}

                                    {/* Underline */}
                                    <span
                                        className={clsx(
                                            "absolute left-0 -bottom-1 h-0.5 bg-blue-400 transition-all duration-300",
                                            isActive ? "w-full" : "w-0 group-hover:w-full"
                                        )}
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-zinc-300 hover:text-white transition"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={clsx(
                    "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity",
                    open ? "opacity-100 visible" : "opacity-0 invisible"
                )}
                onClick={() => setOpen(false)}
            />

            {/* Sidenav */}
            <div
                className={clsx(
                    "fixed top-0 right-0 h-full w-64 bg-zinc-900 z-50 transform transition-transform duration-300",
                    open ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
                    <span className="text-white font-semibold">Menu</span>
                    <button onClick={() => setOpen(false)}>
                        <X size={22} className="text-zinc-400 hover:text-white" />
                    </button>
                </div>

                {/* Links */}
                <div className="flex flex-col mt-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={clsx(
                                    "px-6 py-3 text-sm transition border-l-2",
                                    isActive
                                        ? "text-white border-blue-400 bg-zinc-800"
                                        : "text-zinc-400 border-transparent hover:text-white hover:bg-zinc-800"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}