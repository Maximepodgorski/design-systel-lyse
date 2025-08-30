# Design System Figma - React

Projet React pour créer des composants de design system synchronisés avec Figma via le MCP (Multi-platform Component).

## 🚀 **Structure du Projet**

```
src/
├── components/          # Composants React
│   └── Button/         # Composant Button (exemple)
├── styles/             # Variables SCSS
│   ├── _root-tokens.scss      # Variables primitives
│   ├── _semantic-tokens.scss  # Variables sémantiques
│   └── main.scss              # Styles principaux
├── App.tsx             # Composant principal
└── main.tsx            # Point d'entrée
```

## 🎨 **Architecture des Variables**

### **Niveau 1 : Root Tokens** (`_root-tokens.scss`)
- **Couleurs** : Valeurs hexadécimales brutes
- **Typographie** : Familles, tailles, hauteurs de ligne, espacements
- **Espacements** : Système de spacing cohérent
- **Bordures** : Largeurs et rayons
- **Ombres** : Valeurs de position et de flou
- **Grid** : Colonnes et gouttières

### **Niveau 2 : Semantic Tokens** (`_semantic-tokens.scss`)
- **Backgrounds** : Contexte d'usage (base, brand, danger, success, warning)
- **Borders** : Bordures sémantiques
- **Icons** : Couleurs d'icônes par contexte
- **Links** : États des liens
- **Shadows** : Ombres par contexte
- **Text** : Couleurs de texte par contexte
- **Layout** : Variables de mise en page
- **Typography** : Variables typographiques sémantiques

## 🛠️ **Installation**

```bash
npm install
```

## 🚀 **Développement**

```bash
npm run dev
```

## 🏗️ **Build**

```bash
npm run build
```

## 🔗 **Intégration Figma MCP**

Le projet est configuré pour utiliser le MCP Figma pour :
- Récupérer les variables directement depuis Figma
- Synchroniser les composants avec les designs
- Maintenir la cohérence entre design et code

## 📝 **Prochaines Étapes**

1. **Synchronisation MCP** : Connexion avec Figma
2. **Création de composants** : À partir des designs Figma
3. **Tests et validation** : Vérification de la cohérence

---

**Prêt pour l'intégration MCP Figma !** 🎯
