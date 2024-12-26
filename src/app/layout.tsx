import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Alex Serban | Visual & Product Designer for Startups",
    template: "%s | Alex Serban",
  },
  description:
    "I'm Alex Serban, a passionate visual and product designer specializing in crafting innovative solutions for startups. Explore my portfolio of creative designs that bring ideas to life.",
  keywords: [
    "Alex Serban",
    "Serban Alex",
    "visual designer",
    "product designer",
    "startup design",
    "UI/UX",
    "portfolio",
  ],
  authors: [{ name: "Alex Serban" }],
  creator: "Alex Serban",
  publisher: "Alex Serban",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reserban.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Serban | Visual & Product Designer for Startups",
    description:
      "Explore my portfolio. I'm Alex Serban, a creative visual and product designer specializing in innovative solutions for startups.",
    url: "https://reserban.com",
    siteName: "Alex Serban Portfolio",
    images: [
      {
        url: "https://reserban.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Serban - Visual & Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Serban | Visual & Product Designer for Startups",
    description:
      "Explore my portfolio. I'm Alex Serban, a creative visual and product designer specializing in innovative solutions for startups.",
    images: ["https://reserban.com/twitter-image.jpg"],
    creator: "@reserban",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
