import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Floating from "../components/pages/floating";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Reserban",
    template: "%s | Reserban",
  },
  description:
    "I'm Serban, a visual & product designer with a real passion for technology and startups.",

  metadataBase: new URL("https://www.reserban.com"),
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Reserban" }],
  creator: "Reserban/Unzet",
  publisher: "Reserban/Unzet",

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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.reserban.com",
    title: "Reserban",
    description:
      "I'm Serban, a visual & product designer with a real passion for technology and startups.",
    siteName: "Reserban",
    images: [
      {
        url: "https://www.reserban.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Serban Standing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserban",
    description:
      "I'm Serban, a visual & product designer with a real passion for technology and startups.",
    creator: "@reserban",
    images: ["https://www.reserban.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} antialiased selection:bg-black selection:text-white`}
      >
        {children}
        <Floating />
      </body>
    </html>
  );
}
