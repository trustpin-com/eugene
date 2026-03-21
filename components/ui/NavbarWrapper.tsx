"use client";

import { usePathname } from "next/navigation";
import { NavbarSection } from "../section/NavbarSection";

export default function NavbarWrapper() {
  const pathname = usePathname();

  // Hide navbar on homepage
  if (pathname === "/") return null;

  return <NavbarSection />;
}