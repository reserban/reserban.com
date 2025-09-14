import type { Metadata } from "next";
import { Sora, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serban Alex",
  description: "I work alongside leadership teams to cut through complexity and maintain momentum. From automation to research, I help you stay focused on what drives real growth. Speaking fluent 'management,' 'dev' and 'design' to make sure ideas ship faster.",
  keywords: ["strategic support", "leadership consulting", "product translation", "automation", "research", "growth", "management", "development", "design", "complexity", "momentum"],
  authors: [{ name: "Serban Alex" }],
  creator: "Serban Alex",
  publisher: "Serban Alex",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reserban.com",
    title: "Serban Alex",
    description: "I work alongside leadership teams to cut through complexity and maintain momentum. From automation to research, I help you stay focused on what drives real growth.",
    siteName: "Serban Alex",
    images: [
      {
        url: "/profile-reserban.png",
        width: 1200,
        height: 630,
        alt: "Serban Alex",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serban Alex",
    description: "I work alongside leadership teams to cut through complexity and maintain momentum. Speaking fluent 'management,' 'dev' and 'design' to make sure ideas ship faster.",
    images: ["/profile-reserban.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
        <style dangerouslySetInnerHTML={{
          __html: `
            .sib-form-message-panel.hidden { display: none; }
            #sib-container,
            #sib-form-container,
            .sib-form-container,
            .sib-container--large {
              background-color: transparent !important;
            }
          `
        }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Serban Alex",
              "url": "https://reserban.com",
              "image": "https://reserban.com/profile-reserban.png",
              "jobTitle": "Strategic Support & Product Translation Consultant",
              "description": "I work alongside leadership teams to cut through complexity and maintain momentum. From automation to research, I help you stay focused on what drives real growth.",
              "knowsAbout": [
                "Strategic Support",
                "Product Translation",
                "Leadership Consulting",
                "Automation",
                "Research",
                "Growth Strategy",
                "Management",
                "Development",
                "Design"
              ],
              "sameAs": [
                "https://medium.com/@reserban",
                "https://twitter.com/reserban"
              ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://reserban.com"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "Independent Consultant"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Serban Alex - Strategic Support & Product Translation",
              "url": "https://reserban.com",
              "description": "Strategic support for leadership teams. I help cut through complexity, maintain momentum, and translate between management, dev, and design to ship ideas faster.",
              "author": {
                "@type": "Person",
                "name": "Serban Alex"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://reserban.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${geistMono.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-sora), ui-sans-serif, system-ui, sans-serif' }}
      >
        {children}
        <Script
          id="brevo-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
              window.LOCALE = 'en';
              window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
              window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank.";
              window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
              window.translation = {
                common: {
                  selectedList: '{quantity} list selected',
                  selectedLists: '{quantity} lists selected',
                  selectedOption: '{quantity} selected',
                  selectedOptions: '{quantity} selected',
                }
              };
              var AUTOHIDE = Boolean(0);
            `
          }}
        />
        <Script
          src="https://sibforms.com/forms/end-form/build/main.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
