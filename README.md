# Business Model Council

Conseil multi-agents pour challenger un business model, un produit et un plan d'exécution.

Le dépôt sépare trois couches :

- `core/` : protocoles, contrats de sortie et règles communes à tous les projets ;
- `lenses/` : grilles de lecture inspirées de travaux et décisions publics de dirigeants et investisseurs ;
- `packs/` : spécialistes métier et contraintes propres à un secteur ;
- `projects/` : adaptateurs qui branchent un projet concret sans contaminer le noyau.

Les agents ne prétendent pas être les personnes de référence ni reproduire leurs pensées privées. Une lentille est une synthèse traçable de raisonnements publics, utilisée pour poser de meilleures questions.

## Utilisation

1. Choisir un projet et ses sources autorisées.
2. Charger le noyau, les lentilles utiles et un seul ou plusieurs packs métier.
3. Lancer une analyse indépendante par agent.
4. Faire circuler les objections structurées entre agents.
5. Demander à un synthétiseur de produire les décisions, expériences et pivots.

Le protocole impose de distinguer les faits, les hypothèses et les opinions. Le consensus n'est jamais une condition de réussite : un désaccord bien localisé est souvent le résultat le plus utile.

## Premier pack

`packs/automotive-fintech/` couvre de manière générique les concessionnaires, captives, risque actuariel, DMS, conformité, vente B2B et intégrité des données financières. Il ne contient aucune référence à un projet client ou à un dépôt consommateur.

## Validation locale

```bash
node scripts/validate-council.mjs
```

Le dépôt est conçu pour être installé ensuite comme skill Codex ou utilisé comme bibliothèque de prompts par un orchestrateur multi-agents.
