# 🔐 Configuration des Secrets GitHub

## 📋 **Secrets Requis pour le Déploiement**

### **1. Secrets Vercel (Déploiement)**

#### **VERCEL_TOKEN**
- **Description** : Token d'API Vercel pour le déploiement
- **Où l'obtenir** : [Vercel Account Settings > Tokens](https://vercel.com/account/tokens)
- **Permissions** : Full Account Access

#### **VERCEL_ORG_ID**
- **Description** : ID de l'organisation Vercel
- **Où l'obtenir** : [Vercel Dashboard > Settings > General](https://vercel.com/dashboard/settings/general)
- **Format** : `team_xxxxxxxxxxxxxxxx`

#### **VERCEL_PROJECT_ID**
- **Description** : ID du projet Vercel
- **Où l'obtenir** : [Vercel Dashboard > Project Settings > General](https://vercel.com/dashboard/project/[project]/settings/general)
- **Format** : `prj_xxxxxxxxxxxxxxxx`

### **2. Secrets Linear (Intégration)**

#### **LINEAR_API_KEY**
- **Description** : Clé API Linear pour l'intégration
- **Où l'obtenir** : [Linear Settings > API](https://linear.app/settings/api)
- **Permissions** : Read/Write

#### **LINEAR_WEBHOOK_SECRET**
- **Description** : Secret pour les webhooks Linear
- **Où l'obtenir** : [Linear Settings > Webhooks](https://linear.app/settings/webhooks)

## 🔧 **Configuration des Secrets**

### **Étapes de Configuration**

1. **Aller dans GitHub Repository > Settings > Secrets and variables > Actions**
2. **Cliquer sur "New repository secret"**
3. **Ajouter chaque secret un par un**

### **Liste des Secrets à Ajouter**

```
VERCEL_TOKEN=xxxxxxxxxxxxxxxx
VERCEL_ORG_ID=team_xxxxxxxxxxxxxxxx
VERCEL_PROJECT_ID=prj_xxxxxxxxxxxxxxxx
LINEAR_API_KEY=xxxxxxxxxxxxxxxx
LINEAR_WEBHOOK_SECRET=xxxxxxxxxxxxxxxx
```

## 🚀 **Configuration Vercel**

### **1. Créer un Projet Vercel**

1. **Aller sur [Vercel](https://vercel.com)**
2. **Importer le repository GitHub**
3. **Configurer le build :**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### **2. Configuration du Projet**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### **3. Variables d'Environnement Vercel**

```
NODE_ENV=production
VITE_APP_TITLE=Design System Figma
VITE_APP_VERSION=1.0.0
```

## 🔗 **Intégration Linear**

### **1. Configuration Linear**

1. **Aller sur [Linear.app](https://linear.app)**
2. **Créer un nouveau projet :**
   - Name: `Design System Figma`
   - Key: `DSF`
   - Description: `Système de design React synchronisé avec Figma`

### **2. Configuration des Équipes**

```yaml
teams:
  - name: "Design System"
    key: "DS"
    description: "Équipe dédiée au design system"
    members:
      - "maxime@example.com"
```

### **3. Configuration des Labels**

```yaml
labels:
  - name: "Figma Integration"
    color: "#6366f1"
  - name: "Component Development"
    color: "#10b981"
  - name: "Design System"
    color: "#f59e0b"
  - name: "Documentation"
    color: "#8b5cf6"
  - name: "Bug Fix"
    color: "#ef4444"
  - name: "Enhancement"
    color: "#06b6d4"
```

## 📱 **Configuration Cursor**

### **1. Extension Linear**

1. **Installer l'extension Linear pour Cursor**
2. **Configurer l'API key Linear**
3. **Connecter le projet**

### **2. Configuration des Hooks**

```json
{
  "linear": {
    "apiKey": "YOUR_LINEAR_API_KEY",
    "projectId": "YOUR_PROJECT_ID",
    "teamId": "YOUR_TEAM_ID"
  }
}
```

## 🔍 **Vérification de la Configuration**

### **1. Test des Secrets**

```bash
# Vérifier que les secrets sont accessibles
echo $VERCEL_TOKEN
echo $VERCEL_ORG_ID
echo $VERCEL_PROJECT_ID
```

### **2. Test de l'Intégration**

1. **Créer une issue dans Linear**
2. **Vérifier qu'elle apparaît dans Cursor**
3. **Tester le déploiement automatique**

## ⚠️ **Sécurité**

### **Bonnes Pratiques**

- **Ne jamais commiter les secrets dans le code**
- **Utiliser des secrets différents pour chaque environnement**
- **Régénérer régulièrement les tokens**
- **Limiter les permissions des tokens**
- **Auditer régulièrement l'accès**

### **Rotation des Secrets**

- **Vercel Token** : Tous les 6 mois
- **Linear API Key** : Tous les 12 mois
- **Webhook Secrets** : En cas de compromission

## 📚 **Ressources**

- [GitHub Secrets Documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Linear API Documentation](https://developers.linear.app/docs)
- [Cursor Extensions](https://cursor.sh/extensions)
