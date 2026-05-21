import React from "react";
import { Helmet } from "react-helmet";

export const SEOHead = ({
  title = "BESSANH Shadrak - Software Developer & AI Developer",
  description = "BESSANH Shadrak - Full-stack developer, AI specialist, and 2nd place winner at African Digital Identity Hackathon 2026. Expert in MERN stack, digital identity solutions, and fintech.",
  keywords = "BESSANH Shadrak, software developer, AI developer, MERN stack, digital identity, hackathon winner, fintech developer, Africa",
  image = "https://shadrakbessanh.me/og-image.jpg",
  url = "https://shadrakbessanh.me",
  type = "website",
  author = "BESSANH Shadrak",
  twitterHandle = "@shadrakbessanh",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "BESSANH Shadrak",
    url: "https://shadrakbessanh.me",
    image: image,
    description: description,
    sameAs: [
      "https://linkedin.com/in/shadrak-bessanh",
      "https://github.com/Bsh54",
      "https://twitter.com/shadrakbessanh",
    ],
    jobTitle: "Full-Stack Developer & AI Specialist",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    knowsAbout: [
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "Machine Learning",
      "Deep Learning",
      "Digital Identity",
      "MERN Stack",
      "Fintech",
      "AI Development",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="BESSANH Shadrak Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content={twitterHandle} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563EB" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="BESSANH Shadrak" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Alternate Links */}
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="fr" href={`${url}?lang=fr`} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
    </Helmet>
  );
};

export default SEOHead;
