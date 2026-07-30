import React from "react";
import { Helmet } from "react-helmet";

export const SEOHead = ({
  title = "BESSANH Shadrak - Full-Stack & AI Developer | USAII & ID4Africa Hackathon Winner 2026",
  description = "BESSANH Shadrak - Full-Stack & AI Developer from Benin. Winner of the USAII Global AI Hackathon 2026 (Social Impact Award) and 2nd place at ID4Africa 2026. Building AI for real-world impact: digital identity, healthcare, fintech, Web3 & African languages.",
  keywords = "BESSANH Shadrak, Shadrak BESSANH, software developer Benin, AI developer Africa, AI engineer, machine learning engineer, full-stack developer, React, Next.js, Python, TypeScript, digital identity, CottonPay, ID4Africa 2026, USAII Global AI Hackathon 2026, Social Impact Award, NAWIRI, NeuroBridge, hackathon winner, AI for good, healthcare AI, fintech Africa, Web3, blockchain, RAG, LLM, NLP, Fon language, African languages AI, IFRI UAC",
  image = "https://shadrakbessanh.me/og-image.jpg",
  url = "https://shadrakbessanh.me",
  type = "website",
  author = "BESSANH Shadrak",
  twitterHandle = "@shadrakbessanh",
  pageType = "WebPage",
  dateModified = "2026-07-30",
}) => {
  const personRef = { "@id": "https://shadrakbessanh.me/#person" };
  const websiteRef = { "@id": "https://shadrakbessanh.me/#website" };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "url": url,
    "name": title,
    "description": description,
    "inLanguage": ["en", "fr"],
    "dateModified": dateModified,
    "isPartOf": websiteRef,
    "author": personRef,
    "publisher": personRef,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630,
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://shadrakbessanh.me/#person",
    "name": "BESSANH Shadrak",
    "url": "https://shadrakbessanh.me",
    "image": image,
    "description": description,
    "jobTitle": "Full-Stack & AI Developer",
    "nationality": { "@type": "Country", "name": "Benin" },
    "award": [
      "Social Impact Award - USAII Global AI Hackathon 2026 (project NAWIRI)",
      "2nd Place - African Digital Identity Hackathon 2026 (ID4Africa, project CottonPay)",
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Institut de Formation et de Recherche en Informatique (IFRI)",
      "parentOrganization": {
        "@type": "CollegeOrUniversity",
        "name": "Université d'Abomey-Calavi",
      },
    },
    "sameAs": [
      "https://www.linkedin.com/in/bessanh-shadrak-744049287/",
      "https://github.com/Bsh54",
      "https://twitter.com/shadrakbessanh",
      "https://medium.com/@shadrakbessanh",
    ],
    "knowsAbout": [
      "JavaScript", "TypeScript", "Python", "React", "Next.js",
      "Node.js", "MERN Stack", "Machine Learning", "Deep Learning",
      "Generative AI", "Large Language Models", "RAG", "NLP", "Computer Vision",
      "Digital Identity", "Fintech", "Web3", "Blockchain", "Healthcare AI",
      "AI for Social Impact", "African Language Technology", "FastAPI", "Firebase",
    ],
  };

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${author} - Portfolio`} />
      <meta property="og:site_name" content="BESSANH Shadrak Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${author} - Portfolio`} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* PWA / Mobile */}
      <meta name="theme-color" content="#2563EB" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="BESSANH Shadrak" />

      {/* Canonical + hreflang */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hreflang="en" href={url} />
      <link rel="alternate" hreflang="fr" href={`${url}?lang=fr`} />
      <link rel="alternate" hreflang="x-default" href={url} />

      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    </Helmet>
  );
};

export default SEOHead;
