import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgPath = path.join(__dirname, '../package.json');

export const VALID_BUMPS = ['patch', 'minor', 'major'];

function defaultRunCommand(command, args) {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: false });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status);
}

/**
 * @param {'patch' | 'minor' | 'major'} bump
 * @param {{
 *   runCommand?: (command: string, args: string[]) => void;
 *   readPackageJson?: () => { version: string };
 * }} [options]
 */
export function runReleaseVersion(bump, options = {}) {
  if (!VALID_BUMPS.includes(bump)) {
    throw new Error(`Invalid version bump: "${bump}"`);
  }

  const runCommand = options.runCommand ?? defaultRunCommand;
  const readPackageJson =
    options.readPackageJson ?? (() => JSON.parse(readFileSync(pkgPath, 'utf8')));

  console.log(`🔧 Bumping version: ${bump}...`);
  runCommand('npm', ['version', bump, '--no-git-tag-version']);

  const pkg = readPackageJson();
  const newVersion = pkg.version;
  const tag = `v${newVersion}`;

  console.log(`📝 Committing version bump...`);
  runCommand('git', ['add', 'package.json', 'package-lock.json']);
  runCommand('git', ['commit', '-m', `chore: release ${tag}`]);

  console.log(`🏷️ Creating annotated tag ${tag}...`);
  runCommand('git', ['tag', '-a', tag, '-m', `Release ${tag}`]);

  console.log(`🚀 Pushing branch to origin...`);
  runCommand('git', ['push', 'origin', 'main']);

  console.log(`🚀 Pushing tag to origin...`);
  runCommand('git', ['push', 'origin', tag]);

  console.log(`✅ Release prepared and pushed as ${tag}`);
}

const isMainModule =
  Boolean(process.argv[1]) &&
  path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);

if (isMainModule) {
  const bump = process.argv[2];
  if (!VALID_BUMPS.includes(bump)) {
    console.error(`❌ Invalid version bump: "${bump}"`);
    console.error('Usage: node scripts/release-version.js [patch|minor|major]');
    process.exit(1);
  }
  try {
    runReleaseVersion(bump);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('❌ Release script failed:', message);
    process.exit(1);
  }
}
