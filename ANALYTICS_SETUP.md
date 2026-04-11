# 📊 Système d'Analytics - Guide de Configuration

## 🚀 Installation

### 1. Installer les dépendances
Les dépendances ont déjà été ajoutées à `package.json`. Exécute :
```bash
npm install
```

### 2. Configurer Firebase

#### Créer un projet Firebase
1. Va sur [Firebase Console](https://console.firebase.google.com/)
2. Clique sur "Créer un projet"
3. Nomme-le (ex: "Portfolio-Analytics")
4. Accepte les conditions et crée le projet

#### Activer Realtime Database
1. Dans Firebase Console, va à "Realtime Database"
2. Clique sur "Créer une base de données"
3. Choisis la région (ex: `europe-west1`)
4. Sélectionne "Démarrer en mode test" (pour commencer)
5. Clique sur "Activer"

#### Obtenir les clés Firebase
1. Va à "Paramètres du projet" (roue dentée en haut à gauche)
2. Clique sur "Vos applications"
3. Clique sur l'icône `</>` pour créer une app web
4. Nomme l'app "Portfolio"
5. Copie la configuration Firebase

### 3. Configurer les variables d'environnement

Ouvre `.env.local` et remplis les valeurs :

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
REACT_APP_FIREBASE_APP_ID=your_app_id

REACT_APP_ADMIN_TOKEN=ton_token_secret_ici
```

**Exemple :**
```env
REACT_APP_FIREBASE_API_KEY=AIzaSyDxxx...
REACT_APP_FIREBASE_AUTH_DOMAIN=portfolio-analytics.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=portfolio-analytics
REACT_APP_FIREBASE_STORAGE_BUCKET=portfolio-analytics.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
REACT_APP_FIREBASE_DATABASE_URL=https://portfolio-analytics.firebaseio.com
REACT_APP_FIREBASE_APP_ID=1:123456789:web:abc123def456

REACT_APP_ADMIN_TOKEN=mon_token_super_secret_2024
```

### 4. Configurer les règles Firebase

Dans Firebase Console, va à "Realtime Database" → "Règles" et remplace par :

```json
{
  "rules": {
    "analytics": {
      "visits": {
        ".read": true,
        ".write": true,
        "$visit": {
          ".validate": "newData.hasChildren(['timestamp', 'browser', 'os'])"
        }
      }
    }
  }
}
```

⚠️ **Note** : En production, tu devrais restreindre l'accès. Pour maintenant, c'est OK pour tester.

## 📱 Utilisation

### Démarrer l'app
```bash
npm start
```

L'app va automatiquement tracker :
- ✅ Les visites (navigateur, OS, géolocalisation, etc.)
- ✅ Les pages visitées
- ✅ Les clics sur les boutons
- ✅ La durée de session

### Accéder au Dashboard Admin

URL : `http://localhost:3000/admin?token=ton_token_secret_ici`

Remplace `ton_token_secret_ici` par le token que tu as défini dans `.env.local`.

**Exemple :**
```
http://localhost:3000/admin?token=mon_token_super_secret_2024
```

### Sur Vercel

Une fois déployé sur Vercel :
1. Va à "Settings" → "Environment Variables"
2. Ajoute toutes les variables du `.env.local`
3. Redéploie l'app
4. Accède à : `https://ton-portfolio.vercel.app/admin?token=ton_token`

## 📊 Données Trackées

Le système track automatiquement :

| Donnée | Description |
|--------|-------------|
| **Timestamp** | Quand la visite a eu lieu |
| **Navigateur** | Chrome, Firefox, Safari, Edge, etc. |
| **OS** | Windows, macOS, Linux, iOS, Android |
| **Device** | Desktop, Mobile, Tablet |
| **Géolocalisation** | Pays, Ville, Latitude, Longitude |
| **Pages** | Home, Projects, Resume |
| **Clics** | GitHub, LinkedIn, Email, WhatsApp, Demo links |
| **Durée de session** | Temps passé sur le portfolio |
| **Résolution d'écran** | 1920x1080, etc. |
| **Langue** | en-US, fr-FR, etc. |
| **User-Agent** | Infos complètes du navigateur |
| **Referrer** | D'où vient le visiteur |

## 🔒 Sécurité

- Le token admin est stocké dans `.env.local` (pas commité)
- La route `/admin` est protégée par le token
- Firebase Realtime Database utilise des règles de sécurité
- Les données sont en lecture/écriture (à restreindre en production)

## 🐛 Dépannage

### Les données ne s'enregistrent pas
1. Vérifie que `.env.local` est correctement rempli
2. Ouvre la console du navigateur (F12) et cherche les erreurs
3. Vérifie que Firebase Realtime Database est activée
4. Vérifie les règles Firebase

### Le dashboard admin ne charge pas
1. Vérifie que le token est correct
2. Vérifie que `REACT_APP_ADMIN_TOKEN` est défini dans `.env.local`
3. Ouvre la console (F12) pour voir les erreurs

### Erreur "Permission denied"
1. Va à Firebase Console → Realtime Database → Règles
2. Vérifie que les règles permettent la lecture/écriture
3. En mode test, elles devraient être ouvertes

## 📈 Prochaines Étapes

- Ajouter des graphiques plus avancés
- Exporter les données en CSV
- Ajouter des filtres par date
- Ajouter des alertes (ex: 1000 visites)
- Restreindre les règles Firebase en production

## 📞 Support

Si tu as des questions, consulte :
- [Documentation Firebase](https://firebase.google.com/docs)
- [Documentation Recharts](https://recharts.org/)
- [Documentation React Router](https://reactrouter.com/)
