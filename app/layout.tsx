import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteUrl } from "@/data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jung-Oh Lee (이정오), MD, MSc — Radiology AI",
  description:
    "Board-certified radiologist and AI researcher developing clinically grounded AI for medical imaging, with a focus on 3D imaging, foundation models, agentic systems, and rigorous clinical evaluation. NYU Langone Health 영상의학과 전문의·의료 AI 연구자 이정오.",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jung-Oh Lee (이정오), MD, MSc — Radiology AI",
    description:
      "Advancing radiology AI for real clinical impact: 3D imaging, foundation models, agentic systems, and rigorous clinical evaluation.",
    url: "/",
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
