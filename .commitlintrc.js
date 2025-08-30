module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nouvelle fonctionnalité
        'fix',      // Correction de bug
        'docs',     // Documentation
        'style',    // Formatage, point-virgules manquants, etc.
        'refactor', // Refactoring
        'perf',     // Amélioration des performances
        'test',     // Ajout ou modification de tests
        'chore',    // Tâches de maintenance
        'ci',       // Configuration CI/CD
        'build',    // Build system ou dépendances externes
        'revert'    // Revert d'un commit précédent
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'components',    // Composants React
        'styles',        // Styles SCSS/CSS
        'variables',     // Variables de design system
        'figma',         // Intégration Figma
        'docs',          // Documentation
        'config',        // Configuration
        'deps',          // Dépendances
        'ci',            // CI/CD
        'build'          // Build
      ]
    ],
    'subject-case': [2, 'always', 'lower'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72]
  }
};
