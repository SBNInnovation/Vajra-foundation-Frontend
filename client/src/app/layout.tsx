import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/providers/providers";
import Head  from "next/head";
import Navbar from "@/shared/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vajra Foundations",
  description: "Vajra Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#fafafa]">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Going Nepal Adventure" />
        <title>Going Nepal Adventure</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa] text-black`}
      >
        <Provider>
          <Navbar/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
