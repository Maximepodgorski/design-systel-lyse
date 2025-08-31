import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';

// Mock function pour les actions
const fn = () => () => console.log('Action triggered');

// Icône de test pour les exemples
const TestIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM7 4a1 1 0 112 0v4a1 1 0 11-2 0V4zM8 10a1 1 0 100 2 1 1 0 000-2z"/>
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Le composant Button fait partie du design system et utilise les tokens sémantiques.

## Fonctionnalités

- **6 variantes** : primary, secondary, danger, success, warning, neutral
- **5 tailles** : xs, sm, md, lg, xl
- **4 états** : default, hover, pressed, disabled
- **Support des icônes** : position gauche ou droite
- **Option full-width** : pour les boutons pleine largeur
- **Accessibilité** : support complet des standards a11y

## Variables SCSS utilisées

Le composant utilise les tokens sémantiques du design system :
- \`--button-*\` pour les couleurs et états
- \`--border-*\` pour les bordures
- \`--text-*\` pour les couleurs de texte
- \`--layout-*\` pour les espacements
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral'],
      description: 'Variante du bouton qui détermine son apparence',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Taille du bouton',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'pressed', 'disabled'],
      description: 'État visuel du bouton (pour les démonstrations)',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Position de l\'icône par rapport au texte',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Bouton pleine largeur',
    },
    disabled: {
      control: 'boolean',
      description: 'Bouton désactivé',
    },
    onClick: {
      action: 'clicked',
      description: 'Fonction appelée lors du clic',
    },
  },
  args: {
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Histoire par défaut
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

// Toutes les variantes
export const Variants: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="neutral">Neutral</Button>
    </div>
  ),
};

// Toutes les tailles
export const Sizes: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

// Avec icônes
export const WithIcons: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button icon={<TestIcon />} iconPosition="left">
        Icône à gauche
      </Button>
      <Button icon={<TestIcon />} iconPosition="right" variant="secondary">
        Icône à droite
      </Button>
      <Button icon={<TestIcon />} iconPosition="left" variant="danger" size="sm">
        Petit avec icône
      </Button>
    </div>
  ),
};

// États
export const States: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button state="default">Default</Button>
      <Button state="hover">Hover</Button>
      <Button state="pressed">Pressed</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

// Boutons pleine largeur
export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Button fullWidth variant="primary">
          Bouton Primary Pleine Largeur
        </Button>
        <Button fullWidth variant="secondary">
          Bouton Secondary Pleine Largeur
        </Button>
        <Button fullWidth variant="danger" icon={<TestIcon />}>
          Bouton avec Icône Pleine Largeur
        </Button>
      </div>
    </div>
  ),
};

// Exemples d'usage
export const UsageExamples: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
Exemples d'utilisation courante du composant Button dans différents contextes.
        `,
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Actions principales */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 'bold' }}>
          Actions principales
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary">Sauvegarder</Button>
          <Button variant="secondary">Annuler</Button>
        </div>
      </div>

      {/* Actions destructives */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 'bold' }}>
          Actions destructives
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="danger">Supprimer</Button>
          <Button variant="danger" size="sm">
            Supprimer l'élément
          </Button>
        </div>
      </div>

      {/* Actions de statut */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 'bold' }}>
          Actions de statut
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="success">Valider</Button>
          <Button variant="warning">Attention</Button>
          <Button variant="neutral">Neutre</Button>
        </div>
      </div>

      {/* Avec icônes contextuelles */}
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 'bold' }}>
          Avec icônes contextuelles
        </h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" icon={<TestIcon />}>
            Ajouter
          </Button>
          <Button variant="secondary" icon={<TestIcon />} iconPosition="right">
            Exporter
          </Button>
          <Button variant="neutral" icon={<TestIcon />} size="sm">
            Info
          </Button>
        </div>
      </div>
    </div>
  ),
};

// Tests interactifs
export const Interactive: Story = {
  args: {
    children: 'Cliquez-moi !',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: `
Bouton interactif pour tester les événements et les interactions. 
Ouvrez les **Actions** dans le panneau Storybook pour voir les événements déclenchés.
        `,
      },
    },
  },
};

// Bouton avec état loading (exemple avancé)
export const LoadingState: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
Exemple d'implémentation d'un état de chargement avec le composant Button.
        `,
      },
    },
  },
  render: () => {
    const LoadingIcon = () => (
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 16 16" 
        fill="currentColor"
        style={{ animation: 'spin 1s linear infinite' }}
      >
        <path d="M8 0a8 8 0 000 16 8 8 0 000-16zM8 2a6 6 0 110 12 6 6 0 010-12z" opacity="0.3"/>
        <path d="M8 0a8 8 0 018 8h-2a6 6 0 00-6-6V0z"/>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </svg>
    );

    return (
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button variant="primary" icon={<LoadingIcon />} disabled>
          Chargement...
        </Button>
        <Button variant="secondary" icon={<LoadingIcon />} disabled>
          Traitement
        </Button>
      </div>
    );
  },
};
