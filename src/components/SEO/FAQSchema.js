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
          "text": "BESSANH Shadrak is an AI engineer and full-stack developer from Cotonou, Benin, and a Computer Science student at IFRI (Institut de Formation et de Recherche en Informatique), Universite d'Abomey-Calavi. In 2026, his project Ife was selected for Cohort 1 of the Pan-African AI Ventures Residency (METI x timbuktoo, UNDP), his project NAWIRI received the Social Impact Award at the USAII Global AI Hackathon 2026, his project CottonPay placed second at the African Digital Identity Hackathon 2026 (ID4Africa), and he served as a facilitator at the UNDP Generative AI Masterclass during the YouthConnekt Africa Summit 2026 in Kigali. He completed a three-month software developer internship at Intuitive Data Solutions (IDS) in Hyderabad, India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Pan-African AI Ventures Residency (METI x timbuktoo) and what did BESSANH Shadrak do there?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Pan-African AI Ventures Residency, also known as the METI UniPods AI Innovation Programme, is an initiative of UNDP timbuktoo supported by Japan's Ministry of Economy, Trade and Industry. Its first cohort ran from September to November 2026 and brought together African innovators building AI and AI-enabled solutions. BESSANH Shadrak was selected into Cohort 1 together with his co-founder Beatrice Segniagbeto for their project Ife, an AI platform for learning under-represented African languages. 570 applications came in from across the continent, around 250 teams were retained in the programme, and 50 innovators from 12 African countries joined the two-week residency at the AI UniPod of the Ethiopian Artificial Intelligence Institute in Addis Ababa, from 9 to 20 November 2026."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Generative AI Masterclass at YouthConnekt Africa Summit 2026 in Kigali?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Generative AI Masterclass was a two-day pre-summit workshop organised by UNDP at the UNIPOD of the University of Rwanda's College of Science and Technology, on 23 and 24 November 2026, by invitation only, as part of the YouthConnekt Africa Summit 2026. The programme focused on generative AI for employment and economic opportunity in Africa. BESSANH Shadrak was invited personally as a facilitator, working alongside the participants on practical uses of generative AI. The main YouthConnekt Africa Summit ran from 25 to 27 November 2026 at the Kigali Convention Centre, with more than 5,000 delegates in person and 25,000 online participants."
        }
      },
      {
        "@type": "Question",
        "name": "What is Ife, the project of BESSANH Shadrak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ife is an AI platform for learning under-represented African languages, led by BESSANH Shadrak with co-founder Beatrice Segniagbeto. It starts with Fon and a few neighbouring languages, with speech, pedagogy and offline-friendly design at the centre. Ife was selected for Cohort 1 of the Pan-African AI Ventures Residency 2026 (METI x timbuktoo, UNDP) and hosted at the Ethiopian Artificial Intelligence Institute in Addis Ababa."
        }
      },
      {
        "@type": "Question",
        "name": "What did BESSANH Shadrak do at Intuitive Data Solutions (IDS) in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak completed a three-month software developer internship at Intuitive Data Solutions Pvt Ltd in Hyderabad, India, from the 1st of July to the 30th of September 2026. During the internship, he built the CottonPay platform on IDS's e-IDStack for digital signatures and blockchain anchoring, and delivered the go-to-market strategy alongside the engineering work. The internship was mentored by the IDS team and the certificate was signed by Anil Vempati, Manager HR/Legal."
        }
      },
      {
        "@type": "Question",
        "name": "Who won the Social Impact Award at the USAII Global AI Hackathon 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak and Frankel Gnonlonfin won the Social Impact Award at the USAII Global AI Hackathon 2026 (organised by the United States Artificial Intelligence Institute) with their project NAWIRI. The competition attracted more than 6,000 participants from over 90 countries, with 808 qualified teams and 622 evaluated projects. Only 15 projects were crowned winners."
        }
      },
      {
        "@type": "Question",
        "name": "What is NAWIRI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAWIRI is a conversational AI assistant created by BESSANH Shadrak and Frankel Gnonlonfin that helps families in West Africa (Benin, Senegal, Ghana) access the public aid they are legally entitled to. Users describe their situation in plain words in five languages (Fon, Wolof, Twi, French and English), and NAWIRI identifies the programmes they qualify for, the documents required and the office to contact. It covers 25 public programmes. NAWIRI received the Social Impact Award at the USAII Global AI Hackathon 2026 and is built with Next.js and Google Gemini."
        }
      },
      {
        "@type": "Question",
        "name": "What is CottonPay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CottonPay is a digital identity and payment system for Beninese cotton producers, developed by BESSANH Shadrak and his team from IFRI. Each delivery becomes a verifiable credential signed on the BCovrin ledger, authenticated through eSignet and MOSIP, and stored in the producer's mobile wallet. CottonPay placed second at the African Digital Identity Hackathon 2026 (ID4Africa) in Abidjan, Cote d'Ivoire, in front of an international jury that included officials from the national ID programmes of Uganda, India, Ethiopia and Cote d'Ivoire. The platform was then developed further during a three-month internship at Intuitive Data Solutions in Hyderabad, using IDS's e-IDStack."
        }
      },
      {
        "@type": "Question",
        "name": "What is NeuroBridge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NeuroBridge is an AI communication aid created by BESSANH Shadrak for non-verbal and minimally-verbal autistic users. Pictograms are composed into first-person sentences and spoken out loud on-device. Caregivers review usage patterns through a companion assistant. It is built with Next.js, React 19 and the Web Speech API."
        }
      },
      {
        "@type": "Question",
        "name": "Which MIT Open Learning certificates does BESSANH Shadrak hold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak completed 15 modules of the MIT Open Learning Universal AI programme in 2026 as part of the METI x timbuktoo Pan-African AI Ventures Residency: Introduction to Universal AI, Universal AI, Foundations of Data Analytics and Machine Learning, Foundations of Neural Networks, Hands-on Deep Learning, Deep Learning and Computer Vision, LLM-based AI Agents, Model-Driven Prescriptive AI Part 1 and Part 2, Generative AI and the Future of Work, Generative Sound (Using AI for Musical Creativity), AI and Entrepreneurship, AI and Ethics, Explainability and Fairness, and Python Coding Part 1. He also completed the Wadhwani Foundation Entrepreneurship Fundamentals, a fourteen-week programme delivered within the same residency."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does BESSANH Shadrak specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BESSANH Shadrak specialises in: Artificial Intelligence and Generative AI (PyTorch, Transformers, RAG, LLM agents, YOLOv8, Whisper, Google Gemini, DeepSeek, Sarvam), full-stack web development (React 17-19, Next.js 14+, TypeScript, Node.js, Python, FastAPI, Flask, Tailwind CSS), data and digital identity (PostgreSQL, Supabase, Firebase, Neo4j, eSignet, MOSIP, BCovrin, Verifiable Credentials), Web3 across Solana, Monad, Flare, iExec and Nimiq, embedded systems and IoT (ESP32, MQTT, Arduino), and DevOps tooling (Git, Docker, Vercel, GitHub Actions)."
        }
      },
      {
        "@type": "Question",
        "name": "What are BESSANH Shadrak's main projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Main projects include NAWIRI (Social Impact Award USAII 2026), CottonPay (2nd place ID4Africa 2026), Ife (METI x timbuktoo Cohort 1), NeuroBridge (AAC for autistic users), Fon-Dataset-Generator, VoxiAI and Oreus (subtitling), Zenith AI (video understanding), CV-AI (browser-only CV optimiser), EVOLUTICS (opportunities aggregator for West African students), MINERVA (AI learning platform), Neuro-Synthetix (clinical trials voice assistant), and eight Web3 hackathon projects: AegisFlow (Flare), PayVault (iExec), Sesion (Nimiq), Horus (Solana), Gatekeep (Monad), Phytovance (molecular docking)."
        }
      },
      {
        "@type": "Question",
        "name": "What awards and recognition has BESSANH Shadrak received?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In 2026: (1) Cohort 1 of the Pan-African AI Ventures Residency (METI x timbuktoo, UNDP) with Ife, selected out of 570 applications, residency hosted at the Ethiopian AI Institute in Addis Ababa from 9 to 20 November 2026; (2) Social Impact Award at the USAII Global AI Hackathon 2026 for NAWIRI, 15 winners from 808 qualified teams in 90+ countries; (3) Second Place at the African Digital ID Hackathon 2026 (ID4Africa) in Abidjan for CottonPay; (4) Facilitator at the UNDP Generative AI Masterclass during the YouthConnekt Africa Summit 2026, UNIPOD University of Rwanda CST, Kigali, 23-24 November 2026."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find BESSANH Shadrak's code and projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All of BESSANH Shadrak's open source projects are on GitHub at https://github.com/Bsh54. Live demos and detailed case studies are on his portfolio at https://shadrakbessanh.me/project. His LinkedIn is at https://www.linkedin.com/in/bessanh-shadrak-744049287/."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact BESSANH Shadrak?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach BESSANH Shadrak through his portfolio at https://shadrakbessanh.me, via email at shadrakbsh@gmail.com, on LinkedIn at https://www.linkedin.com/in/bessanh-shadrak-744049287/, or on GitHub at https://github.com/Bsh54."
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
