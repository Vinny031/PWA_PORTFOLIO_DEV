# Portfolio Photographe

Portfolio photo professionnel avec Vue.js 3, TypeScript, Node.js/Express et MongoDB.

## 🚀 Technologies

### Frontend
- **Vue.js 3** avec Composition API
- **TypeScript**
- **Vite** (build tool)
- **Vue Router** (navigation)
- **Axios** (API calls)

### Backend
- **Node.js** avec Express
- **TypeScript**
- **MongoDB** avec Mongoose
- **Helmet** (sécurité)
- **Express Rate Limit** (limitation de requêtes)
- **CORS** configuré

## 📦 Installation

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Configurez vos variables d'environnement dans .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
# Configurez VITE_API_URL dans .env si nécessaire
npm run dev
```

## 🛠️ Scripts

### Backend
- `npm run dev` - Démarre le serveur en mode développement
- `npm run build` - Compile le TypeScript
- `npm start` - Démarre le serveur en production

### Frontend
- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Aperçu du build de production

## 📁 Structure

```
├── backend/
│   ├── src/
│   │   ├── config/      # Configuration DB
│   │   ├── models/      # Modèles Mongoose
│   │   ├── routes/      # Routes API
│   │   ├── middleware/  # Middlewares
│   │   └── server.ts    # Point d'entrée
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/  # Composants Vue
│   │   ├── views/       # Pages
│   │   ├── router/      # Configuration du routeur
│   │   ├── services/    # Services API
│   │   ├── types/       # Types TypeScript
│   │   └── App.vue
│   └── package.json
│
└── README.md
```

## 🔒 Sécurité

- Helmet pour les headers HTTP sécurisés
- Rate limiting (100 req/15min par IP)
- CORS configuré
- Validation des entrées avec express-validator
- Variables d'environnement pour les données sensibles

## ♿ Accessibilité

- HTML sémantique
- ARIA labels
- Navigation au clavier
- Contrastes optimisés
- Images avec attributs alt
- Lighthouse-friendly

## 🌐 API Endpoints

### Photos
- `GET /api/photos` - Liste des photos (query: category, limit, skip)
- `GET /api/photos/:id` - Détail d'une photo

### Catégories
- `GET /api/categories` - Liste des catégories
- `GET /api/categories/:slug` - Détail d'une catégorie

## 📱 Responsive

- Mobile-first approach
- Breakpoints: 640px, 768px, 968px
- Navigation mobile avec menu hamburger
- Grille adaptative pour la galerie

## 🎨 Design

Inspiré de portfolios photographiques minimalistes avec:
- Navigation sticky
- Hero section animée
- Galerie en grille responsive
- Effets hover fluides
- Transitions douces
- Palette de couleurs moderne

## 📄 License

MIT
