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
      "nav.blog": "Blog",
      "nav.resume": "Resume",

      // Home - Hero Section
      "home.greeting": "Hi There!",
      "home.intro": "I'M",
      "home.name": "BESSANH Shadrak",
      "home.tagline": "I build AI systems for people the market usually overlooks: digital identity, healthcare and African language technology.",
      "home.cta.projects": "View my work",
      "home.cta.contact": "Get in touch",
      "home.available": "Available for opportunities",
      "home.stats.projects": "Projects shipped",
      "home.stats.hackathons": "Hackathons",
      "home.stats.award": "2nd · ID4Africa 2026",

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
      "achievements.sources": "Sources & Proof",
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
      "projects.cvai.description": "Online CV tools ask candidates to upload their resume to an unknown server, then paste the job description, in exchange for a rewrite they usually have to redo by hand. CV-AI runs the same loop entirely in the browser: the document stays on the device, the model sees only what the candidate chooses to show it, and the result exports as a single-page PDF ready to submit. React 19, TypeScript and Puppeteer for the PDF render.",
      "projects.evolutics.description": "West African students piece opportunities together from Facebook posts, forwarded WhatsApp messages and university notice boards, and then rewrite their CV from scratch for each one. Evolutics gathers open internships, jobs and training programmes in one place, and for each listing produces a CV and cover letter tuned to it. React, Supabase and Google Gemini. Built at HACKBYIFRI 2026.",
      "projects.zenithai.description": "Zenith reads a video and writes a structured report of what happened in it. Object detection identifies the actors and the objects on screen, speech transcription captures what is said, and a language model knits the two signals into an account that covers the events in the order they occurred. The goal is to let someone understand a long recording in the time it takes to read a page. Python, YOLOv8 and Whisper.",
      "projects.aiphonecall.description": "A phone-style voice conversation with a language model, held in the browser without an install and without an account. The user taps a button, speaks, and the model answers out loud. It was built to see how far the Web Speech API could carry a real-time voice interface without any native client. Vanilla JavaScript and the Web Speech API.",
      "projects.fondataset.description": "Fon is spoken by several million people in Benin and the surrounding region, but almost no training data exists for it in a form a language model can use. This generator produces parallel French to Fon sentence pairs across themes that reflect how the language is actually spoken: daily life, commerce, health, emotions, proverbs. The output is designed to seed the fine-tuning of smaller open-weight models rather than to replace serious linguistic work. Python and Google Apps Script.",
      "projects.voxiai.description": "Short-form video depends on captions for most of its reach, but hand-timing them is slow and running Whisper alone leaves obvious mistakes on names, acronyms and numbers. Voxi transcribes the clip, lets a language model correct the transcript against context, then burns word-level animated captions directly into the final file. The output formats are tuned for TikTok, Reels and Shorts. FastAPI, Faster-Whisper and Google Gemini.",
      "projects.minerva.description": "Minerva turns any body of text, a lecture note, a paper, a chapter, into a structured course the learner can work through at their own pace, with quizzes and explanations threaded in. A 3D tutor can also hold a spoken conversation about the material, which helps when a point is subtle enough that reading it once is not quite enough. Built with Next.js, TypeScript, DeepSeek and Three.js.",
      "projects.oreus.description": "Commercial subtitling tools handle English, French and the usual twenty languages well, and skip over most African ones. Oreus transcribes the audio track of a video, translates the result into the target language, and burns the subtitles back into the file. It gives African creators a workable path when their language sits on the list the big platforms left out. Python, Flask, Whisper and FFmpeg.",
      "projects.nawiri.description": "Social protection programmes exist in Benin, Senegal and Ghana, but most families who qualify never hear about them: the information is scattered, often written in a language they do not read, and spread across offices that rarely coordinate. Nawiri asks a few questions in the family's own language, then returns the programmes they are eligible for, the documents needed and the office to contact. It handles Fon, Wolof, Twi, French and English, and uses Next.js with Google Gemini to reason over the programme rules.",
      "projects.neurobridge.description": "Standard communication tools for non-verbal and minimally-verbal autistic users are often expensive, cloud-dependent, and voice the user in the third person. NeuroBridge lets the user assemble short first-person sentences from pictograms, which the device speaks out loud locally, without sending anything to a server. A companion view helps caregivers notice the patterns a user comes back to, and plan from there. Built with Next.js, React 19 and the Web Speech API.",
      "projects.cottonpay.description": "Beninese cotton producers deliver their harvest to cooperatives weeks before they are paid, and keep no personal record of the transaction. When they later try to prove their income to open a bank account or request credit, they cannot. CottonPay records each delivery as a verifiable credential signed on the BCovrin ledger, authenticated through eSignet and MOSIP, and stored in the producer's mobile wallet. React on the client, with the identity layer built on eSignet and MOSIP.",
      "projects.neurosynthetix.description": "Patients rarely know which clinical trials are actively recruiting for their condition, and the registries that could tell them are spread across institutions and written in medical language. Neuro-Synthetix is a voice assistant that answers eligibility questions in the user's own words, grounded in a Neo4j knowledge graph built from several public registries. DeepSeek handles the reasoning, Sarvam carries the voice. Built at HackHazards 26.",
      "projects.phytovance.description": "Diseases that mostly affect African populations attract less pharmaceutical investment, and the compounds that might matter for them are often found in regional plants that have never been formally screened. Phytovance puts a virtual docking tool in the hands of researchers, so plant-derived molecules can be tested against known disease targets before any wet-lab work is committed. Python.",
      "projects.aegisflow.description": "Anti-money-laundering compliance requires screening transactions for risk signals, which usually means exposing the underlying user data to the entity doing the screening. AegisFlow runs the screening inside a confidential compute environment, so FXRP inflows on Flare can be checked against risk rules without the screener ever seeing the sender, the receiver or the amount in clear. TypeScript. Built at the Flare Summer Signal hackathon.",
      "projects.payvault.description": "On-chain payroll is attractive for international teams, but very few employees want their salary visible to every passerby and every colleague. PayVault runs payroll and treasury operations inside iExec's Nox confidential compute layer, so a company can pay salaries and move funds on chain without the amounts being public. TypeScript. Built at the iExec WTF Hackathon.",
      "projects.sesion.description": "A mini-app on Nimiq Pay for booking fitness and wellness sessions. Learners find a coach, book a slot, and settle the payment directly in NIM at the moment of booking, with no intermediary and no clearing delay. The whole flow sits inside Nimiq Pay, so the coach keeps the full amount. JavaScript and the Nimiq Pay SDK.",
      "projects.horus.description": "A Telegram companion for the 2026 FIFA World Cup. Horus pushes live match notifications, reads them out as voice notes for users busy with something else, and lets them ask follow-up questions in natural language. The context behind each answer is pulled from Solana data streams in real time, which keeps the bot in sync with on-chain prediction markets as the match unfolds.",
      "projects.gatekeep.description": "Cold outreach floods inboxes because sending a message costs nothing. Gatekeep asks unknown senders to lock a small refundable deposit before writing, settled on Monad. If the recipient replies, the deposit comes back. If they mark the message as spam, the deposit is redirected to public goods funding. The outcome is a channel where strangers can still reach the recipient when they really mean to. TypeScript.",

      // Hackathons section
      "projects.hackathons.title": "Hackathon",
      "projects.hackathons.highlight": "Projects",
      "projects.hackathons.subtitle": "Projects shipped under hackathon deadlines, across Web3, AI and social impact tracks.",
      "badge.id4africa": "2nd · ID4Africa 2026",
      "badge.hackhazards": "HackHazards 26",
      "badge.hackathon": "Hackathon",
      "badge.flare": "Flare Hackathon",
      "badge.iexec": "iExec Hackathon",
      "badge.nimiq": "Nimiq Hackathon",
      "badge.solana": "Solana Hackathon",
      "badge.monad": "Monad Hackathon",

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
      "preview.blog.title": "Latest",
      "preview.blog.highlight": "Articles",
      "preview.blog.subtitle": "Notes on building AI for real-world impact.",
      "preview.blog.seeAll": "Read the blog →",

      // Resume
      "resume.download": "Download Resume",

      // Footer
      "footer.developed": "Developed by",
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
      "nav.blog": "Blog",
      "nav.resume": "CV",

      // Home - Hero Section
      "home.greeting": "Bonjour !",
      "home.intro": "Je suis",
      "home.name": "BESSANH Shadrak",
      "home.tagline": "Je construis des systèmes d'IA pour des publics que le marché ignore souvent : identité numérique, santé et technologies des langues africaines.",
      "home.cta.projects": "Voir mes projets",
      "home.cta.contact": "Me contacter",
      "home.available": "Disponible pour des opportunités",
      "home.stats.projects": "Projets livrés",
      "home.stats.hackathons": "Hackathons",
      "home.stats.award": "2e · ID4Africa 2026",

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
      "achievements.sources": "Sources & Preuves",
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
      "projects.cvai.description": "Les outils de CV en ligne demandent aux candidats d'envoyer leur CV sur un serveur inconnu, puis d'y coller l'annonce d'emploi, pour un résultat qu'ils doivent souvent reprendre à la main. CV-AI exécute la même boucle entièrement dans le navigateur : le document ne quitte pas l'appareil, le modèle ne voit que le texte que le candidat choisit de lui montrer, et le résultat s'exporte en PDF d'une page prêt à être envoyé. React 19, TypeScript et Puppeteer pour le rendu PDF.",
      "projects.evolutics.description": "Les étudiants d'Afrique de l'Ouest repèrent leurs opportunités dans des posts Facebook, des messages WhatsApp transférés et des tableaux d'affichage universitaires, puis réécrivent leur CV à partir de zéro pour chacune. Evolutics rassemble en un seul endroit les offres de stage, d'emploi et de formation ouvertes, et produit pour chaque annonce un CV et une lettre de motivation ajustés. React, Supabase et Google Gemini. Réalisé lors de HACKBYIFRI 2026.",
      "projects.zenithai.description": "Zenith lit une vidéo et en rédige un compte rendu structuré de ce qui s'y est passé. La détection d'objets identifie les acteurs et les éléments à l'écran, la transcription de la parole capte ce qui est dit, et un modèle de langue relie les deux signaux en un récit qui couvre les événements dans leur ordre d'apparition. L'idée est de permettre de comprendre un enregistrement long dans le temps de lecture d'une page. Python, YOLOv8 et Whisper.",
      "projects.aiphonecall.description": "Une conversation vocale avec un modèle de langue, dans le navigateur, sans installation et sans compte, dans un format proche d'un appel téléphonique. L'utilisateur appuie sur un bouton, parle, et le modèle répond à voix haute. Le projet cherchait à mesurer jusqu'où la Web Speech API pouvait porter une interface vocale temps réel sans aucun client natif. JavaScript et la Web Speech API.",
      "projects.fondataset.description": "Le fon est parlé par plusieurs millions de personnes au Bénin et dans la sous-région, mais il n'existe presque aucune donnée d'entraînement pour cette langue dans un format exploitable par un modèle. Ce générateur produit des paires de phrases parallèles français vers fon sur des thèmes qui reflètent l'usage réel de la langue : vie quotidienne, commerce, santé, émotions, proverbes. La sortie est pensée pour amorcer le fine-tuning de petits modèles ouverts, pas pour remplacer un travail linguistique de fond. Python et Google Apps Script.",
      "projects.voxiai.description": "Les vidéos courtes dépendent des sous-titres pour une grande partie de leur audience, mais les caler à la main prend du temps et Whisper seul se trompe souvent sur les noms, les sigles et les chiffres. Voxi transcrit le clip, laisse un modèle de langue corriger la transcription en contexte, puis incruste des sous-titres animés mot à mot dans le fichier final. Les formats de sortie sont calibrés pour TikTok, Reels et Shorts. FastAPI, Faster-Whisper et Google Gemini.",
      "projects.minerva.description": "Minerva transforme n'importe quel texte, une note de cours, un article, un chapitre, en un parcours structuré que l'apprenant peut suivre à son rythme, avec quiz et explications intégrés. Un tuteur 3D peut aussi tenir une conversation à voix haute sur le contenu, ce qui aide quand un point est assez subtil pour qu'une lecture unique ne suffise pas. Next.js, TypeScript, DeepSeek et Three.js.",
      "projects.oreus.description": "Les outils commerciaux de sous-titrage traitent bien l'anglais, le français et la vingtaine de langues attendues, puis sautent la plupart des langues africaines. Oreus transcrit la piste audio d'une vidéo, traduit le résultat dans la langue cible, et réincruste les sous-titres dans le fichier. Il offre un chemin viable aux créateurs africains dont la langue figure dans la liste que les grandes plateformes ont laissée de côté. Python, Flask, Whisper et FFmpeg.",
      "projects.nawiri.description": "Des programmes de protection sociale existent au Bénin, au Sénégal et au Ghana, mais la plupart des familles qui y ont droit n'en entendent jamais parler : l'information est dispersée, souvent dans une langue qu'elles ne lisent pas, et répartie entre des bureaux qui se coordonnent peu. Nawiri pose quelques questions dans la langue de la famille, puis renvoie les programmes auxquels elle est éligible, les documents nécessaires et le bureau à contacter. Prend en charge le fon, le wolof, le twi, le français et l'anglais. Next.js et Google Gemini pour raisonner sur les règles de chaque programme.",
      "projects.neurobridge.description": "Les outils de communication pour personnes autistes non verbales ou peu verbales sont souvent coûteux, dépendants du cloud, et s'expriment à la troisième personne. NeuroBridge permet d'assembler de courtes phrases à la première personne à partir de pictogrammes, que l'appareil énonce à voix haute en local, sans rien envoyer à un serveur. Une vue complémentaire aide les aidants à repérer les motifs d'usage sur lesquels l'utilisateur revient, et à construire à partir de là. Next.js, React 19 et la Web Speech API.",
      "projects.cottonpay.description": "Les producteurs de coton béninois livrent leur récolte aux coopératives plusieurs semaines avant d'être payés, sans trace personnelle de la transaction. Lorsqu'ils cherchent ensuite à justifier leurs revenus pour ouvrir un compte bancaire ou demander un crédit, ils ne le peuvent pas. CottonPay enregistre chaque livraison comme justificatif vérifiable signé sur le registre BCovrin, authentifié via eSignet et MOSIP, et conservé dans le portefeuille mobile du producteur. React côté client, la couche d'identité repose sur eSignet et MOSIP.",
      "projects.neurosynthetix.description": "Les patients savent rarement quels essais cliniques recrutent pour leur pathologie, et les registres qui pourraient le leur dire sont dispersés entre institutions et rédigés dans un langage médical. Neuro-Synthetix est un assistant vocal qui répond aux questions d'éligibilité dans les mots de l'utilisateur, à partir d'un graphe de connaissances Neo4j construit sur plusieurs registres publics. DeepSeek pour le raisonnement, Sarvam pour la voix. Réalisé au HackHazards 26.",
      "projects.phytovance.description": "Les maladies qui touchent principalement les populations africaines attirent moins d'investissement pharmaceutique, et les composés qui pourraient compter pour elles se trouvent souvent dans des plantes régionales jamais criblées formellement. Phytovance met un outil de docking virtuel entre les mains des chercheurs, pour tester des molécules issues de plantes contre des cibles pathologiques connues avant d'engager le moindre travail de paillasse. Python.",
      "projects.aegisflow.description": "La conformité anti-blanchiment impose de contrôler les transactions contre des signaux de risque, ce qui revient habituellement à exposer les données utilisateurs à l'entité qui effectue le contrôle. AegisFlow exécute ce contrôle à l'intérieur d'un environnement de calcul confidentiel : les flux FXRP sur Flare passent les règles de risque sans que le contrôleur ne voie l'émetteur, le destinataire ou le montant en clair. TypeScript. Réalisé au hackathon Flare Summer Signal.",
      "projects.payvault.description": "La paie on-chain intéresse les équipes internationales, mais très peu de salariés souhaitent que leur rémunération soit visible pour chaque passant et chaque collègue. PayVault exécute la paie et la gestion de trésorerie à l'intérieur de la couche de calcul confidentiel Nox d'iExec, pour qu'une entreprise verse les salaires et déplace ses fonds on chain sans que les montants ne soient publics. TypeScript. Réalisé au iExec WTF Hackathon.",
      "projects.sesion.description": "Une mini-application sur Nimiq Pay pour réserver des séances de fitness et de bien-être. L'apprenant trouve un coach, réserve un créneau et règle le paiement directement en NIM au moment de la réservation, sans intermédiaire et sans délai de compensation. Tout le parcours tient à l'intérieur de Nimiq Pay, et le coach conserve la totalité du montant. JavaScript et le SDK Nimiq Pay.",
      "projects.horus.description": "Un compagnon Telegram pour la Coupe du Monde FIFA 2026. Horus envoie les notifications de matchs en direct, les restitue en notes vocales pour les utilisateurs occupés, et permet des questions de suivi en langage naturel. Le contexte derrière chaque réponse est tiré en temps réel de flux de données Solana, ce qui garde le bot en phase avec les marchés de prédiction on-chain au fil du match.",
      "projects.gatekeep.description": "Le démarchage à froid sature les boîtes mail parce qu'envoyer un message ne coûte rien. Gatekeep demande aux expéditeurs inconnus de déposer une petite caution remboursable avant d'écrire, réglée sur Monad. Si le destinataire répond, la caution revient. S'il signale le message comme spam, la caution est redirigée vers le financement de biens publics. Le résultat est un canal où les inconnus peuvent toujours joindre le destinataire, quand ils le pensent vraiment. TypeScript.",

      // Section Hackathons
      "projects.hackathons.title": "Projets de",
      "projects.hackathons.highlight": "Hackathons",
      "projects.hackathons.subtitle": "Projets livrés sous contrainte de temps, lors de hackathons Web3, IA et à impact social.",
      "badge.id4africa": "2e · ID4Africa 2026",
      "badge.hackhazards": "HackHazards 26",
      "badge.hackathon": "Hackathon",
      "badge.flare": "Flare Hackathon",
      "badge.iexec": "iExec Hackathon",
      "badge.nimiq": "Nimiq Hackathon",
      "badge.solana": "Solana Hackathon",
      "badge.monad": "Monad Hackathon",

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
      "preview.blog.title": "Derniers",
      "preview.blog.highlight": "Articles",
      "preview.blog.subtitle": "Mes notes sur la création d'IA à impact concret.",
      "preview.blog.seeAll": "Lire le blog →",

      // Resume
      "resume.download": "Télécharger CV",

      // Footer
      "footer.developed": "Développé par",
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
