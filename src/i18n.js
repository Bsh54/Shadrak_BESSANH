import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.achievements": "Achievements",
      "nav.resume": "Resume",

      // Home - Hero Section
      "home.greeting": "Hi There!",
      "home.intro": "I'M",
      "home.name": "BESSANH Shadrak",

      // Typewriter
      "type.software": "Software Developer",
      "type.ai": "AI Developer",
      "type.mern": "MERN Stack Developer",
      "type.opensource": "Open Source Contributor",

      // Home - About Section
      "home.about.title": "LET ME",
      "home.about.title.highlight": "INTRODUCE MYSELF",
      "home.about.title.end": "",
      "home.about.intro": "I am Shadrak BESSANH, a Computer Science student in Benin, passionate about technology and artificial intelligence. At 20 years old, I am dedicated to developing my technical skills and contributing to innovative projects that address the challenges of our time.",
      "home.about.skills": "As a developer in training with an insatiable curiosity for new technologies, I am particularly interested in",
      "home.about.skills.list": "AI applications and digital solutions",
      "home.about.skills.end": "that can transform our daily lives. My academic background in computer science provides me with a solid foundation in programming, algorithms and systems, while I independently explore emerging tech domains.",
      "home.about.interests": "What defines me:",
      "home.about.interests.list": "Discipline & perseverance, Continuous learning, African vision, Excellence without compromise",
      "home.about.interests.end": "I am committed to developing solutions adapted to the realities and needs of the African continent.",
      "home.about.tools": "My vision is to become a versatile professional capable of designing and developing innovative solutions by combining technical rigor and creativity to solve concrete problems and improve people's lives.",
      "home.about.tools.python": "",
      "home.about.tools.frameworks": "",
      "home.about.tools.list": "",
      "home.about.tools.and": "",
      "home.about.tools.react": "",

      // Skills Section
      "skills.title": "Professional",
      "skills.title.highlight": "Skills",
      "skills.tools": "Tools",
      "skills.tools.end": "I use",
      "skills.github.title": "Days I",
      "skills.github.title.highlight": "Code",

      // Contact Section
      "contact.title": "Get In Touch",
      "contact.subtitle": "Feel free to contact me for any collaboration or opportunity",

      // Projects
      "projects.title": "My Recent",
      "projects.title.highlight": "Projects",
      "projects.title.end": "",
      "projects.subtitle": "Here are a few projects I've worked on recently.",
      "projects.github": "GitHub",
      "projects.demo": "Demo",

      // Achievements & Recognition
      "achievements.title": "Achievements &",
      "achievements.title.highlight": "Recognition",
      "achievements.subtitle": "Hackathons, competitions, programs, and events where I've contributed and made an impact.",
      "achievements.clickToLearnMore": "Click to learn more",
      "achievements.about": "About This Achievement",
      "achievements.keyMetrics": "Key Metrics",
      "achievements.technologies": "Technologies & Stack",
      "achievements.team": "Team",
      "achievements.keyContacts": "Key Contacts",
      "achievements.eventDetails": "Event Details",
      "achievements.date": "Date",
      "achievements.location": "Location",
      "achievements.organization": "Organization",
      "achievements.gallery": "Event Gallery",
      "achievements.viewFullSize": "View Full Size",
      "achievements.shareAndFollow": "Share & Follow",
      "achievements.backToAchievements": "Back to Achievements",

      // Project Descriptions
      "projects.cvai.description": "An AI-powered platform that analyzes a job posting and automatically rewrites your CV to match the recruiter's expectations. Exports a clean A4 PDF, with all data processed locally for full privacy. Built with React, TypeScript, Express & Puppeteer.",
      "projects.evolutics.description": "A centralized platform that brings together internships, jobs and training opportunities for students. An integrated AI assistant helps craft optimized CVs and cover letters tailored to each opportunity. Built with React, TypeScript, Supabase & Gemini AI.",
      "projects.zenithai.description": "A platform that transforms any video into a comprehensive written analysis report. It combines object detection, speech transcription and language understanding to deliver structured insights from video content. Built with Python, YOLOv8, Whisper & LLM.",
      "projects.aiphonecall.description": "A web interface that enables real-time voice conversations with an AI, directly from the browser. The user speaks, the AI listens and responds out loud — no installation required. Built with Vanilla JavaScript & Web Speech API.",
      "projects.fondataset.description": "A tool that automatically generates bilingual French–Fon datasets to train language models on the Fon language, spoken by millions in Benin. A contribution to preserving African languages through AI. Built with Python & Google Apps Script.",
      "projects.voxiai.description": "A platform that automatically generates animated subtitles for short-form videos. The speech is transcribed, corrected and displayed word by word in sync with the video — ready for TikTok, Reels and Shorts. Built with Python, FastAPI, Whisper & Gemini AI.",
      "projects.minerva.description": "An AI-powered learning platform that turns any text content into a structured interactive course, complete with quizzes and explanations. Users can also have voice conversations with an interactive 3D AI avatar. Built with Next.js, TypeScript, DeepSeek & Three.js.",
      "projects.oreus.description": "A platform that automatically subtitles any video using AI. It transcribes the speech, translates it into the chosen language and embeds the subtitles directly into the video. Supports over 100 languages, including 39 African languages. Built with Python, Flask, Whisper & FFmpeg.",

      // Preview Sections (homepage)
      "preview.projects.title": "Featured",
      "preview.projects.highlight": "Projects",
      "preview.projects.subtitle": "A selection of my most recent and impactful work.",
      "preview.projects.seeAll": "See all projects →",
      "preview.achievements.title": "Achievements &",
      "preview.achievements.highlight": "Recognition",
      "preview.achievements.subtitle": "Hackathons and competitions where I've made an impact.",
      "preview.achievements.seeAll": "See all achievements →",
      "preview.resume.title": "My",
      "preview.resume.highlight": "Resume",
      "preview.resume.subtitle": "Download or view my CV online.",
      "preview.resume.viewOnline": "View Online",

      // Resume
      "resume.download": "Download Resume",

      // Footer
      "footer.developed": "Developed with ❤️ by",
      "footer.name": "BESSANH Shadrak",

      // Admin Dashboard
      "admin.title": "📊 Analytics Dashboard",
      "admin.total_visits": "Total Visits",
      "admin.avg_duration": "Average Duration",
      "admin.unique_countries": "Unique Countries",
      "admin.browsers": "Browsers",
      "admin.visits_by_day": "📈 Visits by Day",
      "admin.browsers_chart": "🌐 Browsers",
      "admin.os_chart": "💻 Operating Systems",
      "admin.devices_chart": "📱 Device Types",
      "admin.countries_chart": "🌍 Top 10 Countries",
      "admin.pages_chart": "📄 Pages Visited",
      "admin.clicks_chart": "🔗 Most Popular Clicks",
      "admin.all_visits": "📋 All Visits",
      "admin.date": "Date",
      "admin.browser": "Browser",
      "admin.os": "OS",
      "admin.device": "Device",
      "admin.country": "Country",
      "admin.duration": "Duration (s)",
      "admin.pages": "Pages",
      "admin.clicks": "Clicks",
      "admin.access_denied": "Access Denied",
      "admin.invalid_token": "Invalid or missing token",
      "admin.loading": "Loading data..."
    }
  },
  fr: {
    translation: {
      // Navbar
      "nav.home": "Accueil",
      "nav.projects": "Projets",
      "nav.achievements": "Réalisations",
      "nav.resume": "CV",

      // Home - Hero Section
      "home.greeting": "Bonjour !",
      "home.intro": "Je suis",
      "home.name": "BESSANH Shadrak",

      // Typewriter
      "type.software": "Développeur Logiciel",
      "type.ai": "Développeur IA",
      "type.mern": "Développeur MERN Stack",
      "type.opensource": "Contributeur Open Source",

      // Home - About Section
      "home.about.title": "PERMETTEZ-MOI DE ME",
      "home.about.title.highlight": "PRÉSENTER",
      "home.about.title.end": "",
      "home.about.intro": "Je suis Shadrak BESSANH, étudiant en Licence Informatique au Bénin, passionné par la technologie et l'intelligence artificielle. À 20 ans, je me consacre à développer mes compétences techniques et à contribuer à des projets innovants qui répondent aux défis de notre époque.",
      "home.about.skills": "Développeur en formation avec une curiosité insatiable pour les nouvelles technologies, je m'intéresse particulièrement aux",
      "home.about.skills.list": "applications de l'IA et aux solutions numériques",
      "home.about.skills.end": "qui peuvent transformer notre quotidien. Mon parcours académique en informatique me permet d'acquérir une base solide en programmation, algorithmique et systèmes, tout en explorant de manière autonome les domaines émergents de la tech.",
      "home.about.interests": "Ce qui me définit:",
      "home.about.interests.list": "Discipline et persévérance, Apprentissage continu, Vision africaine, Excellence sans compromis",
      "home.about.interests.end": "Je suis attaché à développer des solutions adaptées aux réalités et besoins du continent africain.",
      "home.about.tools": "Mon objectif est de devenir un professionnel polyvalent capable de concevoir et développer des solutions innovantes en combinant rigueur technique et créativité pour résoudre des problèmes concrets et améliorer la vie des gens.",
      "home.about.tools.python": "",
      "home.about.tools.frameworks": "",
      "home.about.tools.list": "",
      "home.about.tools.and": "",
      "home.about.tools.react": "",

      // Skills Section
      "skills.title": "Compétences",
      "skills.title.highlight": "Professionnelles",
      "skills.tools": "Outils",
      "skills.tools.end": "que j'utilise",
      "skills.github.title": "Jours où je",
      "skills.github.title.highlight": "Code",

      // Contact Section
      "contact.title": "Contactez-moi",
      "contact.subtitle": "N'hésitez pas à me contacter pour toute collaboration ou opportunité",

      // Projects
      "projects.title": "Mes",
      "projects.title.highlight": "Projets",
      "projects.title.end": "Récents",
      "projects.subtitle": "Voici quelques projets sur lesquels j'ai travaillé récemment.",
      "projects.github": "GitHub",
      "projects.demo": "Demo",

      // Achievements & Recognition
      "achievements.title": "Réalisations &",
      "achievements.title.highlight": "Reconnaissance",
      "achievements.subtitle": "Hackathons, compétitions, programmes et événements où j'ai contribué et créé de l'impact.",
      "achievements.clickToLearnMore": "Cliquez pour en savoir plus",
      "achievements.about": "À Propos de Cette Réalisation",
      "achievements.keyMetrics": "Métriques Clés",
      "achievements.technologies": "Technologies & Stack",
      "achievements.team": "Équipe",
      "achievements.keyContacts": "Contacts Clés",
      "achievements.eventDetails": "Détails de l'Événement",
      "achievements.date": "Date",
      "achievements.location": "Lieu",
      "achievements.organization": "Organisation",
      "achievements.gallery": "Galerie de l'Événement",
      "achievements.viewFullSize": "Voir en Taille Réelle",
      "achievements.shareAndFollow": "Partager & Suivre",
      "achievements.backToAchievements": "Retour aux Réalisations",

      // Project Descriptions
      "projects.cvai.description": "Une plateforme alimentée par l'IA qui analyse une offre d'emploi et réécrit automatiquement le CV pour correspondre aux attentes du recruteur. Export PDF format A4, avec toutes les données traitées localement pour une confidentialité totale. Développé avec React, TypeScript, Express & Puppeteer.",
      "projects.evolutics.description": "Une plateforme centralisée qui regroupe stages, emplois et formations pour les étudiants. Un assistant IA intégré aide à rédiger des CV optimisés et des lettres de motivation adaptées à chaque opportunité. Développé avec React, TypeScript, Supabase & Gemini AI.",
      "projects.zenithai.description": "Une plateforme qui transforme n'importe quelle vidéo en rapport d'analyse écrit et structuré. Elle combine détection d'objets, transcription audio et compréhension du langage pour extraire l'essentiel d'un contenu vidéo. Développé avec Python, YOLOv8, Whisper & LLM.",
      "projects.aiphonecall.description": "Une interface web permettant d'avoir une conversation vocale en temps réel avec une IA, directement depuis le navigateur. L'utilisateur parle, l'IA écoute et répond à voix haute — sans installation requise. Développé avec JavaScript Vanilla & Web Speech API.",
      "projects.fondataset.description": "Un outil qui génère automatiquement des datasets bilingues français–fon pour entraîner des modèles de langage sur la langue Fon, parlée par des millions de personnes au Bénin. Une contribution à la préservation des langues africaines par l'IA. Développé avec Python & Google Apps Script.",
      "projects.voxiai.description": "Une plateforme qui génère automatiquement des sous-titres animés pour les vidéos courtes. La parole est transcrite, corrigée et affichée mot par mot en synchronisation avec la vidéo — prêt pour TikTok, Reels et Shorts. Développé avec Python, FastAPI, Whisper & Gemini AI.",
      "projects.minerva.description": "Une plateforme d'apprentissage alimentée par l'IA qui transforme n'importe quel contenu textuel en cours interactif structuré, avec quiz et explications. L'utilisateur peut également avoir des conversations vocales avec un avatar IA 3D interactif. Développé avec Next.js, TypeScript, DeepSeek & Three.js.",
      "projects.oreus.description": "Une plateforme qui sous-titre automatiquement n'importe quelle vidéo grâce à l'IA. Elle transcrit la parole, la traduit dans la langue choisie et intègre les sous-titres directement dans la vidéo. Compatible avec plus de 100 langues, dont 39 langues africaines. Développé avec Python, Flask, Whisper & FFmpeg.",

      // Preview Sections (homepage)
      "preview.projects.title": "Projets",
      "preview.projects.highlight": "Récents",
      "preview.projects.subtitle": "Une sélection de mes travaux les plus récents et impactants.",
      "preview.projects.seeAll": "Voir tous les projets →",
      "preview.achievements.title": "Réalisations &",
      "preview.achievements.highlight": "Reconnaissance",
      "preview.achievements.subtitle": "Hackathons et compétitions où j'ai créé de l'impact.",
      "preview.achievements.seeAll": "Voir toutes les réalisations →",
      "preview.resume.title": "Mon",
      "preview.resume.highlight": "CV",
      "preview.resume.subtitle": "Téléchargez ou consultez mon CV en ligne.",
      "preview.resume.viewOnline": "Voir en ligne",

      // Resume
      "resume.download": "Télécharger CV",

      // Footer
      "footer.developed": "Développé avec ❤️ par",
      "footer.name": "BESSANH Shadrak",

      // Admin Dashboard
      "admin.title": "📊 Tableau de Bord Analytics",
      "admin.total_visits": "Visites Totales",
      "admin.avg_duration": "Durée Moyenne",
      "admin.unique_countries": "Pays Uniques",
      "admin.browsers": "Navigateurs",
      "admin.visits_by_day": "📈 Visites par Jour",
      "admin.browsers_chart": "🌐 Navigateurs",
      "admin.os_chart": "💻 Systèmes d'Exploitation",
      "admin.devices_chart": "📱 Types d'Appareils",
      "admin.countries_chart": "🌍 Top 10 Pays",
      "admin.pages_chart": "📄 Pages Visitées",
      "admin.clicks_chart": "🔗 Clics les Plus Populaires",
      "admin.all_visits": "📋 Toutes les Visites",
      "admin.date": "Date",
      "admin.browser": "Navigateur",
      "admin.os": "OS",
      "admin.device": "Appareil",
      "admin.country": "Pays",
      "admin.duration": "Durée (s)",
      "admin.pages": "Pages",
      "admin.clicks": "Clics",
      "admin.access_denied": "Accès Refusé",
      "admin.invalid_token": "Token invalide ou manquant",
      "admin.loading": "Chargement des données..."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Langue par défaut : anglais
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
