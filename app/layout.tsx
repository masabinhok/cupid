import type { Metadata } from "next";
import { nunito, playfairDisplay } from "./fonts";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Cupid - Your Match is Just a Swipe Away",
  description: "Find love, connect instantly, and chat with ease. Cupid is your perfect matchmaker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${nunito.variable} ${playfairDisplay.variable} font-nunito antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
