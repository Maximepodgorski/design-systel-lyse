import './styles/main.scss'
import Button from './components/Button/Button'
import ActionCard from './components/ActionCard/ActionCard'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Design System Figma</h1>
        <p>Composants synchronisés avec Figma</p>
      </header>
      
      <main className="app-main">
        <section className="design-system-section">
          <h2>Composants du Design System</h2>
          <p>Test des composants avec les variables sémantiques Figma</p>
          
          <div className="component-showcase">
            <h3>Boutons - Variantes</h3>
            <div className="button-group">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="neutral">Neutral</Button>
            </div>
            
            <h3>Boutons - Tailles</h3>
            <div className="button-group">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
            
            <h3>Boutons - États</h3>
            <div className="button-group">
              <Button disabled>Disabled</Button>
              <Button variant="primary" disabled>Primary Disabled</Button>
              <Button variant="secondary" disabled>Secondary Disabled</Button>
            </div>
            
            <h3>Boutons - Avec Icônes</h3>
            <div className="button-group">
              <Button 
                variant="primary" 
                icon={<span>🚀</span>} 
                iconPosition="left"
              >
                Avec Icône Gauche
              </Button>
              <Button 
                variant="secondary" 
                icon={<span>⭐</span>} 
                iconPosition="right"
              >
                Avec Icône Droite
              </Button>
              <Button 
                variant="success" 
                icon={<span>✅</span>} 
                iconPosition="left"
              >
                Succès
              </Button>
            </div>
            
            <h3>Boutons - Full Width</h3>
            <div className="button-group button-group--full-width">
              <Button variant="primary" fullWidth>Bouton Pleine Largeur</Button>
            </div>
            
            <h3>Boutons - Différents Types</h3>
            <div className="button-group">
              <Button type="button">Type Button</Button>
              <Button type="submit">Type Submit</Button>
              <Button type="reset">Type Reset</Button>
            </div>
            
            <h3>Action Cards</h3>
            <div className="card-group">
              <ActionCard
                title="Title"
                description="Description"
                buttonText="@quantum"
                buttonVariant="secondary"
                buttonSize="sm"
                onButtonClick={() => console.log('Action Card clicked!')}
              />
              
              <ActionCard
                title="Notifications"
                description="Recevoir les mises à jour importantes"
                buttonText="Activer"
                buttonVariant="primary"
                buttonSize="md"
                onButtonClick={() => console.log('Notifications enabled!')}
              />
              
              <ActionCard
                title="Mode Sombre"
                description="Passer au thème sombre"
                buttonText="Basculer"
                buttonVariant="neutral"
                buttonSize="sm"
                onButtonClick={() => console.log('Dark mode toggled!')}
              />
              
              <ActionCard
                title="Sauvegarde"
                description="Sauvegarder automatiquement"
                buttonText="Configurer"
                buttonVariant="success"
                buttonSize="md"
                onButtonClick={() => console.log('Auto-save configured!')}
                disabled={true}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
