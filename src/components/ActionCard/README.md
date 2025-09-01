# ActionCard Component

Le composant ActionCard est une carte interactive conçue pour mettre en évidence des informations clés et permettre l'engagement des utilisateurs via un bouton, permettant des ajustements rapides des paramètres ou des actions directes.

## 🎨 **Design Figma**

Ce composant est basé sur le design Figma "Action Card" qui présente :
- Un titre en gras
- Une description explicative
- Un bouton d'action avec différentes variantes
- Un layout responsive avec fond clair et bordure

## 🚀 **Utilisation**

```tsx
import ActionCard from './components/ActionCard/ActionCard';

<ActionCard
  title="Notifications"
  description="Recevoir les mises à jour importantes"
  buttonText="Activer"
  buttonVariant="primary"
  buttonSize="md"
  onButtonClick={() => console.log('Notifications enabled!')}
/>
```

## 📋 **Props**

| Prop | Type | Défaut | Description |
|------|------|---------|-------------|
| `title` | `string` | **Requis** | Titre de la carte |
| `description` | `string` | **Requis** | Description de la carte |
| `buttonText` | `string` | **Requis** | Texte du bouton |
| `buttonVariant` | `'primary' \| 'secondary' \| 'danger' \| 'success' \| 'warning' \| 'neutral'` | `'secondary'` | Variante du bouton |
| `buttonSize` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Taille du bouton |
| `onButtonClick` | `() => void` | `undefined` | Fonction appelée au clic du bouton |
| `className` | `string` | `''` | Classes CSS additionnelles |
| `disabled` | `boolean` | `false` | Désactive la carte et le bouton |

## 🎯 **Variantes de Boutons**

Le composant utilise le composant Button avec toutes ses variantes :
- **Primary** : Bouton principal avec fond sombre
- **Secondary** : Bouton secondaire avec bordure (défaut)
- **Danger** : Bouton d'alerte/danger
- **Success** : Bouton de succès
- **Warning** : Bouton d'avertissement
- **Neutral** : Bouton neutre

## 📱 **Responsive**

- **Desktop** : Layout horizontal avec titre/description à gauche et bouton à droite
- **Mobile** : Layout vertical avec bouton en pleine largeur

## 🎨 **Variables Sémantiques Utilisées**

Le composant utilise parfaitement les variables sémantiques Figma :

- **Background** : `--background-neutral-medium-default`
- **Border** : `--border-selected`, `--border-neutral-medium`
- **Typography** : `--font-family-content`, `--font-weight-accent`, `--font-weight-regular`
- **Spacing** : `--layout-padding-lg`, `--layout-gap-lg`, `--layout-gap-xs`
- **Radius** : `--layout-radius-xl`
- **Colors** : `--text-base-bolder`, `--text-base-moderate`

## 🔗 **Intégration avec Button**

L'ActionCard utilise le composant Button existant, garantissant :
- **Cohérence** visuelle avec le reste du design system
- **Réutilisabilité** des composants
- **Maintenabilité** centralisée des styles de boutons

## 📝 **Exemples d'Usage**

### Carte de Notification
```tsx
<ActionCard
  title="Notifications"
  description="Recevoir les mises à jour importantes"
  buttonText="Activer"
  buttonVariant="primary"
  onButtonClick={() => enableNotifications()}
/>
```

### Carte de Configuration
```tsx
<ActionCard
  title="Mode Sombre"
  description="Passer au thème sombre"
  buttonText="Basculer"
  buttonVariant="neutral"
  onButtonClick={() => toggleDarkMode()}
/>
```

### Carte Désactivée
```tsx
<ActionCard
  title="Sauvegarde"
  description="Sauvegarder automatiquement"
  buttonText="Configurer"
  buttonVariant="success"
  disabled={true}
/>
```

## 🎯 **Cas d'Usage Recommandés**

- **Paramètres utilisateur** : Notifications, thèmes, préférences
- **Actions rapides** : Activer/désactiver des fonctionnalités
- **Configuration** : Options de personnalisation
- **Statuts** : Affichage d'informations avec actions associées

---

**Prêt pour l'intégration MCP Figma !** 🚀
