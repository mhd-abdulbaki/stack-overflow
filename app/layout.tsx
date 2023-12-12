// @Core
import { ReactNode } from "react";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
// #Types
import type { Metadata } from "next";

// @Dev
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { RootProvider } from "@/lib/providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metaData: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collabrate with developers from around the world. Explore topics in web development,, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
