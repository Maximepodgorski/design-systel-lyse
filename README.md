# 🎨 Design System Figma - React

Un système de design React moderne synchronisé avec Figma via MCP (Multi-platform Component).

## ✨ **Fonctionnalités**

- 🎨 **Composants React** : Button, ActionCard et plus à venir
- 🎯 **Variables SCSS** : Système de design tokens primitifs et sémantiques
- 🔗 **Intégration Figma** : Synchronisation via MCP
- 🚀 **Workflow moderne** : TypeScript, Vite, SCSS, tests
- 🔄 **CI/CD** : GitHub Actions avec tests automatiques

## 🚀 **Installation**

```bash
# Cloner le repository
git clone https://github.com/Maximepodgorski/design-systel-lyse.git
cd design-systel-lyse

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🛠️ **Scripts Disponibles**

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run lint         # Vérification du code
npm run format       # Formatage automatique
npm run type-check   # Vérification TypeScript
npm run test         # Exécution des tests
```

## 📁 **Structure du Projet**

```
src/
├── components/          # Composants React
│   ├── Button/         # Composant Button
│   └── ActionCard/     # Composant ActionCard
├── styles/              # Variables SCSS
│   ├── _root-tokens.scss      # Tokens primitifs
│   ├── _semantic-tokens.scss  # Tokens sémantiques
│   └── main.scss              # Styles principaux
└── test/                # Configuration des tests
```

## 🎨 **Composants Disponibles**

### **Button**
Composant bouton avec multiples variantes, tailles et états.

```tsx
import Button from './components/Button/Button';

<Button variant="primary" size="md">
  Cliquez-moi
</Button>
```

### **ActionCard**
Carte d'action avec titre, description et bouton.

```tsx
import ActionCard from './components/ActionCard/ActionCard';

<ActionCard
  title="Titre"
  description="Description"
  buttonText="Action"
  buttonVariant="primary"
/>
```

## 🔧 **Configuration**

### **Variables SCSS**
Le projet utilise un système de variables en 2 niveaux :
- **Root tokens** : Valeurs primitives (couleurs, espacements, etc.)
- **Semantic tokens** : Variables contextuelles utilisant les primitives

### **Workflow de Développement**
- **GitHub** : Versioning et collaboration
- **Linear** : Gestion des tâches (à configurer)
- **Cursor** : Développement avec intégration Linear
- **CI/CD** : Tests et déploiement automatiques

## 📚 **Documentation**

- **Workflow de développement** : `DEVELOPMENT_WORKFLOW.md`
- **Configuration des secrets** : `.github/SECRETS_SETUP.md`
- **Protection des branches** : `.github/branch-protection.md`
- **Résolution des problèmes CI** : `CI_TROUBLESHOOTING.md`

## 🚨 **Statut CI/CD**

✅ **Problème CI résolu !** Le workflow GitHub Actions fonctionne maintenant correctement.

- **Tests automatiques** : ✅ Actifs
- **Linting automatique** : ✅ Actif  
- **Build automatique** : ✅ Actif
- **Déploiement Vercel** : ⏳ En attente de configuration

## 🤝 **Contribution**

1. Créer une branche feature : `git checkout -b feature/nom-composant`
2. Développer et tester localement
3. Commiter avec les conventions : `git commit -m "feat(components): add new component"`
4. Créer une Pull Request sur GitHub

## 📄 **Licence**

Ce projet est sous licence MIT.

---

**🎯 Prêt pour développer des composants de design system !** 🚀

> 💡 **Note** : Le problème CI/CD a été résolu en simplifiant le workflow GitHub Actions. Voir `CI_TROUBLESHOOTING.md` pour plus de détails.
