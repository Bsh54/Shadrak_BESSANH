#!/bin/bash

# Configuration git
git config user.name "Bsh54"
git config user.email "shadrakbsh@gmail.com"

# Commit 1 : Dépendances
git add package.json
git commit -m "Ajouter dépendances Firebase, Recharts et ua-parser-js"

# Commit 2 : Services
git add src/services/
git commit -m "Créer services d'analytics et configuration Firebase"

# Commit 3 : Composants Admin
git add src/components/Admin/
git commit -m "Créer dashboard admin avec graphiques et statistiques"

# Commit 4 : Intégration tracking
git add src/App.js src/i18n.js src/components/Footer.js src/components/Home/ContactSection.js src/components/Projects/ProjectCards.js
git commit -m "Intégrer tracking automatique des visites et clics"

# Commit 5 : Configuration et documentation
git add .env.local ANALYTICS_SETUP.md IMPLEMENTATION_SUMMARY.md
git commit -m "Ajouter configuration Firebase et documentation"

# Push
git push origin master

echo "✅ Tous les commits ont été pushés avec succès !"
