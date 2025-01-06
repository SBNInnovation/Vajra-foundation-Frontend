import MainHome from "@/components/Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vajra Foundation Nepal - Leading NGO for Community Empowerment</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Vajra Foundation Nepal is the leading NGO empowering communities in Nepal through education, health, and sustainable development. Join us in creating lasting impact!" />
        <meta name="keywords" content="NGO Nepal, Vajra Foundation Nepal, community development, education, health, sustainable development, Nepal NGOs" />
        <meta name="author" content="Vajra Foundation Nepal" />
        <meta name="robots" content="index, follow" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="wdJoyFJtX9xiBSfsVzqqZH1Weu7GrEDDfFKnqOU0zAo" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Vajra Foundation Nepal - Leading NGO for Community Empowerment" />
        <meta property="og:description" content="Empowering communities in Nepal through health, education, and sustainability. Join Vajra Foundation Nepal for transformative change!" />
        <meta property="og:url" content="https://vajrafoundationnepal.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vajrafoundationnepal.org/images/vajra-banner.jpg" />
        <meta property="og:site_name" content="Vajra Foundation Nepal" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:determiner" content="the" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vajra Foundation Nepal - Leading NGO for Community Empowerment" />
        <meta name="twitter:description" content="Empowering communities in Nepal through health, education, and sustainability. Join Vajra Foundation Nepal for transformative change!" />
        <meta name="twitter:image" content="https://vajrafoundationnepal.org/images/vajra-banner.jpg" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />

        {/* Structured Data for Rich Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NonprofitOrganization",
            "name": "Vajra Foundation Nepal",
            "url": "https://vajrafoundationnepal.org/",
            "logo": "https://vajrafoundationnepal.org/images/vajra-logo.jpg",
            "sameAs": [
              "https://www.facebook.com/VajraFoundationNepal",
              "https://twitter.com/VajraNepal",
              "https://www.linkedin.com/company/vajra-foundation-nepal"
            ],
            "description": "Vajra Foundation Nepal is the leading NGO empowering communities through education, health, and sustainable development in Nepal.",
            "founder": "Vajra Team",
            "foundingDate": "2000",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kathmandu",
              "addressRegion": "Bagmati",
              "addressCountry": "Nepal"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Support",
              "email": "info@vajrafoundationnepal.org"
            }
          })}
        </script>
      </Head>
      <main>
        <MainHome />
      </main>
    </>
  );
}
