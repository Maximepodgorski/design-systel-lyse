#!/usr/bin/env node

/**
 * Linear Helper - Script de contournement pour analyser les issues rapidement
 * Usage: node linear-helper.js <issue-id>
 */

import https from 'https';

const CONFIG = {
  apiUrl: 'https://api.linear.app/graphql',
  apiKey: 'YOUR_LINEAR_API_KEY',
  teamId: 'YOUR_TEAM_ID'
};

async function makeLinearRequest(query, variables = {}) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query, variables });
    
    const options = {
      hostname: 'api.linear.app',
      port: 443,
      path: '/graphql',
      method: 'POST',
      headers: {
        'Authorization': CONFIG.apiKey,
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseData);
          if (parsed.errors) {
            reject(new Error(parsed.errors[0].message));
          } else {
            resolve(parsed.data);
          }
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(data);
    req.end();
  });
}

async function getIssueDetails(issueId) {
  const query = `
    query GetIssue($id: String!) {
      issue(id: $id) {
        id
        title
        description
        state {
          name
          color
        }
        priority
        assignee {
          name
          email
        }
        labels {
          nodes {
            name
            color
          }
        }
        comments {
          nodes {
            body
            user {
              name
            }
            createdAt
          }
        }
      }
    }
  `;

  try {
    const result = await makeLinearRequest(query, { id: issueId });
    return result.issue;
  } catch (error) {
    throw new Error(`Erreur lors de la récupération de l'issue: ${error.message}`);
  }
}

async function analyzeIssue(issue) {
  console.log('\n🔍 ANALYSE RAPIDE DE L\'ISSUE\n');
  console.log(`📌 Titre: ${issue.title}`);
  console.log(`🏷️  État: ${issue.state.name}`);
  console.log(`⚡ Priorité: ${issue.priority || 'Non définie'}`);
  
  if (issue.assignee) {
    console.log(`👤 Assigné à: ${issue.assignee.name}`);
  }

  console.log('\n📝 DESCRIPTION:');
  console.log('─'.repeat(50));
  console.log(issue.description || 'Aucune description');
  
  if (issue.labels?.nodes?.length > 0) {
    console.log('\n🏷️  LABELS:');
    issue.labels.nodes.forEach(label => {
      console.log(`  • ${label.name}`);
    });
  }

  // Analyse du type de tâche
  console.log('\n🎯 TYPE DE TÂCHE DÉTECTÉ:');
  
  const description = (issue.description || '').toLowerCase();
  
  if (description.includes('component') && description.includes('styling')) {
    console.log('  ✅ Mise à jour de styling de composant');
    console.log('  💡 Tâche simple - devrait être rapide à traiter');
    
    // Extraction des détails de styling
    const borderMatch = issue.description.match(/border[^→]*→[^*\n]*/gi);
    const backgroundMatch = issue.description.match(/background[^→]*→[^*\n]*/gi);
    
    if (borderMatch || backgroundMatch) {
      console.log('\n🎨 CHANGEMENTS DE STYLE IDENTIFIÉS:');
      if (borderMatch) {
        borderMatch.forEach(match => console.log(`  • ${match.trim()}`));
      }
      if (backgroundMatch) {
        backgroundMatch.forEach(match => console.log(`  • ${match.trim()}`));
      }
    }
  } else if (description.includes('bug') || description.includes('fix')) {
    console.log('  🐛 Correction de bug');
  } else if (description.includes('feature') || description.includes('add')) {
    console.log('  ✨ Nouvelle fonctionnalité');
  } else {
    console.log('  📝 Tâche générale');
  }

  // Recommandations
  console.log('\n💡 RECOMMANDATIONS:');
  console.log('  • Utilisez ce script au lieu de l\'intégration Cursor pour les analyses rapides');
  console.log('  • Copiez les détails dans Cursor Chat directement');
  console.log('  • Évitez l\'examen automatique pour ce type d\'issue');
}

async function main() {
  const issueId = process.argv[2];
  
  if (!issueId) {
    console.error('❌ Usage: node linear-helper.js <issue-id>');
    console.error('📖 Exemple: node linear-helper.js b0fd9ce4-3af7-4052-a966-50abbdda1b51');
    process.exit(1);
  }

  try {
    console.log(`🔄 Récupération de l'issue ${issueId}...`);
    const issue = await getIssueDetails(issueId);
    
    if (!issue) {
      console.error('❌ Issue non trouvée');
      process.exit(1);
    }

    await analyzeIssue(issue);
    
    console.log('\n✅ Analyse terminée en quelques secondes au lieu de 27 minutes !');
    
  } catch (error) {
    console.error(`❌ Erreur: ${error.message}`);
    process.exit(1);
  }
}

// Vérifier si le script est exécuté directement
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
