import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      "nav.home": "Home",
      "nav.projects": "Projects",
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
      "home.about.intro": "I am a Software Developer and AI Developer passionate about transforming ideas into intelligent and scalable solutions. Over time, I have explored several technologies and found my passion in creating artificial intelligence systems and innovative user experiences.",
      "home.about.skills": "I master",
      "home.about.skills.list": "JavaScript, Python, Machine Learning, Deep Learning and Node.js",
      "home.about.skills.end": "— and I love working on AI and full-stack development projects.",
      "home.about.interests": "My main areas of interest include developing",
      "home.about.interests.list": "AI Applications, Machine Learning Models,",
      "home.about.interests.end": "and exploring new ways to integrate artificial intelligence into practical solutions.",
      "home.about.tools": "Whenever possible, I love creating projects with",
      "home.about.tools.python": "Python",
      "home.about.tools.frameworks": "and modern frameworks like",
      "home.about.tools.list": "TensorFlow, PyTorch",
      "home.about.tools.and": "and",
      "home.about.tools.react": "React.js",

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

      // Project Descriptions
      "projects.cvai.description": "AI-powered CV optimization web application. Analyzes job postings to automatically adapt your CV to recruiter and ATS expectations. A4 PDF export and privacy by design (data only in browser). Technologies: React 19, TypeScript, Tailwind CSS 4, Express, Puppeteer.",
      "projects.evolutics.description": "Centralized professional opportunities platform developed for HACKBYIFRI 2026. Hub aggregating internships, jobs and training from multiple sources. Integrated AI assistant for ATS-optimized CV writing, professional jargon decryption and personalized advice. CV Builder with modern templates, cover letter generation and student-profile filtering. Technologies: React 18, TypeScript, Supabase, Google Gemini AI, Tailwind CSS.",
      "projects.zenithai.description": "Video analysis platform transforming video content into structured narrative reports. Combines visual analysis (YOLOv8 for object detection), audio transcription (Whisper with automatic language detection) and natural language processing. Flexible import via local files or URLs (YouTube, TikTok, Twitter). Automatic generation of professional analysis reports. Technologies: Gradio, YOLOv8, Whisper, Yt-dlp, Decord, LLM.",
      "projects.aiphonecall.description": "Real-time voice conversation web interface with AI. Uses Web Speech API for voice recognition and custom TTS API for voice synthesis. Complete voice configuration (choice of multiple voices, speed, volume), smooth conversation with pause/resume, and intuitive interface. Multilingual support (French/English). Technologies: Vanilla JavaScript, Web Speech API, Bootstrap 4.",
      "projects.fondataset.description": "Automated bilingual French-Fongbe dataset generator for language model (LLM) training. Natural sentence generation across 12 themes (health, commerce, emotions, proverbs), automated translation via AI APIs, JSONL export ready for fine-tuning. Dual mode: asynchronous Python for experts or Google Sheets interface for community contribution. Data validation with duplicate management. Goal: preserve the Fon language and develop AI for Beninese culture. Technologies: Python 3.8+, Google Apps Script, AI APIs.",
      "projects.voxiai.description": "Automatic dynamic subtitle generation application for short videos (TikTok, Reels, Shorts). Hybrid pipeline combining Faster-Whisper for ultra-fast transcription and Google Gemini 2.5 Flash for contextual correction (punctuation, technical terms). Karaoke rendering with word-by-word highlighting. Modern FastAPI interface with real-time progress tracking via WebSockets. Protected analytics dashboard for usage statistics. Parallel audio/video processing reducing wait time by 50%. Technologies: FastAPI, Faster-Whisper, Gemini API, FFmpeg, SQLite, WebSockets.",

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
      "home.about.intro": "Je suis un Développeur Logiciel et Développeur IA passionné par la transformation d'idées en solutions intelligentes et évolutives. Au fil du temps, j'ai exploré plusieurs technologies et trouvé ma passion dans la création de systèmes d'intelligence artificielle et d'expériences utilisateur innovantes.",
      "home.about.skills": "Je maîtrise",
      "home.about.skills.list": "JavaScript, Python, Machine Learning, Deep Learning et Node.js",
      "home.about.skills.end": "— et j'aime travailler sur des projets d'IA et de développement full-stack.",
      "home.about.interests": "Mes principaux domaines d'intérêt incluent le développement",
      "home.about.interests.list": "d'Applications IA, de Modèles de Machine Learning,",
      "home.about.interests.end": "et l'exploration de nouvelles façons d'intégrer l'intelligence artificielle dans des solutions pratiques.",
      "home.about.tools": "Dès que possible, j'adore créer des projets avec",
      "home.about.tools.python": "Python",
      "home.about.tools.frameworks": "et des frameworks modernes comme",
      "home.about.tools.list": "TensorFlow, PyTorch",
      "home.about.tools.react": "React.js",

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

      // Project Descriptions
      "projects.cvai.description": "Application web d'optimisation de CV utilisant l'IA. Analyse des offres d'emploi pour adapter automatiquement votre CV aux attentes des recruteurs et des ATS. Export PDF format A4 et privacy by design (données uniquement dans le navigateur). Technologies : React 19, TypeScript, Tailwind CSS 4, Express, Puppeteer.",
      "projects.evolutics.description": "Plateforme centralisée d'opportunités professionnelles développée pour le HACKBYIFRI 2026. Hub agrégeant stages, emplois et formations depuis plusieurs sources. Assistant IA intégré pour rédaction de CV optimisés ATS, décryptage du jargon professionnel et conseils personnalisés. CV Builder avec templates modernes, génération de lettres de motivation et filtrage adapté au profil étudiant. Technologies : React 18, TypeScript, Supabase, Google Gemini AI, Tailwind CSS.",
      "projects.zenithai.description": "Plateforme d'analyse de vidéos transformant du contenu vidéo en rapports narratifs structurés. Combine analyse visuelle (YOLOv8 pour détection d'objets), transcription audio (Whisper avec détection automatique de langue) et traitement du langage naturel. Import flexible via fichiers locaux ou URLs (YouTube, TikTok, Twitter). Génération automatique de rapports d'analyse professionnels. Technologies : Gradio, YOLOv8, Whisper, Yt-dlp, Decord, LLM.",
      "projects.aiphonecall.description": "Interface web de conversation vocale avec l'IA en temps réel. Utilise la Web Speech API pour la reconnaissance vocale et une API TTS personnalisée pour la synthèse vocale. Configuration complète de la voix (choix parmi plusieurs voix, vitesse, volume), conversation fluide avec pause/reprise, et interface intuitive. Support multilingue (français/anglais). Technologies : JavaScript Vanilla, Web Speech API, Bootstrap 4.",
      "projects.fondataset.description": "Générateur automatisé de datasets bilingues français-fongbe pour l'entraînement de modèles de langue (LLM). Génération de phrases naturelles sur 12 thématiques (santé, commerce, émotions, proverbes), traduction automatisée via APIs IA, export JSONL prêt pour fine-tuning. Dual mode : Python asynchrone pour experts ou interface Google Sheets pour contribution communautaire. Validation des données avec gestion des doublons. Objectif : préserver la langue Fon et développer l'IA pour la culture béninoise. Technologies : Python 3.8+, Google Apps Script, APIs IA.",
      "projects.voxiai.description": "Application de génération automatique de sous-titres dynamiques pour vidéos courtes (TikTok, Reels, Shorts). Pipeline hybride combinant Faster-Whisper pour transcription ultra-rapide et Google Gemini 2.5 Flash pour correction contextuelle (ponctuation, termes techniques). Rendu karaoke avec surlignage mot par mot. Interface FastAPI moderne avec suivi de progression en temps réel via WebSockets. Dashboard analytique protégé pour statistiques d'usage. Traitement parallèle audio/vidéo réduisant le temps d'attente de 50%. Technologies : FastAPI, Faster-Whisper, Gemini API, FFmpeg, SQLite, WebSockets.",

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
