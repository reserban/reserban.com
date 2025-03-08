import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "Reserban | Solving Startup Problems While Chewing Gum",
    template: "%s | Reserban",
  },
  description:
    "I live and breathe startups and they don't happen by accident. If you need a helping hand or someone to talk to, I've got you.",

  metadataBase: new URL("https://www.reserban.com"),
  keywords: [
    "startup consultant",
    "product design",
    "startup strategy",
    "design and development",
    "startup sidekick",
    "startup problems",
  ],
  authors: [{ name: "Reserban" }],
  creator: "Reserban",
  publisher: "Reserban",

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
    title: "Reserban | Solving Startup Problems While Chewing Gum",
    description:
      "I live and breathe startups and they don't happen by accident. If you need a helping hand or someone to talk to, I've got you.",
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
    title: "Reserban | Solving Startup Problems While Chewing Gum",
    description:
      "I live and breathe startups and they don't happen by accident. If you need a helping hand or someone to talk to, I've got you.",
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
