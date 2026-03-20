"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface NavbarProps {
  heroRef: React.RefObject<HTMLElement | null>;
}

const Navbar = ({ heroRef }: NavbarProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show navbar when Hero is NOT visible
        setShow(!entry.isIntersecting);
      },
      {
        threshold: 0.2, // adjust sensitivity
      }
    );

    observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [heroRef]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-center gap-8 text-sm font-medium text-zinc-700">
        <Link href="/" className="hover:text-black transition">
          Home
        </Link>
        <Link href="#about" className="hover:text-black transition">
          About
        </Link>
        <Link href="#portfolio" className="hover:text-black transition">
          Portfolio
        </Link>
        <Link href="#contact" className="hover:text-black transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;