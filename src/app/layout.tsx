import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "reSerban | Problem Solving While Chewing Pink Gum",
    template: "%s | reSerban",
  },
  description:
    "I help C-suites cut through the noise, stay focused, and move with purpose, while driving growth, product clarity, and momentum.",

  metadataBase: new URL("https://www.reserban.com"),
  keywords: [
    "C-suite consultant",
    "executive problem solving",
    "startup strategy",
    "product clarity",
    "growth acceleration",
    "executive focus",
    "pink gum",
    "startup momentum",
  ],
  authors: [{ name: "reSerban" }],
  creator: "reSerban",
  publisher: "reSerban",

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
    title: "reSerban | Problem Solving While Chewing Pink Gum",
    description:
      "I help C-suites cut through the noise, stay focused, and move with purpose, while driving growth, product clarity, and momentum.",
    siteName: "reSerban",
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
    title: "reSerban | Problem Solving While Chewing Pink Gum",
    description:
      "I help C-suites cut through the noise, stay focused, and move with purpose, while driving growth, product clarity, and momentum.",
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
        className={`${sora.variable} antialiased selection:bg-res-600 bg-white selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
