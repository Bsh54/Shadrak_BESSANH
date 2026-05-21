import React from "react";
import { Helmet } from "react-helmet";

export const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is BESSANH Shadrak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak is a full-stack developer and AI specialist from Africa. He is the 2nd place winner of the African Digital Identity Hackathon 2026 with his project CottonPay. He specializes in MERN Stack, Digital Identity solutions, Fintech, and Machine Learning."
        }
      },
      {
        "@type": "Question",
        "name": "What is CottonPay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CottonPay is a digital identity solution that won 2nd place at the African Digital Identity Hackathon 2026 (ID4Africa 2026). It leverages digital identity for fintech applications in Africa."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does BESSANH Shadrak use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak specializes in: JavaScript, Python, React, Node.js, MongoDB, Express, Machine Learning, Deep Learning, Digital Identity solutions, MERN Stack, Fintech development, and AI development."
        }
      },
      {
        "@type": "Question",
        "name": "What are BESSANH Shadrak's main projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "His main projects include: CottonPay (Digital Identity Hackathon winner), MINERVA (AI project), VoxiAI (Voice AI), CV-AI (Resume analysis), Zenith AI, EVOLUTICS, AI Phone Call, and Fon-Dataset-Generator."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find BESSANH Shadrak's code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All of BESSANH Shadrak's projects are available on GitHub at https://github.com/Bsh54"
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact BESSANH Shadrak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact BESSANH Shadrak through his portfolio website at https://shadrakbessanh.me or via email at contact@shadrakbessanh.me"
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(faqData)}</script>
    </Helmet>
  );
};

export default FAQSchema;
