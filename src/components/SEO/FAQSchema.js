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
          "text": "BESSANH Shadrak is a Full-Stack and AI Developer from Benin, West Africa, and a Computer Science student at IFRI (Institut de Formation et de Recherche en Informatique), Université d'Abomey-Calavi. He won the Social Impact Award at the USAII Global AI Hackathon 2026 with his project NAWIRI, and 2nd Place at the African Digital Identity Hackathon 2026 (ID4Africa) with his project CottonPay. He specializes in React, Next.js, Python, Artificial Intelligence, Machine Learning, Digital Identity, Web3 and building technology for real-world impact in Africa."
        }
      },
      {
        "@type": "Question",
        "name": "Who won the Social Impact Award at the USAII Global AI Hackathon 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak and Frankel Gnonlonfin won the Social Impact Award at the USAII Global AI Hackathon 2026 (organized by the United States Artificial Intelligence Institute) with their project NAWIRI. The competition attracted over 6,000 participants from more than 90 countries, with 808 qualified teams and 622 evaluated projects; only 15 teams were named winners."
        }
      },
      {
        "@type": "Question",
        "name": "What is NAWIRI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAWIRI is a conversational AI assistant created by BESSANH Shadrak that helps families in West Africa (Benin, Senegal, Ghana) access the public aid they are legally entitled to. Users describe their situation in plain words in 5 languages, including Fon (Fongbe), Wolof and Twi, and NAWIRI identifies the programs they qualify for, the documents to bring and the official contact to reach. It covers 25 public programs and won the Social Impact Award at the USAII Global AI Hackathon 2026. It is built with Next.js and Google Gemini."
        }
      },
      {
        "@type": "Question",
        "name": "What is NeuroBridge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NeuroBridge is an AI communication aid created by BESSANH Shadrak for non-verbal and minimally-verbal autistic people. Users tap pictograms and instantly hear a clear first-person sentence spoken aloud, while caregivers track patterns over time with an AI assistant. It is accessibility-first and built with Next.js, React 19, TypeScript and the Web Speech API."
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
          "text": "BESSANH Shadrak's main projects include: NAWIRI (AI social-orientation assistant for West Africa, Social Impact Award USAII 2026), CottonPay (digital identity for cotton farmers, 2nd place ID4Africa 2026), NeuroBridge (AI communication aid for non-verbal autistic people), MINERVA (AI-powered STEM learning platform with 3D avatar), VoxiAI (automatic subtitle generator for TikTok/Reels/Shorts), Oreus (AI video subtitling in 100+ languages including 39 African languages), EVOLUTICS (professional opportunities platform, HACKBYIFRI 2026), CV-AI (AI CV optimizer), Zenith AI (video analysis with YOLOv8 and Whisper), and Fon-Dataset-Generator (bilingual French-Fongbe dataset for LLM training). He has also built projects for Solana, Monad, Flare and iExec hackathons."
        }
      },
      {
        "@type": "Question",
        "name": "What awards has BESSANH Shadrak won?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak has won two major awards in 2026: (1) the Social Impact Award at the USAII Global AI Hackathon 2026 (United States Artificial Intelligence Institute) with his project NAWIRI, selected among 808 qualified teams from 90+ countries; and (2) 2nd Place at the Africa Digital ID Hackathon 2026 (ID4Africa), organized by Carnegie Mellon University Africa's Upanzi Network and MicroSave Consulting, held in Abidjan, Côte d'Ivoire, with his project CottonPay."
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
          "text": "You can contact BESSANH Shadrak through his portfolio website at https://shadrakbessanh.me, via LinkedIn at https://www.linkedin.com/in/bessanh-shadrak-744049287/, or on GitHub at https://github.com/Bsh54."
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
