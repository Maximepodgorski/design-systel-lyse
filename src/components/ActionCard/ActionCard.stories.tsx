import type { Meta, StoryObj } from '@storybook/react-vite';
import ActionCard from './ActionCard';

// Mock function pour les actions
const fn = () => () => console.log('Action triggered');

const meta: Meta<typeof ActionCard> = {
  title: 'Components/ActionCard',
  component: ActionCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Le composant ActionCard présente du contenu avec une action associée. Il utilise le composant Button en interne et s'intègre parfaitement dans le design system.

## Fonctionnalités

- **Titre et description** : Structure claire de l'information
- **Action intégrée** : Utilise le composant Button avec toutes ses variantes
- **Responsive** : S'adapte aux différentes tailles d'écran
- **Personnalisable** : Support des variantes et tailles du bouton
- **Accessible** : Structure sémantique avec heading et paragraphe

## Variables SCSS utilisées

Le composant utilise les tokens sémantiques du design system :
- \`--background-*\` pour les arrière-plans
- \`--border-*\` pour les bordures
- \`--text-*\` pour les couleurs de texte
- \`--layout-*\` pour les espacements
- \`--border-radius-*\` pour les arrondis

## Note sur le styling récent

Ce composant a récemment été mis à jour avec de nouveaux tokens :
- Border : \`border-default\` → \`border-selected\`
- Background : \`background-neutral-faint-default\` → \`background-neutral-faint-hover\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre de la carte',
    },
    description: {
      control: 'text',
      description: 'Description détaillée',
    },
    buttonText: {
      control: 'text',
      description: 'Texte du bouton d\'action',
    },
    buttonVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral'],
      description: 'Variante du bouton',
    },
    buttonSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Taille du bouton',
    },
    disabled: {
      control: 'boolean',
      description: 'État désactivé',
    },
    onButtonClick: {
      action: 'button clicked',
      description: 'Fonction appelée lors du clic sur le bouton',
    },
  },
  args: {
    onButtonClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Histoire par défaut
export const Default: Story = {
  args: {
    title: 'Action Card Titre',
    description: 'Voici une description détaillée de cette action card. Elle explique le contexte et guide l\'utilisateur vers l\'action appropriée.',
    buttonText: 'Action',
    buttonVariant: 'secondary',
    buttonSize: 'sm',
  },
};

// Différentes variantes de boutons
export const ButtonVariants: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
      gap: '24px',
      maxWidth: '1200px'
    }}>
      <ActionCard
        title="Action Primaire"
        description="Cette carte utilise un bouton primaire pour les actions principales."
        buttonText="Action principale"
        buttonVariant="primary"
      />
      <ActionCard
        title="Action Secondaire"
        description="Cette carte utilise un bouton secondaire pour les actions moins importantes."
        buttonText="Action secondaire"
        buttonVariant="secondary"
      />
      <ActionCard
        title="Action Dangereuse"
        description="Cette carte utilise un bouton danger pour les actions destructives."
        buttonText="Supprimer"
        buttonVariant="danger"
      />
      <ActionCard
        title="Action de Succès"
        description="Cette carte utilise un bouton success pour les actions positives."
        buttonText="Valider"
        buttonVariant="success"
      />
      <ActionCard
        title="Action d'Avertissement"
        description="Cette carte utilise un bouton warning pour les actions nécessitant attention."
        buttonText="Attention"
        buttonVariant="warning"
      />
      <ActionCard
        title="Action Neutre"
        description="Cette carte utilise un bouton neutre pour les actions informatives."
        buttonText="Informations"
        buttonVariant="neutral"
      />
    </div>
  ),
};

// Différentes tailles de boutons
export const ButtonSizes: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '20px',
      maxWidth: '1000px'
    }}>
      <ActionCard
        title="Bouton Extra Small"
        description="Action card avec un bouton de taille xs."
        buttonText="Action XS"
        buttonVariant="primary"
        buttonSize="xs"
      />
      <ActionCard
        title="Bouton Small"
        description="Action card avec un bouton de taille sm (par défaut)."
        buttonText="Action SM"
        buttonVariant="primary"
        buttonSize="sm"
      />
      <ActionCard
        title="Bouton Medium"
        description="Action card avec un bouton de taille md."
        buttonText="Action MD"
        buttonVariant="primary"
        buttonSize="md"
      />
      <ActionCard
        title="Bouton Large"
        description="Action card avec un bouton de taille lg."
        buttonText="Action LG"
        buttonVariant="primary"
        buttonSize="lg"
      />
      <ActionCard
        title="Bouton Extra Large"
        description="Action card avec un bouton de taille xl."
        buttonText="Action XL"
        buttonVariant="primary"
        buttonSize="xl"
      />
    </div>
  ),
};

// Cas d'usage typiques
export const UsageExamples: Story = {
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: `
Exemples d'utilisation courante du composant ActionCard dans différents contextes d'interface.
        `,
      },
    },
  },
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
      gap: '24px',
      maxWidth: '1200px'
    }}>
      {/* Onboarding */}
      <ActionCard
        title="Créer votre premier projet"
        description="Commencez dès maintenant en créant votre premier projet. Notre assistant vous guidera à travers les étapes essentielles."
        buttonText="Créer un projet"
        buttonVariant="primary"
        buttonSize="md"
      />

      {/* Feature promotion */}
      <ActionCard
        title="Nouvelles fonctionnalités disponibles"
        description="Découvrez les dernières améliorations de notre plateforme et comment elles peuvent vous aider à être plus productif."
        buttonText="Découvrir"
        buttonVariant="secondary"
        buttonSize="sm"
      />

      {/* Settings */}
      <ActionCard
        title="Configurez votre profil"
        description="Personnalisez votre expérience en configurant vos préférences et informations de profil."
        buttonText="Configurer"
        buttonVariant="neutral"
        buttonSize="sm"
      />

      {/* Upgrade */}
      <ActionCard
        title="Passez au plan Pro"
        description="Débloquez toutes les fonctionnalités avancées et augmentez vos limites d'utilisation."
        buttonText="Mettre à niveau"
        buttonVariant="success"
        buttonSize="md"
      />

      {/* Warning */}
      <ActionCard
        title="Action requise"
        description="Votre compte nécessite une vérification pour continuer à utiliser tous les services."
        buttonText="Vérifier maintenant"
        buttonVariant="warning"
        buttonSize="md"
      />

      {/* Destructive action */}
      <ActionCard
        title="Supprimer le projet"
        description="Cette action est irréversible. Tous les données associées à ce projet seront définitivement supprimées."
        buttonText="Supprimer"
        buttonVariant="danger"
        buttonSize="sm"
      />
    </div>
  ),
};

// État désactivé
export const DisabledState: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
      gap: '24px',
      maxWidth: '800px'
    }}>
      <ActionCard
        title="Action Disponible"
        description="Cette action card est dans son état normal et le bouton est cliquable."
        buttonText="Action"
        buttonVariant="primary"
        disabled={false}
      />
      <ActionCard
        title="Action Indisponible"
        description="Cette action card est désactivée. Le bouton n'est pas cliquable et l'interface le reflète visuellement."
        buttonText="Action"
        buttonVariant="primary"
        disabled={true}
      />
    </div>
  ),
};

// Contenu long
export const LongContent: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <ActionCard
        title="Titre très long qui peut s'étendre sur plusieurs lignes pour tester le comportement responsive"
        description="Voici une description beaucoup plus longue qui explique en détail le contexte, les implications et les bénéfices de cette action. Elle peut contenir plusieurs phrases et s'étendre sur plusieurs lignes pour tester comment le composant gère les contenus volumineux. Cette description continue encore un peu pour vraiment tester les limites de mise en page et s'assurer que le design reste cohérent même avec beaucoup de contenu."
        buttonText="Action avec texte long"
        buttonVariant="secondary"
        buttonSize="md"
      />
    </div>
  ),
};

// Test interactif
export const Interactive: Story = {
  args: {
    title: 'Action Card Interactive',
    description: 'Cliquez sur le bouton pour déclencher l\'action. Consultez le panneau Actions pour voir l\'événement.',
    buttonText: 'Cliquer ici',
    buttonVariant: 'primary',
    buttonSize: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: `
Action Card interactive pour tester les événements. 
Ouvrez les **Actions** dans le panneau Storybook pour voir les événements déclenchés.
        `,
      },
    },
  },
};

// Layout responsive
export const ResponsiveLayout: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: `
Démonstration du comportement responsive des Action Cards dans différentes configurations de grille.
        `,
      },
    },
  },
  render: () => (
    <div style={{ padding: '24px' }}>
      <h3 style={{ marginBottom: '24px', fontSize: '18px', fontWeight: 'bold' }}>
        Layout Responsive
      </h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px'
      }}>
        {Array.from({ length: 6 }, (_, i) => (
          <ActionCard
            key={i}
            title={`Action Card ${i + 1}`}
            description={`Description pour la carte ${i + 1}. Cette carte fait partie d'une grille responsive qui s'adapte à la largeur de l'écran.`}
            buttonText={`Action ${i + 1}`}
            buttonVariant={(['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'] as const)[i]}
            buttonSize="sm"
          />
        ))}
      </div>
    </div>
  ),
};
