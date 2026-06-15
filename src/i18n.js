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
      "projects.cvai.description": "Upload a job offer and your CV — the AI rewrites your CV to match exactly what the recruiter is looking for. Built with React, TypeScript, Express & Puppeteer.",
      "projects.evolutics.description": "All internships, jobs and training opportunities for students in one place. An AI assistant helps you write your CV and cover letter in minutes. Built with React, TypeScript, Supabase & Gemini AI.",
      "projects.zenithai.description": "Give it a video link or file, and it gives you back a full written analysis of what's in it — visuals, speech, everything. Built with Python, YOLOv8, Whisper & LLM.",
      "projects.aiphonecall.description": "Talk to an AI like you're on a phone call, directly from your browser. Speak, it listens, it answers out loud. Built with Vanilla JavaScript & Web Speech API.",
      "projects.fondataset.description": "A tool that generates French–Fon bilingual data to teach AI to understand and speak Fon, a language spoken by millions in Benin. Built with Python & Google Apps Script.",
      "projects.voxiai.description": "Upload a short video — it automatically adds animated subtitles, word by word, like karaoke. Perfect for TikTok, Reels and Shorts. Built with Python, FastAPI, Whisper & Gemini AI.",
      "projects.minerva.description": "Paste any text and get a full interactive course with quizzes and explanations. You can even talk to a 3D AI avatar that teaches you out loud. Built with Next.js, TypeScript, DeepSeek & Three.js.",
      "projects.oreus.description": "Upload a video, choose a language and a subtitle style — the AI transcribes, translates and burns the subtitles directly into your video. Supports 100+ languages including 39 African languages. Built with Python, Flask, Whisper & FFmpeg.",

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
      "projects.cvai.description": "Colle une offre d'emploi et ton CV — l'IA réécrit ton CV pour coller exactement à ce que le recruteur cherche. Codé avec React, TypeScript, Express & Puppeteer.",
      "projects.evolutics.description": "Tous les stages, emplois et formations pour étudiants au même endroit. Un assistant IA t'aide à rédiger ton CV et ta lettre de motivation en quelques minutes. Codé avec React, TypeScript, Supabase & Gemini AI.",
      "projects.zenithai.description": "Donne-lui un lien ou un fichier vidéo, il te rend une analyse complète écrite de ce qu'il y a dedans — visuels, paroles, tout. Codé avec Python, YOLOv8, Whisper & LLM.",
      "projects.aiphonecall.description": "Parle à une IA comme si t'étais au téléphone, directement depuis ton navigateur. Tu parles, elle écoute, elle répond à voix haute. Codé avec JavaScript Vanilla & Web Speech API.",
      "projects.fondataset.description": "Un outil qui génère des données bilingues français–fon pour apprendre à l'IA à comprendre et parler le Fon, une langue parlée par des millions de personnes au Bénin. Codé avec Python & Google Apps Script.",
      "projects.voxiai.description": "Uploade une vidéo courte — elle ajoute automatiquement des sous-titres animés, mot par mot, comme un karaoké. Parfait pour TikTok, Reels et Shorts. Codé avec Python, FastAPI, Whisper & Gemini AI.",
      "projects.minerva.description": "Colle n'importe quel texte et obtiens un cours interactif complet avec quiz et explications. Tu peux même parler à un avatar IA 3D qui t'enseigne à voix haute. Codé avec Next.js, TypeScript, DeepSeek & Three.js.",
      "projects.oreus.description": "Uploade une vidéo, choisis une langue et un style de sous-titres — l'IA transcrit, traduit et grave les sous-titres directement dans ta vidéo. Plus de 100 langues dont 39 langues africaines. Codé avec Python, Flask, Whisper & FFmpeg.",

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
