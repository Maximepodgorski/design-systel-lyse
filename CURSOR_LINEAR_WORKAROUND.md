# 🚀 Solutions aux Problèmes de Performance Cursor + Linear

## 🔍 Problème Identifié

Cursor peut prendre jusqu'à **27 minutes** pour analyser des issues Linear bien contextualisées, ce qui est totalement disproportionné.

## ✅ Solutions Implémentées

### **1. Configuration Optimisée (.linearrc)**

Ajout de paramètres de performance :

```json
{
  "timeout": 30000,
  "retries": 2,
  "cacheEnabled": true,
  "maxIssuesPerQuery": 10
}
```

### **2. Script de Contournement (linear-helper.js)**

**Usage :**
```bash
node linear-helper.js <issue-id>
```

**Exemple :**
```bash
node linear-helper.js b0fd9ce4-3af7-4052-a966-50abbdda1b51
```

**Avantages :**
- ⚡ Analyse en **secondes** au lieu de minutes
- 🎯 Détection automatique du type de tâche
- 📝 Extraction des détails pertinents
- 💡 Recommandations contextuelles

### **3. Workflow de Contournement**

#### **Pour les Issues Simples (Styling, Typos, etc.)**

1. **Éviter l'intégration Cursor** ❌
2. **Utiliser le script** : `node linear-helper.js <issue-id>` ✅
3. **Copier les détails** dans Cursor Chat ✅
4. **Travailler directement** sur les fichiers ✅

#### **Pour les Issues Complexes**

1. **Utiliser le script** pour l'analyse initiale ✅
2. **Désactiver temporairement Linear** si nécessaire ✅
3. **Travailler par étapes** plutôt qu'en une fois ✅

## 🔧 Commandes Utiles

### **Désactiver Temporairement Linear**
```bash
mv .linearrc .linearrc.disabled
```

### **Réactiver Linear**
```bash
mv .linearrc.disabled .linearrc
```

### **Tester la Configuration**
```bash
curl -X POST \
  -H "Authorization: YOUR_LINEAR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "query { viewer { name } }"}' \
  https://api.linear.app/graphql
```

## 📊 Comparaison des Performances

| Méthode | Temps d'Analyse | Efficacité | Recommandé |
|---------|-----------------|------------|------------|
| Cursor Integration | 27+ minutes | ❌ Très lent | Non |
| linear-helper.js | < 10 secondes | ✅ Très rapide | Oui |
| Copie manuelle | < 1 minute | ✅ Rapide | Oui |

## 🎯 Recommandations par Type d'Issue

### **Styling/Composants** 
→ `linear-helper.js` + Cursor Chat

### **Nouvelles Fonctionnalités**
→ `linear-helper.js` + planification manuelle

### **Bugs Complexes**
→ Désactiver Linear temporairement

### **Refactoring**
→ Analyse par petites étapes

## 🔄 Retour à la Normale

Une fois que Cursor corrige ces problèmes de performance :

1. Supprimer `linear-helper.js`
2. Restaurer `.linearrc` simple
3. Réactiver l'intégration complète

## 📞 Support

Si le problème persiste :
1. Vérifier les logs Cursor
2. Contacter le support Cursor
3. Utiliser les solutions de contournement en attendant


