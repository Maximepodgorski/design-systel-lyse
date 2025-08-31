# 📚 Storybook Setup - Design System Lyse

## 🎉 Configuration Terminée !

Storybook a été installé et configuré avec succès pour votre design system.

## 🚀 Commandes Disponibles

### Développement
```bash
npm run storybook
```
Démarre Storybook en mode développement sur `http://localhost:6006`

### Build de Production
```bash
npm run build-storybook
```
Génère une version statique de Storybook dans le dossier `storybook-static/`

## 📁 Structure Créée

```
.storybook/
├── main.ts              # Configuration principale
├── preview.ts           # Configuration globale (themes, styles)
└── vitest.setup.ts      # Configuration des tests

src/
├── components/
│   ├── Button/
│   │   └── Button.stories.tsx    # Stories du Button
│   └── ActionCard/
│       └── ActionCard.stories.tsx # Stories de l'ActionCard
└── stories/
    ├── DesignSystem.mdx          # Documentation du design system
    └── assets/                   # Assets Storybook
```

## 🎨 Fonctionnalités Configurées

### ✅ Design System Integration
- **Styles SCSS** : Import automatique de `main.scss`
- **Tokens sémantiques** : Tous les composants utilisent les variables CSS
- **Thème cohérent** : Même apparence que votre application

### ✅ Addons Installés
- **@storybook/addon-docs** : Documentation automatique
- **@storybook/addon-a11y** : Tests d'accessibilité
- **@storybook/addon-vitest** : Intégration des tests
- **@chromatic-com/storybook** : Tests visuels

### ✅ Documentation Complète
- **Auto-docs** : Documentation générée automatiquement
- **Stories détaillées** : Cas d'usage et exemples
- **Types TypeScript** : Props documentées
- **Contrôles interactifs** : Modification en temps réel

## 📖 Stories Créées

### 1. Design System/Introduction
Page d'accueil avec :
- Philosophie du design system
- Guide des tokens sémantiques
- Instructions d'utilisation
- Standards d'accessibilité

### 2. Components/Button
Stories complètes pour le Button :
- **Default** : Configuration de base
- **Variants** : Toutes les variantes (primary, secondary, etc.)
- **Sizes** : Toutes les tailles (xs, sm, md, lg, xl)
- **WithIcons** : Boutons avec icônes
- **States** : États visuels (default, hover, pressed, disabled)
- **FullWidth** : Boutons pleine largeur
- **UsageExamples** : Exemples d'utilisation contextuels
- **Interactive** : Tests interactifs
- **LoadingState** : Exemple d'état de chargement

### 3. Components/ActionCard
Stories complètes pour l'ActionCard :
- **Default** : Configuration de base
- **ButtonVariants** : Toutes les variantes de bouton
- **ButtonSizes** : Toutes les tailles de bouton
- **UsageExamples** : Cas d'usage (onboarding, settings, etc.)
- **DisabledState** : État désactivé
- **LongContent** : Gestion du contenu long
- **Interactive** : Tests interactifs
- **ResponsiveLayout** : Démonstration responsive

## 🎯 Navigation Storybook

1. **Design System** → Introduction et documentation
2. **Components** → Documentation des composants
   - Button : Composant de bouton complet
   - ActionCard : Composant de carte avec action

## 🔧 Configuration Avancée

### Ordre des Stories
Les stories sont organisées selon cet ordre :
1. Design System (documentation)
2. Components (composants individuels)
3. Examples (exemples d'usage)

### Tests d'Accessibilité
- Addon **a11y** configuré en mode `todo`
- Tests automatiques sur tous les composants
- Violations affichées dans l'onglet Accessibility

### Tests avec Vitest
```bash
# Lancer les tests Storybook
npx vitest --project=storybook

# Tests avec couverture
npm run test:coverage
```

## 🎨 Personnalisation

### Ajouter un Nouveau Composant
1. Créer le composant dans `src/components/NouveauComposant/`
2. Créer `NouveauComposant.stories.tsx`
3. Les stories apparaîtront automatiquement

### Exemple de Structure Story
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import NouveauComposant from './NouveauComposant';

const meta: Meta<typeof NouveauComposant> = {
  title: 'Components/NouveauComposant',
  component: NouveauComposant,
  parameters: {
    docs: {
      description: {
        component: 'Description du composant...',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Props par défaut
  },
};
```

## 🚀 Démarrage Rapide

1. **Lancer Storybook** :
   ```bash
   npm run storybook
   ```

2. **Ouvrir** `http://localhost:6006`

3. **Explorer** :
   - Commencer par "Design System/Introduction"
   - Tester les composants dans "Components/"
   - Modifier les props avec les contrôles

4. **Développer** :
   - Ajouter vos propres stories
   - Tester l'accessibilité
   - Documenter vos composants

## 📱 Deploy Production

Pour déployer Storybook :
```bash
npm run build-storybook
# Le dossier storybook-static/ contient les fichiers à servir
```

---

**🎉 Votre Storybook est prêt !** Lancez `npm run storybook` pour commencer à explorer vos composants.
