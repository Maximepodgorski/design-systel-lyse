# 🔧 Configuration des Workflows GitHub Actions

## 📋 **Workflows Disponibles**

### **1. CI Pipeline (Simple) - ACTIF**
- **Fichier** : `ci-simple.yml`
- **Déclencheurs** : Push et Pull Request sur `main` et `develop`
- **Actions** : Tests, linting, build
- **Statut** : ✅ Prêt à l'emploi

### **2. CI/CD Pipeline (Complet) - DÉSACTIVÉ**
- **Fichier** : `ci.yml` (supprimé temporairement)
- **Actions** : Tests + Déploiement Vercel
- **Statut** : ❌ Nécessite la configuration des secrets Vercel

## 🚀 **Activation du Workflow Complet**

### **Étape 1 : Configurer Vercel**
1. Aller sur [Vercel](https://vercel.com)
2. Importer le repository GitHub
3. Obtenir les informations nécessaires

### **Étape 2 : Ajouter les Secrets GitHub**
1. Aller dans `Settings > Secrets and variables > Actions`
2. Ajouter :
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

### **Étape 3 : Réactiver le Workflow**
1. Recréer le fichier `ci.yml`
2. Décommenter les étapes de déploiement
3. Pousser les changements

## 🔍 **Dépannage des Workflows**

### **Erreurs Communes**
- **Secrets manquants** : Configurer les secrets Vercel
- **Tests qui échouent** : Vérifier le code localement
- **Build qui échoue** : Vérifier les dépendances

### **Commandes de Test Local**
```bash
# Tester le linting
npm run lint

# Tester le build
npm run build

# Tester les tests
npm run test
```

## 📚 **Documentation**
- **Workflow simple** : `ci-simple.yml`
- **Configuration des secrets** : `../SECRETS_SETUP.md`
- **Guide complet** : `../DEVELOPMENT_WORKFLOW.md`
