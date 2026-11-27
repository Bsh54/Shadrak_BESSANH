import React from "react";
import { Helmet } from "react-helmet";

const personRef = { "@id": "https://shadrakbessanh.me/#person" };

export const ProjectSEO = ({
  title,
  description,
  image,
  url,
  technologies = [],
  github = "",
  demo = "",
}) => {
  const fullTitle = `${title} - BESSANH Shadrak Portfolio`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "description": description,
    "image": image,
    "url": url,
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "author": personRef,
    "publisher": personRef,
    "keywords": technologies.join(", "),
    "codeRepository": github,
    "downloadUrl": demo,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={`${title}, ${technologies.join(", ")}, BESSANH Shadrak, AI engineer Benin`} />
      <meta name="author" content="BESSANH Shadrak" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${title} by BESSANH Shadrak`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="BESSANH Shadrak Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title} by BESSANH Shadrak`} />
      <meta name="twitter:creator" content="@shadrakbessanh" />
      <meta name="twitter:site" content="@shadrakbessanh" />

      {/* Canonical + hreflang */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hreflang="en" href={url} />
      <link rel="alternate" hreflang="fr" href={`${url}?lang=fr`} />
      <link rel="alternate" hreflang="x-default" href={url} />

      {/* Structured data: SoftwareApplication */}
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
  const fullTitle = `${title} - BESSANH Shadrak`;
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": eventName,
    "description": description,
    "image": image,
    "url": url,
    "startDate": eventDate,
    "organizer": {
      "@type": "Organization",
      "name": organization,
    },
    "award": {
      "@type": "Thing",
      "name": award,
    },
    "performer": personRef,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={`${eventName}, ${award}, ${organization}, BESSANH Shadrak, AI engineer Benin, hackathon winner Africa`} />
      <meta name="author" content="BESSANH Shadrak" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph (article so previews treat each achievement as a story) */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${award} - ${eventName}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="BESSANH Shadrak Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="fr_FR" />

      {/* article:* metadata (used by LinkedIn, Facebook, Slack unfurl) */}
      <meta property="article:author" content="BESSANH Shadrak" />
      <meta property="article:section" content="Recognition" />
      {eventDate && <meta property="article:published_time" content={eventDate} />}
      <meta property="article:tag" content={award} />
      <meta property="article:tag" content={eventName} />
      <meta property="article:tag" content={organization} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${award} - ${eventName}`} />
      <meta name="twitter:creator" content="@shadrakbessanh" />
      <meta name="twitter:site" content="@shadrakbessanh" />

      {/* Canonical + hreflang */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hreflang="en" href={url} />
      <link rel="alternate" hreflang="fr" href={`${url}?lang=fr`} />
      <link rel="alternate" hreflang="x-default" href={url} />

      {/* Structured data: Event */}
      <script type="application/ld+json">{JSON.stringify(eventSchema)}</script>
    </Helmet>
  );
};

const SpecificSEOExports = { ProjectSEO, AchievementSEO };

export default SpecificSEOExports;
