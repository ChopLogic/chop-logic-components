import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const bump = process.argv[2];

if (!['patch', 'minor', 'major'].includes(bump)) {
  console.error(`❌ Invalid version bump: "${bump}"`);
  console.error('Usage: node scripts/release-version.js [patch|minor|major]');
  process.exit(1);
}

try {
  console.log(`🔧 Bumping version: ${bump}...`);
  execSync(`npm version ${bump} --no-git-tag-version`, { stdio: 'inherit' });

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const pkg = JSON.parse(readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  const newVersion = pkg.version;
  const tag = `v${newVersion}`;

  console.log(`📝 Committing version bump...`);
  execSync(`git add package.json package-lock.json`, { stdio: 'inherit' });
  execSync(`git commit -m "chore: release ${tag}"`, { stdio: 'inherit' });

  console.log(`🏷️ Creating annotated tag ${tag}...`);
  execSync(`git tag -a ${tag} -m "Release ${tag}"`, { stdio: 'inherit' });

  console.log(`🚀 Pushing to origin...`);
  execSync(`git push origin main --follow-tags`, { stdio: 'inherit' });

  console.log(`✅ Release prepared and pushed as ${tag}`);
} catch (error) {
  console.error('❌ Release script failed:', error.message);
  process.exit(1);
}
