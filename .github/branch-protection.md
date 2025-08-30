# 🛡️ Configuration de la Protection des Branches

## 📋 **Branches à Protéger**

### **1. Branche `main` (Production)**
- ✅ **Require pull request reviews before merging**
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- ✅ **Include administrators**
- ✅ **Restrict pushes that create files that use the git lfs track command**

### **2. Branche `develop` (Développement)**
- ✅ **Require pull request reviews before merging**
- ✅ **Require status checks to pass before merging**
- ✅ **Require branches to be up to date before merging**
- ❌ **Include administrators** (optionnel)

## 🔧 **Configuration GitHub**

### **Étapes de Configuration**

1. **Aller dans Settings > Branches**
2. **Cliquer sur "Add rule"**
3. **Configurer la protection pour `main` :**
   - Branch name pattern: `main`
   - Require a pull request before merging
   - Require approvals: `1`
   - Dismiss stale PR approvals when new commits are pushed
   - Require status checks to pass before merging
   - Require branches to be up to date before merging

4. **Configurer la protection pour `develop` :**
   - Branch name pattern: `develop`
   - Require a pull request before merging
   - Require approvals: `1`
   - Dismiss stale PR approvals when new commits are pushed
   - Require status checks to pass before merging
   - Require branches to be up to date before merging

## 🚫 **Règles de Protection**

### **Pull Request Requise**
- Impossible de merger directement dans `main` ou `develop`
- Toutes les modifications doivent passer par une PR
- Review obligatoire avant merge

### **Status Checks**
- Les tests doivent passer
- Le build doit réussir
- Le linting doit passer
- La vérification TypeScript doit passer

### **Branches à Jour**
- La branche doit être à jour avec la branche cible
- Évite les conflits de merge

## 🔄 **Workflow Recommandé**

```
feature/component → develop → main
     ↓              ↓        ↓
   PR Review    PR Review  Deploy
     ↓              ↓        ↓
   Merge        Merge     Production
```

## 📝 **Commandes Utiles**

```bash
# Créer une branche feature
git checkout -b feature/component-name

# Mettre à jour develop
git checkout develop
git pull origin develop

# Rebase de la feature sur develop
git checkout feature/component-name
git rebase develop

# Pousser la feature
git push origin feature/component-name

# Créer la PR sur GitHub
# Puis merger dans develop
```

## ⚠️ **Points d'Attention**

- **Ne jamais pousser directement sur `main`**
- **Toujours créer une PR pour les modifications**
- **S'assurer que les tests passent avant de merger**
- **Respecter les conventions de commits**
- **Documenter les changements importants**
