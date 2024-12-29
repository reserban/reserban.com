import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reserban | Visual & Product Designer for Startups",
    template: "%s | Reserban",
  },
  description:
    "Explore my portfolio. I'm Serban, a visual & product designer with a real passion for technology and startups",
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
      "Explore my portfolio. I'm Serban, a visual & product designer with a real passion for technology and startups",
    url: "https://reserban.com",
    siteName: "Reserban",
    images: [
      {
        url: "https://reserban.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reserban - Visual & Product Designer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserban | Visual & Product Designer for Startups",
    description:
      "Explore my portfolio. I'm Serban, a visual & product designer with a real passion for technology and startups",
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
