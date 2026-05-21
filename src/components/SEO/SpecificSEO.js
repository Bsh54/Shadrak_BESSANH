import React from "react";
import { Helmet } from "react-helmet";

export const ProjectSEO = ({
  title,
  description,
  image,
  url,
  technologies = [],
  github = "",
  demo = "",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title,
    description: description,
    image: image,
    url: url,
    applicationCategory: "DeveloperApplication",
    author: {
      "@type": "Person",
      name: "BESSANH Shadrak",
      url: "https://shadrakbessanh.me",
    },
    keywords: technologies.join(", "),
    codeRepository: github,
    downloadUrl: demo,
  };

  return (
    <Helmet>
      <title>{title} - BESSANH Shadrak Portfolio</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${title}, ${technologies.join(", ")}, MERN stack, AI, developer`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} - BESSANH Shadrak`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} - BESSANH Shadrak`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export const AchievementSEO = ({
  title,
  description,
  image,
  url,
  eventName,
  eventDate,
  award,
  organization,
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: eventName,
    description: description,
    image: image,
    url: url,
    startDate: eventDate,
    organizer: {
      "@type": "Organization",
      name: organization,
    },
    award: {
      "@type": "Thing",
      name: award,
    },
    performer: {
      "@type": "Person",
      name: "BESSANH Shadrak",
      url: "https://shadrakbessanh.me",
    },
  };

  return (
    <Helmet>
      <title>{title} - BESSANH Shadrak</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${eventName}, ${award}, hackathon, digital identity, BESSANH Shadrak`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

const SpecificSEOExports = { ProjectSEO, AchievementSEO };

export default SpecificSEOExports;
