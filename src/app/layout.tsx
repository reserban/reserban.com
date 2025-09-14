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
  description: "A hardware prototype of efficiency: does more with less. Runs on curiosity and selective focus. Optimized for high-output bursts, minimal effort, and maximum creativity.",
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
