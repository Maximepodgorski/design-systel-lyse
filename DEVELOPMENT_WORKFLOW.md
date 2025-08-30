# 🚀 Workflow de Développement - Design System Figma

Ce document décrit le workflow complet de développement pour le projet Design System Figma, incluant GitHub, Linear et Cursor.

## 🎯 **Vue d'ensemble du Workflow**

```
Linear Issue → GitHub Branch → Development → PR → Review → Merge → Deploy
```

## 📋 **1. Gestion des Tâches avec Linear**

### **Création d'une Issue**
1. Aller sur [Linear.app](https://linear.app)
2. Créer une nouvelle issue avec le template approprié
3. Assigner la priorité et les labels
4. Estimer le temps nécessaire

### **Templates d'Issues Disponibles**
- **🚀 Demande de fonctionnalité** : Pour les nouvelles fonctionnalités
- **🐛 Rapport de bug** : Pour les corrections de bugs
- **📚 Documentation** : Pour les améliorations de documentation

### **Labels et Priorités**
- **Labels** : Component Development, Figma Integration, Design System, Documentation, Enhancement, Bug Fix
- **Priorités** : Low, Medium, High, Urgent

## 🔄 **2. Workflow Git**

### **Branches**
- `main` : Code de production
- `develop` : Branche de développement
- `feature/component-name` : Nouvelles fonctionnalités
- `fix/bug-description` : Corrections de bugs
- `docs/documentation-name` : Documentation

### **Conventions de Commits**
Utiliser [Conventional Commits](https://www.conventionalcommits.org/) :

```bash
# Format
<type>(<scope>): <description>

# Exemples
feat(components): add new Button component
fix(styles): resolve CSS variable issue
docs(readme): update component documentation
style(button): format SCSS code
refactor(components): simplify Button logic
```

### **Types de Commits**
- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `docs` : Documentation
- `style` : Formatage
- `refactor` : Refactoring
- `perf` : Performance
- `test` : Tests
- `chore` : Maintenance

### **Scopes**
- `components` : Composants React
- `styles` : Styles SCSS/CSS
- `variables` : Variables de design system
- `figma` : Intégration Figma
- `docs` : Documentation
- `config` : Configuration
- `deps` : Dépendances
- `ci` : CI/CD
- `build` : Build

## 🛠️ **3. Développement Local**

### **Installation des Dépendances**
```bash
npm install
```

### **Scripts Disponibles**
```bash
# Développement
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualisation du build

# Qualité du code
npm run lint         # Vérification ESLint
npm run lint:fix     # Correction automatique ESLint
npm run type-check   # Vérification TypeScript
npm run format       # Formatage Prettier
npm run format:check # Vérification du formatage

# Tests
npm run test         # Exécution des tests
npm run test:ui      # Interface de tests
npm run test:coverage # Couverture de tests

# Git
npm run commit       # Commit interactif
npm run prepare      # Installation des hooks Husky
```

### **Hooks Git (Husky)**
- **pre-commit** : Vérification du linting et du build
- **commit-msg** : Vérification du format des commits

## 🔍 **4. Tests et Qualité**

### **Tests avec Vitest**
```bash
# Exécution des tests
npm run test

# Tests avec interface graphique
npm run test:ui

# Couverture de tests
npm run test:coverage
```

### **Linting et Formatage**
```bash
# Vérification du code
npm run lint
npm run format:check

# Correction automatique
npm run lint:fix
npm run format
```

### **Vérification TypeScript**
```bash
npm run type-check
```

## 🚀 **5. Pull Requests et Review**

### **Création d'une PR**
1. Créer une branche depuis `develop`
2. Développer la fonctionnalité
3. Pousser la branche et créer une PR
4. Utiliser le template de PR

### **Template de PR**
- Description de la fonctionnalité
- Type de changement
- Issue liée
- Screenshots si applicable
- Tests effectués
- Checklist de qualité

### **Review Process**
1. **Auto-review** : Vérifier son propre code
2. **Code review** : Demander une review
3. **Tests** : S'assurer que tous les tests passent
4. **Merge** : Une fois approuvé

## 🚀 **6. Déploiement**

### **Environnements**
- **Preview** : Déploiement automatique pour chaque PR
- **Production** : Déploiement automatique depuis `main`

### **GitHub Actions**
- **CI** : Tests, linting, build
- **Deploy Preview** : Déploiement Vercel pour les PR
- **Deploy Production** : Déploiement Vercel depuis main

## 📱 **7. Intégration Cursor**

### **Configuration Cursor**
1. Installer l'extension Linear pour Cursor
2. Configurer l'API key Linear
3. Connecter le projet GitHub

### **Workflow Cursor + Linear**
1. **Créer une issue** dans Linear
2. **Ouvrir l'issue** dans Cursor
3. **Développer** la fonctionnalité
4. **Commiter** avec les conventions
5. **Pousser** et créer la PR
6. **Merger** et déployer

## 🎨 **8. Workflow Design System**

### **Nouveau Composant**
1. **Analyser** le design Figma
2. **Créer** le composant React
3. **Implémenter** les styles SCSS
4. **Utiliser** les variables sémantiques
5. **Tester** le composant
6. **Documenter** le composant

### **Intégration Figma MCP**
1. **Récupérer** les variables Figma
2. **Synchroniser** les styles
3. **Vérifier** la cohérence
4. **Tester** l'intégration

## 🔧 **9. Configuration et Maintenance**

### **Fichiers de Configuration**
- `.linear/linear.yml` : Configuration Linear
- `.github/workflows/ci.yml` : GitHub Actions
- `.commitlintrc.js` : Règles de commits
- `.prettierrc` : Formatage du code
- `eslint.config.js` : Règles de linting
- `vitest.config.ts` : Configuration des tests

### **Dépendances de Développement**
- **Husky** : Hooks Git
- **Commitlint** : Validation des commits
- **Prettier** : Formatage du code
- **ESLint** : Linting du code
- **Vitest** : Framework de tests
- **Commitizen** : Commits interactifs

## 📚 **10. Ressources et Documentation**

### **Liens Utiles**
- [Linear Documentation](https://linear.app/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Vitest Documentation](https://vitest.dev/)
- [GitHub Actions](https://docs.github.com/en/actions)

### **Support et Questions**
- Créer une issue dans le projet
- Consulter la documentation Linear
- Vérifier les logs GitHub Actions

---

**🎯 Prêt pour un développement efficace et organisé !** 🚀
