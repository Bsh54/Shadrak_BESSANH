const PDF = "/certificates";

// Grouped by issuer, in reading order. Newest group first.
// Each certificate links to its PDF in public/certificates/.
export const certificationsData = [
  {
    issuer: "MIT Open Learning",
    context: {
      en: "Fourteen modules completed as part of the Universal AI programme, delivered during the Pan-African AI Ventures Residency (METI x timbuktoo), 2026.",
      fr: "Quatorze modules suivis dans le cadre du programme Universal AI, dispense pendant la Pan-African AI Ventures Residency (METI x timbuktoo), 2026."
    },
    items: [
      { name: { en: "Introduction to Universal AI", fr: "Introduction a l'Universal AI" }, file: `${PDF}/mit-introduction-to-universal-ai.pdf` },
      { name: { en: "Universal AI", fr: "Universal AI" }, file: `${PDF}/mit-universal-ai.pdf` },
      { name: { en: "Foundations of Data Analytics and Machine Learning", fr: "Foundations of Data Analytics and Machine Learning" }, file: `${PDF}/mit-foundations-of-data-analytics-and-machine-learning.pdf` },
      { name: { en: "Foundations of Neural Networks", fr: "Foundations of Neural Networks" }, file: `${PDF}/mit-foundations-of-neural-networks.pdf` },
      { name: { en: "Hands-on Deep Learning", fr: "Hands-on Deep Learning" }, file: `${PDF}/mit-hands-on-deep-learning.pdf` },
      { name: { en: "Deep Learning and Computer Vision", fr: "Deep Learning and Computer Vision" }, file: `${PDF}/mit-deep-learning-and-computer-vision.pdf` },
      { name: { en: "LLM-based AI Agents", fr: "LLM-based AI Agents" }, file: `${PDF}/mit-llm-based-ai-agents.pdf` },
      { name: { en: "Model-Driven Prescriptive AI, Part 1", fr: "Model-Driven Prescriptive AI, Part 1" }, file: `${PDF}/mit-model-driven-prescriptive-ai-part-1.pdf` },
      { name: { en: "Model-Driven Prescriptive AI, Part 2", fr: "Model-Driven Prescriptive AI, Part 2" }, file: `${PDF}/mit-model-driven-prescriptive-ai-part-2.pdf` },
      { name: { en: "Generative AI, the Future of Work, and Human Creativity", fr: "Generative AI, the Future of Work, and Human Creativity" }, file: `${PDF}/mit-generative-ai-future-of-work.pdf` },
      { name: { en: "Generative Sound: Using AI for Musical Creativity", fr: "Generative Sound: Using AI for Musical Creativity" }, file: `${PDF}/mit-generative-sound.pdf` },
      { name: { en: "AI and Entrepreneurship", fr: "AI and Entrepreneurship" }, file: `${PDF}/mit-ai-and-entrepreneurship.pdf` },
      { name: { en: "AI and Ethics", fr: "AI and Ethics" }, file: `${PDF}/mit-ai-and-ethics.pdf` },
      { name: { en: "Explainability and Fairness", fr: "Explainability and Fairness" }, file: `${PDF}/mit-explainability-and-fairness.pdf` },
      { name: { en: "Python Coding, Part 1", fr: "Python Coding, Part 1" }, file: `${PDF}/mit-python-coding-part-1.pdf` },
    ]
  },
  {
    issuer: "Wadhwani Foundation",
    context: {
      en: "Fourteen-week entrepreneurship track covering customer discovery, business modelling and go-to-market, delivered as part of the METI x timbuktoo residency.",
      fr: "Parcours entrepreneuriat de quatorze semaines (customer discovery, business modelling, go-to-market), suivi dans le cadre de la residency METI x timbuktoo."
    },
    items: [
      { name: { en: "Entrepreneurship Fundamentals", fr: "Fondamentaux de l'entrepreneuriat" }, file: `${PDF}/wadhwani-foundation-entrepreneurship.pdf` },
    ]
  },
  {
    issuer: "Intuitive Data Solutions (IDS), Hyderabad",
    context: {
      en: "Three-month software developer internship, July to September 2026. CottonPay was built during this internship using IDS's e-IDStack for digital signatures and blockchain anchoring.",
      fr: "Stage de developpeur logiciel de trois mois, juillet a septembre 2026. CottonPay a ete construit pendant ce stage avec le e-IDStack d'IDS pour les signatures numeriques et l'ancrage blockchain."
    },
    items: [
      { name: { en: "Software Developer Internship Certificate", fr: "Certificat de stage - Developpeur logiciel" }, file: `${PDF}/ids-software-developer-internship.pdf` },
    ]
  },
];
