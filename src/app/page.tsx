import MainHome from "@/components/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vajra Foundation Nepal - Empowering Communities</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Join Vajra Foundation Nepal in creating lasting impact through education, health, and sustainable development in Nepal."
        />
        <meta
          name="keywords"
          content="Vajra Foundation Nepal, vajra, foundation, vajra foundation nepal, education, health, sustainable development, NGO, Nepal"
        />
        <meta name="author" content="Vajra Foundation Nepal" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Vajra Foundation Nepal - Empowering Communities" />
        <meta
          property="og:description"
          content="Join Vajra Foundation Nepal in creating lasting impact through education, health, and sustainable development in Nepal."
        />
        <meta property="og:url" content="https://vajrafoundationnepal.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vajrafoundationnepal.org/path-to-image.jpg" />

        {/* google */}
        <meta name="google-site-verification" content="wdJoyFJtX9xiBSfsVzqqZH1Weu7GrEDDfFKnqOU0zAo" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vajra Foundation Nepal - Empowering Communities" />
        <meta
          name="twitter:description"
          content="Join Vajra Foundation Nepal in creating lasting impact through education, health, and sustainable development in Nepal."
        />
        <meta name="twitter:image" content="https://vajrafoundationnepal.org/path-to-image.jpg" />
        
        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MainHome />
      </main>
    </>
  );
}
