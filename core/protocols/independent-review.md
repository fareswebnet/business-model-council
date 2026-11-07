# Tour 1 — Analyse indépendante

Chaque agent reçoit uniquement :

- le brief du projet ;
- ses sources autorisées ;
- sa fiche de rôle ;
- la question stratégique à traiter.

Il ne reçoit pas les réponses des autres agents. Cela évite l'effet de meute et rend les désaccords observables.

## Sortie obligatoire

Chaque agent produit des objets conformes à `core/schemas/claim.schema.json` :

- `claim_id` stable ;
- `type` : `fact`, `assumption`, `inference`, `recommendation` ou `risk` ;
- `statement` ;
- `evidence` ou `evidence_gap` ;
- `confidence` : `high`, `medium` ou `low` ;
- `falsifier` : ce qui invaliderait l'affirmation ;
- `impact` et `urgency`.

Une affirmation sans preuve disponible doit être étiquetée comme hypothèse ou lacune, jamais comme fait.
