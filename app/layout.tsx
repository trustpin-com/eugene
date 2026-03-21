import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavbarWrapper from "@/components/ui/NavbarWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eugene Jones",
    template: "%s | joneseugene.com",
  },
  description: "My personal WebApp",
  openGraph: {
    title: "joneseugeneceo.com",
    description:
      "My personal WebApp",
    url: "joneseugene.com",
    siteName: "joneseugeneceo.com",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")} data-scroll-behavior="smooth">
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}>
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
