#!/usr/bin/env node

import execSync from 'child_process';
import fs from 'fs';
import path from 'path';

const bump = process.argv[2];

if (!['patch', 'minor', 'major'].includes(bump)) {
  console.error(`❌ Invalid version bump: "${bump}"`);
  console.error('Usage: node scripts/release-version.js [patch|minor|major]');
  process.exit(1);
}

try {
  console.log(`🔧 Bumping version: ${bump}...`);
  execSync(`npm version ${bump} --no-git-tag-version`, { stdio: 'inherit' });

  const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
  const newVersion = pkg.version;
  const tag = `v${newVersion}`;

  console.log(`📝 Committing version bump...`);
  execSync(`git add package.json package-lock.json`, { stdio: 'inherit' });
  execSync(`git commit -m "chore: release ${tag}"`, { stdio: 'inherit' });

  console.log(`🏷️ Creating tag ${tag}...`);
  execSync(`git tag ${tag}`, { stdio: 'inherit' });

  console.log(`🚀 Pushing to origin...`);
  execSync(`git push origin main --follow-tags`, { stdio: 'inherit' });

  console.log(`✅ Release prepared and pushed as ${tag}`);
} catch (error) {
  console.error('❌ Release script failed:', error.message);
  process.exit(1);
}
