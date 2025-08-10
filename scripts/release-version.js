import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const bump = process.argv[2];

if (!['patch', 'minor', 'major'].includes(bump)) {
  console.error(`❌ Invalid version bump: "${bump}"`);
  console.error('Usage: node scripts/release-version.js [patch|minor|major]');
  process.exit(1);
}

function runCommand(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status);
}

try {
  console.log(`🔧 Bumping version: ${bump}...`);
  runCommand('npm', ['version', bump, '--no-git-tag-version']);

  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const pkg = JSON.parse(readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  const newVersion = pkg.version;
  const tag = `v${newVersion}`;

  console.log(`📝 Committing version bump...`);
  runCommand('git', ['add', 'package.json', 'package-lock.json']);
  runCommand('git', ['commit', '-m', `chore: release ${tag}`]);

  console.log(`🏷️ Creating annotated tag ${tag}...`);
  runCommand('git', ['tag', '-a', tag, '-m', `Release ${tag}`]);

  console.log(`🚀 Pushing to origin...`);
  runCommand('git', ['push', 'origin', 'main', '--follow-tags']);

  console.log(`✅ Release prepared and pushed as ${tag}`);
} catch (error) {
  console.error('❌ Release script failed:', error.message);
  process.exit(1);
}
