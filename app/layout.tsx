import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jung-Oh Lee, MD, MSc — Radiology AI",
  description:
    "Board-certified radiologist and AI researcher developing clinically grounded AI for medical imaging, with a focus on 3D imaging, foundation models, agentic systems, and rigorous clinical evaluation.",
  metadataBase: new URL("https://jolee.me"),
  openGraph: {
    title: "Jung-Oh Lee, MD, MSc — Radiology AI",
    description:
      "Advancing radiology AI for real clinical impact: 3D imaging, foundation models, agentic systems, and rigorous clinical evaluation.",
    url: "https://jolee.me",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
