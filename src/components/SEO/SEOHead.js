import React from "react";
import { Helmet } from "react-helmet";

export const SEOHead = ({
  title = "BESSANH Shadrak - AI Engineer and Full-Stack Developer | METI x timbuktoo Cohort 1, USAII Social Impact Award, ID4Africa 2nd Place 2026",
  description = "BESSANH Shadrak, AI engineer and full-stack developer from Cotonou, Benin. Cohort 1 of the Pan-African AI Ventures Residency (METI x timbuktoo, UNDP), Social Impact Award at the USAII Global AI Hackathon 2026 for NAWIRI, 2nd place at the African Digital Identity Hackathon 2026 for CottonPay, Facilitator at the UNDP Generative AI Masterclass (YouthConnekt Africa Summit, Kigali). Three-month internship at Intuitive Data Solutions (Hyderabad). Credentials from MIT Open Learning (15 Universal AI modules) and Wadhwani Foundation.",
  keywords = "BESSANH Shadrak, Shadrak BESSANH, AI engineer Benin, full-stack developer Africa, METI x timbuktoo, Pan-African AI Ventures Residency, UNDP timbuktoo, Ethiopian AI Institute, UNIPOD, YouthConnekt Africa Summit Kigali, Generative AI Masterclass, USAII Global AI Hackathon, Social Impact Award, NAWIRI, CottonPay, ID4Africa, Intuitive Data Solutions, IDS Hyderabad, e-IDStack, MIT Open Learning, Universal AI, Wadhwani Foundation, Ife, NeuroBridge, Fon-Dataset, EVOLUTICS, VoxiAI, Oreus, Zenith AI, CV-AI, MINERVA, Neuro-Synthetix, AegisFlow, PayVault, Sesion, Horus, Gatekeep, Phytovance, Web3, Solana, Monad, Flare, iExec, Nimiq, RAG, LLM, NLP, Fon, Fongbe, African languages, eSignet, MOSIP, BCovrin, verifiable credentials, IFRI UAC, Cotonou Benin",
  image = "https://shadrakbessanh.me/og-image.jpg",
  url = "https://shadrakbessanh.me",
  type = "website",
  author = "BESSANH Shadrak",
  twitterHandle = "@shadrakbessanh",
  pageType = "WebPage",
  dateModified = "2026-11-27",
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
    "jobTitle": "AI Engineer and Full-Stack Developer",
    "nationality": { "@type": "Country", "name": "Benin" },
    "award": [
      "Social Impact Award, USAII Global AI Hackathon 2026 (project NAWIRI)",
      "Second Place, Africa Digital ID Hackathon 2026 (ID4Africa, project CottonPay)",
      "Cohort 1, Pan-African AI Ventures Residency 2026 (METI x timbuktoo, UNDP)",
      "Facilitator, Generative AI Masterclass UNDP x UNIPOD, YouthConnekt Africa Summit 2026 (Kigali)",
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Institut de Formation et de Recherche en Informatique (IFRI)",
      "parentOrganization": {
        "@type": "CollegeOrUniversity",
        "name": "Universite d'Abomey-Calavi",
      },
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Pan-African AI Ventures Residency, Cohort 1 (METI x timbuktoo, UNDP)",
    },
    "sameAs": [
      "https://www.linkedin.com/in/bessanh-shadrak-744049287/",
      "https://github.com/Bsh54",
    ],
    "knowsAbout": [
      "Artificial Intelligence", "Generative AI", "Large Language Models", "LLM Agents",
      "Retrieval-Augmented Generation", "Natural Language Processing", "Computer Vision",
      "Python", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "FastAPI",
      "Google Gemini", "Whisper", "YOLOv8", "DeepSeek", "PyTorch", "Transformers",
      "Digital Identity", "eSignet", "MOSIP", "BCovrin", "Verifiable Credentials", "e-IDStack",
      "Web3", "Solana", "Monad", "Flare", "iExec", "Nimiq",
      "Fon language", "African languages AI", "AI for Social Impact",
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
      <meta name="theme-color" content="#4F46E5" />
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
