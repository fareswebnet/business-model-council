import { readFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';

const root = new URL('..', import.meta.url);
const required = [
  'README.md',
  'core/schemas/agent.schema.json',
  'core/schemas/claim.schema.json',
  'core/schemas/debate.schema.json',
  'skills/business-model-council/SKILL.md',
  'packs/automotive-fintech/manifest.yaml',
  'projects/generic-project/project-config.yaml',
];

for (const relative of required) {
  await readFile(new URL(relative, root), 'utf8');
}

const lenses = await readdir(new URL('lenses/', root));
const domainAgents = await readdir(new URL('packs/automotive-fintech/agents/', root));

if (lenses.length < 8) throw new Error(`Expected at least 8 lenses, found ${lenses.length}`);
if (domainAgents.length < 6) throw new Error(`Expected at least 6 domain agents, found ${domainAgents.length}`);

for (const schema of ['agent.schema.json', 'claim.schema.json', 'debate.schema.json']) {
  JSON.parse(await readFile(new URL(`core/schemas/${schema}`, root), 'utf8'));
}

console.log(`Council valid: ${lenses.length} lenses, ${domainAgents.length} automotive-fintech specialists.`);
