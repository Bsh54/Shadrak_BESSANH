import nawiri from "../Assets/Projects/nawiri.png";
import cottonpay from "../Assets/Projects/cottonpay.png";
import oreus from "../Assets/Projects/oreus.png";
import fondataset from "../Assets/Projects/fondataset.png";
import avatar from "../Assets/avatar.png";

export const blogPosts = [
  {
    slug: "building-nawiri-usaii-social-impact-award",
    title: "Building NAWIRI: How We Won the Social Impact Award at the USAII Global AI Hackathon 2026",
    date: "2026-07-05",
    dateModified: "2026-07-30",
    readingTime: "6 min",
    cover: nawiri,
    tags: ["AI", "Social Impact", "NAWIRI", "USAII", "Africa"],
    excerpt:
      "How I built NAWIRI, a multilingual conversational AI that helps West African families access the public aid they are entitled to — and won the Social Impact Award among 808 teams from 90+ countries.",
    content: `In June 2026, my project **NAWIRI** won the **Social Impact Award** at the **USAII Global AI Hackathon 2026**, organized by the United States Artificial Intelligence Institute. The competition drew more than **6,000 participants from over 90 countries**, with 808 qualified teams and 622 projects evaluated — and only **15 winners**. This is the story of what we built and why.

## The problem

Across West Africa, families miss public aid they are legally entitled to — every single day. Not because the aid doesn't exist, but because the system is too hard to navigate. Eligibility rules are scattered, the paperwork is intimidating, and information is fragmented across dozens of programs and languages.

I kept asking one question: what if accessing public aid felt like a simple conversation instead of a bureaucratic maze?

## What NAWIRI does

NAWIRI is a conversational AI assistant. You describe your situation in plain words — in **five languages, including Fɔngbe, Wolof and Twi** — and NAWIRI asks one question at a time to find:

- the programs you actually qualify for,
- the exact documents to bring,
- and the official contact to reach.

It covers **25 public programs** across Benin, Senegal and Ghana: health insurance, cash transfers, microcredit, free maternal care and more. The AI interprets and personalizes — it never decides. Every answer ends with a reminder to verify with the official body.

## How it works

The design principle was simple: **the AI interprets, the human decides.**

1. The user describes their situation in free text, in their own language.
2. NAWIRI identifies the signals (health, finance, family).
3. It asks one focused follow-up question at a time.
4. It returns a structured answer: program, documents, steps, and official contact.

A static form could never cross dozens of eligibility variables against a free-text description that mixes health, money and family. A conversation is less intimidating than a questionnaire — and far more inclusive when it speaks your language.

## The stack

- **Frontend:** Next.js 14 (App Router)
- **AI engine:** Google Gemini via streaming
- **Translation:** Fɔngbe, Wolof and Twi support
- **Map & contacts:** Leaflet + OpenStreetMap
- **Deployment:** Vercel

## Why it matters

Winning the Social Impact Award validated the mission: **using AI to make public services reachable for the people who need them most.** Technology built in Africa, for African realities, in African languages.

NAWIRI is one project in a bigger direction I care about — building AI that solves concrete problems for real people, not just impressive demos.`,
    faq: [
      {
        q: "What is NAWIRI?",
        a: "NAWIRI is a multilingual conversational AI assistant by BESSANH Shadrak that helps West African families access the public aid they are entitled to, in 5 languages including Fon, Wolof and Twi. It won the Social Impact Award at the USAII Global AI Hackathon 2026.",
      },
      {
        q: "Who won the Social Impact Award at the USAII Global AI Hackathon 2026?",
        a: "BESSANH Shadrak and Frankel Gnonlonfin won the Social Impact Award with NAWIRI, among 808 qualified teams from more than 90 countries.",
      },
    ],
  },

  {
    slug: "cottonpay-digital-identity-id4africa",
    title: "CottonPay: Digital Identity for 200,000+ Cotton Farmers (2nd Place, ID4Africa 2026)",
    date: "2026-05-20",
    dateModified: "2026-07-30",
    readingTime: "6 min",
    cover: cottonpay,
    tags: ["Digital Identity", "Fintech", "Blockchain", "CottonPay", "ID4Africa"],
    excerpt:
      "How CottonPay turns cotton deliveries into verifiable digital credentials so unbanked farmers can build a certified economic history — and how it won 2nd place at the African Digital Identity Hackathon 2026.",
    content: `**CottonPay** won **2nd place** at the **Africa Digital ID Hackathon 2026 (ID4Africa)**, hosted by Carnegie Mellon University Africa's Upanzi Network and MicroSave Consulting in Abidjan, Côte d'Ivoire. Here is the problem it solves and how we built it.

## The problem

Benin is the **#1 cotton producer in West Africa** (647,000 tonnes in 2025–2026), yet over **200,000 cotton producers** lack formal proof of their deliveries and income. The paper-based system is vulnerable to fraud, loss and error — which makes it nearly impossible for farmers to access formal bank credit. They stay excluded from the financial system, trapped in informal lending with predatory rates.

## The solution

CottonPay transforms each cotton delivery into a **verifiable digital credential**, giving farmers a certified economic history they own and control. It combines three components:

1. **National authentication (eSignet / MOSIP)** — secure identity verification using Benin's national ID system.
2. **Verifiable credentials (BCovrin)** — blockchain-anchored, cryptographically secure proof of delivery.
3. **Mobile wallet (e-IDapp)** — sovereign data storage controlled entirely by the farmer.

## How it works

1. A cooperative representative authenticates with eSignet.
2. They register a cotton delivery (weight, quality, amount).
3. The system automatically generates a verifiable credential.
4. The farmer scans a QR code with their phone.
5. The proof is stored permanently in their wallet — infalsifiable, portable, sovereign.

## The impact

- **Infalsifiable proof** of each delivery — eliminates fraud and disputes.
- **Certified economic history** — opens the door to formal credit.
- **Full supply-chain traceability** — transparency for every stakeholder.
- **Data sovereignty** — farmers own and control their proofs.
- **A replicable model** — applicable to cashew, shea and maize, and deployable across West Africa.

An international jury of digital identity experts from Uganda, India, Ethiopia and Côte d'Ivoire ranked CottonPay the **2nd best solution** among hundreds of competing teams.

## The lesson

Digital identity is not an abstract idea — it is the foundation of financial inclusion. When you give someone verifiable proof of their own economic activity, you give them access to the formal economy.`,
    faq: [
      {
        q: "What is CottonPay?",
        a: "CottonPay is a digital identity solution that turns cotton deliveries into verifiable blockchain credentials, enabling 200,000+ Beninese farmers to build a certified economic history and access formal credit. It won 2nd place at ID4Africa 2026.",
      },
      {
        q: "What technologies does CottonPay use?",
        a: "CottonPay uses eSignet/MOSIP for national authentication, BCovrin for blockchain-anchored verifiable credentials, and a mobile wallet (e-IDapp) for sovereign data storage.",
      },
    ],
  },

  {
    slug: "building-ai-for-real-world-impact-in-africa",
    title: "Building AI for Real-World Impact in Africa: My Approach",
    date: "2026-07-15",
    dateModified: "2026-07-30",
    readingTime: "5 min",
    cover: oreus,
    tags: ["AI", "Africa", "Vision", "Social Impact"],
    excerpt:
      "Most AI demos impress for five minutes and solve nothing. Here is the approach I use to build AI that actually helps people — grounded in African realities.",
    content: `I build AI for one reason: to solve concrete problems for real people. Not to chase benchmarks, not to impress for five minutes. Here is the approach behind projects like NAWIRI, CottonPay, NeuroBridge and Oreus.

## Start with a real problem, not a model

The best projects don't start with "what can this model do?" They start with "who is stuck, and why?" NAWIRI started with families missing public aid. CottonPay started with farmers who can't prove their income. Oreus started with African-language creators locked out of global platforms. The model is a tool — the problem comes first.

## Speak the user's language — literally

Most AI products assume English or French. In West Africa, that excludes millions. NAWIRI speaks **Fɔngbe, Wolof and Twi**. Oreus subtitles video in **100+ languages, including 39 African languages**. Inclusion isn't a feature you add later — it's a design decision you make on day one.

## Keep the human in charge

For anything that touches people's lives — health, money, rights — the AI should **interpret and personalize, never decide**. NAWIRI always ends with "verify with the official body." Trust is built by being honest about what the AI is and isn't.

## Ship it, then prove it works

An idea in a slide deck helps no one. Every project I build gets **deployed with a live demo** so anyone can try it. Real usage teaches you more than any plan.

## Why Africa

The continent has the youngest population on earth and problems that global tech rarely prioritizes: financial inclusion, access to public services, language preservation, healthcare access. That's not a limitation — it's the most meaningful place to build. Solutions designed for African realities often generalize better, because they're forced to work under real constraints.

This is the direction I'm committed to: **technical rigor plus creativity, applied to problems that matter.**`,
    faq: [
      {
        q: "What kind of AI does BESSANH Shadrak build?",
        a: "BESSANH Shadrak builds AI for real-world impact — digital identity, healthcare, public-service access and African language technology — always with a deployed, testable demo and a human-in-charge design.",
      },
    ],
  },

  {
    slug: "preserving-the-fon-language-with-ai",
    title: "Preserving the Fon Language with AI: The Fon Dataset Generator",
    date: "2026-06-10",
    dateModified: "2026-07-30",
    readingTime: "5 min",
    cover: fondataset,
    tags: ["NLP", "African Languages", "Fon", "Dataset", "AI"],
    excerpt:
      "Millions speak Fon in Benin, yet almost no AI understands it. Here is how I built a tool to generate bilingual French–Fon datasets to train language models on an under-resourced African language.",
    content: `Fɔngbe (Fon) is spoken by **millions of people in Benin** — and almost no AI understands it. Large language models are trained mostly on English and a handful of high-resource languages. Most African languages are invisible to them. The **Fon Dataset Generator** is my attempt to change that, one dataset at a time.

## Why under-resourced languages get left behind

Modern AI needs data. Lots of it. English has centuries of digitized text; Fon has very little. Without training data, models can't translate, understand or generate the language — so speakers are locked out of the AI era. It's a self-reinforcing gap.

## What the tool does

The Fon Dataset Generator automatically produces **bilingual French–Fon datasets** ready for training and fine-tuning language models. It:

- generates natural sentences across many themes (health, commerce, emotions, proverbs),
- auto-translates them through AI APIs,
- and exports clean, structured data (JSONL) ready for fine-tuning.

The goal is simple: create the raw material that makes Fon-capable AI possible.

## Why it matters

Language is identity. When a language isn't represented in AI, its speakers can't use voice assistants, translation, search or education tools in their mother tongue. Building datasets for Fon is a small, concrete contribution to **keeping an African language alive in the digital age** — and a template that can be adapted to other under-resourced languages.

## The bigger picture

African language technology is one of the most impactful and underserved areas in AI today. Every dataset, every model, every tool moves millions of people closer to technology that actually speaks to them.`,
    faq: [
      {
        q: "What is the Fon Dataset Generator?",
        a: "The Fon Dataset Generator is a tool by BESSANH Shadrak that automatically creates bilingual French–Fon datasets to train and fine-tune language models on the Fon (Fɔngbe) language spoken in Benin, helping preserve an under-resourced African language.",
      },
    ],
  },

  {
    slug: "who-is-bessanh-shadrak",
    title: "Who Is BESSANH Shadrak? A Developer Building AI for Africa",
    date: "2026-07-25",
    dateModified: "2026-07-30",
    readingTime: "4 min",
    cover: avatar,
    tags: ["About", "Developer", "Benin", "AI"],
    excerpt:
      "A short introduction: who I am, where I come from, what I build, and what drives me — a self-taught developer from Benin building AI for real-world impact.",
    content: `I'm **BESSANH Shadrak**, a Full-Stack and AI Developer from **Benin, West Africa**, and a Computer Science student at IFRI (Institut de Formation et de Recherche en Informatique), Université d'Abomey-Calavi.

## What I do

I build AI-powered products that solve concrete problems. In 2026 alone, two of my projects were recognized internationally:

- **NAWIRI** — Social Impact Award at the **USAII Global AI Hackathon 2026** (among 808 teams from 90+ countries).
- **CottonPay** — 2nd place at the **African Digital Identity Hackathon 2026 (ID4Africa)**.

Beyond that, I've shipped products across healthcare (NeuroBridge), video AI (VoxiAI, Oreus, Zenith AI), and African language technology (Fon Dataset Generator), plus projects for Web3 hackathons on Solana, Monad, Flare and iExec.

## What drives me

Four things define how I work:

- **Discipline and perseverance** — I finish what I start, and I ship.
- **Continuous learning** — I explore emerging tech independently and constantly.
- **An African vision** — I build for the realities and needs of my continent.
- **Excellence without compromise** — good enough is never the goal.

## My stack

React, Next.js, Python, TypeScript, Node.js, plus AI/ML: LLMs, RAG, NLP, computer vision, and speech. I work comfortably across the full stack — from database to model to interface.

## Let's build something

I'm open to freelance work, collaborations and opportunities in AI, full-stack development, fintech, digital identity and AI for social impact. The best way to reach me is through [my portfolio](https://shadrakbessanh.me) or on [GitHub](https://github.com/Bsh54).`,
    faq: [
      {
        q: "Who is BESSANH Shadrak?",
        a: "BESSANH Shadrak is a Full-Stack and AI Developer from Benin, winner of the Social Impact Award at the USAII Global AI Hackathon 2026 (NAWIRI) and 2nd place at ID4Africa 2026 (CottonPay). He specializes in React, Next.js, Python and AI for real-world impact.",
      },
    ],
  },
];

export const getPost = (slug) => blogPosts.find((p) => p.slug === slug);
