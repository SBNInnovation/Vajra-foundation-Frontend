import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/providers/providers";
import Head  from "next/head";
import Navbar from "@/shared/Navbar";
import { Poppins } from 'next/font/google';
import Footer from "@/shared/Footer/Footer";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
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
        className={`${poppins.className} antialiased bg-[#fafafa] text-black`}
      >
        <Provider>
          <Navbar/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
