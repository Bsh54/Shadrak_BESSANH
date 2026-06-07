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
          "text": "BESSANH Shadrak is a 20-year-old Full-Stack Developer and AI Specialist from Benin, West Africa. He is a Computer Science student at IFRI (Institut de Formation et de Recherche en Informatique), Université d'Abomey-Calavi. He won 2nd Place at the African Digital Identity Hackathon 2026 (ID4Africa) with his project CottonPay. He specializes in MERN Stack, React, Python, Digital Identity, Fintech, and Machine Learning."
        }
      },
      {
        "@type": "Question",
        "name": "What is CottonPay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CottonPay is a groundbreaking digital identity solution developed by BESSANH Shadrak's team that won 2nd Place at the Africa Digital ID Hackathon 2026 (ID4Africa) in Abidjan, Côte d'Ivoire. It transforms cotton delivery records into verifiable digital credentials, enabling over 200,000 Beninese farmers to build certified economic histories and access formal credit. The solution combines eSignet/MOSIP for national authentication, BCovrin blockchain for verifiable credentials, and a mobile wallet for sovereign data storage."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does BESSANH Shadrak specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak specializes in: JavaScript, TypeScript, Python, React, Next.js, Node.js, MongoDB, Express (MERN Stack), FastAPI, Firebase, Supabase, Machine Learning, Deep Learning, Computer Vision (YOLOv8), Natural Language Processing (Whisper, LLMs), Digital Identity (MOSIP, eSignet, Verifiable Credentials), Docker, Git, SQL, and Tailwind CSS."
        }
      },
      {
        "@type": "Question",
        "name": "What are BESSANH Shadrak's main projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak's main projects include: CottonPay (Digital Identity Hackathon 2nd place winner), MINERVA (AI-powered STEM learning platform with 3D avatar), VoxiAI (automatic subtitle generator for TikTok/Reels/Shorts), EVOLUTICS (professional opportunities platform, HACKBYIFRI 2026), CV-AI (AI CV optimizer), Zenith AI (video analysis with YOLOv8 and Whisper), AI Phone Call (real-time voice AI interface), and Fon-Dataset-Generator (bilingual French-Fongbe dataset for LLM training)."
        }
      },
      {
        "@type": "Question",
        "name": "What awards has BESSANH Shadrak won?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak won 2nd Place at the Africa Digital ID Hackathon 2026, organized by Carnegie Mellon University Africa's Upanzi Network and MicroSave Consulting, held at the Parc des Expositions d'Abidjan, Côte d'Ivoire on May 11-16, 2026. His team competed against hundreds of teams across Africa and was recognized by an international jury of digital identity experts from Uganda, India, Ethiopia, and Côte d'Ivoire."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find BESSANH Shadrak's code and projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All of BESSANH Shadrak's open source projects are available on GitHub at https://github.com/Bsh54. You can also view live demos of his projects on his portfolio at https://shadrakbessanh.me/project."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact BESSANH Shadrak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact BESSANH Shadrak through his portfolio website at https://shadrakbessanh.me, via LinkedIn at https://linkedin.com/in/shadrak-bessanh, or on GitHub at https://github.com/Bsh54."
        }
      },
      {
        "@type": "Question",
        "name": "Is BESSANH Shadrak available for freelance work or collaboration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, BESSANH Shadrak is open to freelance work, collaborations, and innovative project opportunities, especially in AI development, full-stack web development, fintech, and digital identity solutions for Africa. You can reach him through his portfolio at https://shadrakbessanh.me."
        }
      },
      {
        "@type": "Question",
        "name": "What is MINERVA by BESSANH Shadrak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MINERVA is an AI-powered STEM learning platform developed by BESSANH Shadrak. It generates personalized courses from any text content, features an interactive 3D VRM avatar with real-time voice conversations, AI-generated quizzes, progress tracking, and multilingual support in English and French. Built with Next.js 16, TypeScript, Supabase PostgreSQL, DeepSeek API, OpenAI Realtime API, and Three.js."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Fon-Dataset-Generator project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Fon-Dataset-Generator is a project by BESSANH Shadrak that automatically creates bilingual French-Fongbe datasets for training language models (LLMs). It generates natural sentences across 12 themes (health, commerce, emotions, proverbs), auto-translates them via AI APIs, and exports JSONL data ready for fine-tuning. The goal is to preserve the Fon language and develop AI for Beninese culture."
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
